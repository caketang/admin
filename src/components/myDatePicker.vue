<template>
    <div class="vdp-datepicker" :class="[wrapperClass, isRtl ? 'rtl' : '']">
        <div :class="{'input-group' : bootstrapStyling}">
            <!-- Calendar Button -->
            <span class="vdp-datepicker__calendar-button" :class="{'input-group-addon' : bootstrapStyling}"
                  v-if="calendarButton" @click.stop="showCalendar" v-bind:style="{'cursor:not-allowed;' : disabledPicker}">
        <i :class="calendarButtonIcon">
          <span v-if="!calendarButtonIcon">&hellip;</span>
        </i>
      </span>
            <!-- Input -->
            <div class="el-date-editor el-input el-date-editor--date intDataW">
                <i class="el-input__icon " :class="{'el-icon-circle-close closeIcon':formattedValue,'el-icon-date':!formattedValue,}" @click.stop="delVal"></i>
                <input
                        class="el-input__inner"
                        :type="inline ? 'hidden' : 'text'"
                        :class="[ inputClass, { 'form-control' : bootstrapStyling } ]"
                        :name="name"
                        :id="id"
                        @click.stop="showCalendar"
                        :value="formattedValue"
                        :placeholder="placeholder"
                        :clear-button="clearButton"
                        :disabled="disabledPicker"
                        :required="required"
                        readonly>
            </div>
            <!-- Clear Button -->
            <span class="vdp-datepicker__clear-button" :class="{'input-group-addon' : bootstrapStyling}"
                  v-if="clearButton && selectedDate" @click.stop="clearDate()">
        <i :class="clearButtonIcon">
          <span v-if="!clearButtonIcon">&times;</span>
        </i>
      </span>
        </div>

        <!-- Day View -->
        <div :class="[calendarClass, 'vdp-datepicker__calendar']" v-show="showDayView" v-bind:style="calendarStyle" ref="datediv">
            <header>
                <span
                        @click.stop="isRtl ? nextMonth() : previousMonth()"
                        class="prev"
                        v-bind:class="{ 'disabled' : isRtl ? nextMonthDisabled(pageTimestamp) : previousMonthDisabled(pageTimestamp) }">&lt;</span>
                <span @click.stop="showMonthCalendar" class="yearColor" :class="!dayViewOnly ? 'up' : ''"> {{ currYear }}年-{{ currMonthName }}
                </span>
                <span
                        @click.stop="isRtl ? previousMonth() : nextMonth()"
                        class="next"
                        v-bind:class="{ 'disabled' : isRtl ? previousMonthDisabled(pageTimestamp) : nextMonthDisabled(pageTimestamp) }">&gt;</span>
            </header>
            <div :class="isRtl ? 'flex-rtl' : ''">
                <span class="cell day-header" style="background:#EFF2F7;" v-for="d in daysOfWeek" :key="d.timestamp">{{ d }}</span>
                <span class="cell day blank" v-for="d in blankDays" :key="d.timestamp"></span><!--
              --><span class="cell day"
                       v-for="day in days"
                       :key="day.timestamp"
                       track-by="timestamp"
                       v-bind:class="dayClasses(day)"
                       @click.stop="selectDate(day)">{{ day.date }}</span>
            </div>
        </div>
        <!-- Month View -->
        <template v-if="!dayViewOnly">
            <div :class="[calendarClass, 'vdp-datepicker__calendar']" v-show="showMonthView"
                 v-bind:style="calendarStyle">
                <header>
                  <span
                          @click.stop="previousYear"
                          class="prev"
                          v-bind:class="{ 'disabled' : previousYearDisabled(pageTimestamp) }">&lt;</span>
                    <span @click.stop="showYearCalendar" class="up">{{ getPageYear() }}</span>
                    <span
                            @click.stop="nextYear"
                            class="next"
                            v-bind:class="{ 'disabled' : nextYearDisabled(pageTimestamp) }">&gt;</span>
                </header>
                <span class="cell month"
                      v-for="month in months"
                      :key="month.timestamp"
                      track-by="timestamp"
                      v-bind:class="{ 'selected': month.isSelected, 'disabled': month.isDisabled }"
                      @click.stop="selectMonth(month)">{{ month.month }}</span>
            </div>
        </template>

        <!-- Year View -->
        <template v-if="!dayViewOnly">
            <div :class="[calendarClass, 'vdp-datepicker__calendar']" v-show="showYearView"
                 v-bind:style="calendarStyle">
                <header>
                  <span @click.stop="previousDecade" class="prev"
                        v-bind:class="{ 'disabled' : previousDecadeDisabled(pageTimestamp) }">&lt;</span>
                    <span>{{ getPageDecade() }}</span>
                    <span @click.stop="nextDecade" class="next"
                          v-bind:class="{ 'disabled' : nextMonthDisabled(pageTimestamp) }">&gt;</span>
                </header>
                <span
                        class="cell year"
                        v-for="year in years"
                        :key="year.timestamp"
                        track-by="timestamp"
                        v-bind:class="{ 'selected': year.isSelected, 'disabled': year.isDisabled }"
                        @click.stop="selectYear(year)">{{ year.year }}</span>
            </div>
        </template>
    </div>
</template>

<script>
    import DateUtils from './utils/DateUtils.js'
    import DateLanguages from './utils/DateLanguages.js'
    export default {
        props: {
            value: {
                validator: function (val) {
                    return val === null || val instanceof Date || typeof val === 'string'
                }
            },
            name: String,
            id: String,
            format: {
                type: [String, Function],
                default: 'yyyy-MM-dd'
            },
            language: {
                type: String,
                default: 'zh'
            },
            fullMonthName: Boolean,
            disabled: Object,
            highlighted: Object,
            placeholder: String,
            inline: Boolean,
            calendarClass: [String, Object],
            inputClass: [String, Object],
            wrapperClass: [String, Object],
            mondayFirst: Boolean,
            clearButton: Boolean,
            clearButtonIcon: String,
            calendarButton: Boolean,
            calendarButtonIcon: String,
            bootstrapStyling: Boolean,
            initialView: {
                type: String,
                default: 'day'
            },
            disabledPicker: Boolean,
            required: Boolean,
            dayViewOnly: Boolean,
            datekey: {
                type: String,
                default: ""
            },
            showview: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                // 系统默认时间
                initDate: new Date(sessionStorage.sysTime),
                /*
                 * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
                 * This represents the first day of the current viewing month
                 * {Number}
                 */
                pageTimestamp: (new Date(sessionStorage.sysTime)).setDate(1),
                /*
                 pageTimestamp: (new Date(this.initval)).setDate(1),
                 /*
                 * Selected Date
                 * {Date}
                 */
                selectedDate: null,
                /*
                 * Flags to show calendar views
                 * {Boolean}
                 */
                showDayView: false,
                showMonthView: false,
                showYearView: false,
                /*
                 * Positioning
                 */
                calendarHeight: 0,
                clearVal: false
            }
        },
        watch: {
            value (value) {
                this.setValue(value)
            },
            initialView () {
                this.setInitialView()
            }
        },
        computed: {
            pageDate () {
                return new Date(this.pageTimestamp)
            },
            formattedValue () {
                if (!this.selectedDate) {
                    this.clearVal = false;
                    return null
                }
                if(this.clearVal){
                    this.clearVal = false;
                    return null;
                }
                return typeof this.format === 'function'
                    ? this.format(this.selectedDate)
                    : DateUtils.formatDate(new Date(this.selectedDate), this.format, this.translation)
            },
            showclose(){
                if(this.formattedValue){
                    return true;
                }else{
                    return false;
                }
            },
            translation () {
                return DateLanguages.translations[this.language]
            },
            currMonthName () {
                const monthName = this.fullMonthName ? this.translation.months.original : this.translation.months.abbr
                return DateUtils.getMonthNameAbbr(this.pageDate.getMonth(), monthName)
            },
            currYear () {
                return this.pageDate.getFullYear()
            },
            /**
             * Returns the day number of the week less one for the first of the current month
             * Used to show amount of empty cells before the first in the day calendar layout
             * @return {Number}
             */
            blankDays () {
                const d = this.pageDate
                let dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
                if (this.mondayFirst) {
                    return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6
                }
                return dObj.getDay()
            },
            daysOfWeek () {
                if (this.mondayFirst) {
                    const tempDays = this.translation.days.slice()
                    tempDays.push(tempDays.shift())
                    return tempDays
                }
                return this.translation.days
            },
            days () {
                const d = this.pageDate
                let days = []
                // set up a new date object to the beginning of the current 'page'
                let dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes())
                let daysInMonth = DateUtils.daysInMonth(dObj.getFullYear(), dObj.getMonth())
                for (let i = 0; i < daysInMonth; i++) {
                    let bb = (dObj.toDateString() === (new Date(this.initDate)).toDateString());
                    days.push({
                        date: dObj.getDate(),
                        timestamp: dObj.getTime(),
                        isSelected: this.isSelectedDate(dObj),
                        isDisabled: this.isDisabledDate(dObj),
                        isHighlighted: this.isHighlightedDate(dObj),
                        isHighlightStart: this.isHighlightStart(dObj),
                        isHighlightEnd: this.isHighlightEnd(dObj),
                        isToday: (dObj.toDateString() === this.initDate.toDateString()),
                        isWeekend: dObj.getDay() === 0 || dObj.getDay() === 6,
                        isSaturday: dObj.getDay() === 6,
                        isSunday: dObj.getDay() === 0
                    })
                    dObj.setDate(dObj.getDate() + 1)
                }
                return days
            },
            months () {
                const d = this.pageDate
                let months = []
                // set up a new date object to the beginning of the current 'page'
                let dObj = new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes())
                for (let i = 0; i < 12; i++) {
                    months.push({
                        month: DateUtils.getMonthName(i, this.translation.months.original),
                        timestamp: dObj.getTime(),
                        isSelected: this.isSelectedMonth(dObj),
                        isDisabled: this.isDisabledMonth(dObj)
                    })
                    dObj.setMonth(dObj.getMonth() + 1)
                }
                return months
            },
            years () {
                const d = this.pageDate
                let years = []
                // set up a new date object to the beginning of the current 'page'
                let dObj = new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes())
                for (let i = 0; i < 10; i++) {
                    years.push({
                        year: dObj.getFullYear(),
                        timestamp: dObj.getTime(),
                        isSelected: this.isSelectedYear(dObj),
                        isDisabled: this.isDisabledYear(dObj)
                    })
                    dObj.setFullYear(dObj.getFullYear() + 1)
                }
                return years
            },
            calendarStyle () {
                return {
                    position: this.isInline ? 'static' : undefined
                }
            },
            isOpen () {
                return this.showDayView || this.showMonthView || this.showYearView
            },
            isInline () {
                return !!this.inline
            },
            isRtl () {
                return this.translation.rtl === true
            }
        },
        methods: {
            // 删除日期值
            delVal(){
                if(this.showclose){
                    this.clearVal = true;
//                    this.$emit('get-date',{'day': '','daykey': this.datekey});
                }else{
                    this.clearVal = false;
                }
            },
            /**
             * Close all calendar layers
             */
            close () {
                this.showDayView = this.showMonthView = this.showYearView = false
                if (!this.isInline) {
                    this.$emit('closed')
                    document.removeEventListener('click', this.clickOutside, false)
                }
            },
            resetDefaultDate () {
                if (this.selectedDate === null) {
                    this.setPageDate()
                    return
                }
                this.setPageDate(this.selectedDate)
            },
            /**
             * Effectively a toggle to show/hide the calendar
             * @return {mixed} [description]
             */
            showCalendar () {
                if (this.disabledPicker || this.isInline) {
                    return false
                }
                if (this.isOpen) {
                    return this.close()
                }
                this.setInitialView()
            },
            setInitialView () {
                switch (this.initialView) {
                    case 'year':
                        this.showYearCalendar()
                        break
                    case 'month':
                        this.showMonthCalendar()
                        break
                    default:
                        this.showDayCalendar()
                        break
                }
            },
            showDayCalendar () {
                this.close()
                this.showDayView = true
                if (!this.isInline) {
                    this.$emit('opened')
                    document.addEventListener('click', this.clickOutside, false)
                }
            },
            showMonthCalendar () {
                if (this.dayViewOnly) return false
                this.close()
                this.showMonthView = true
                if (!this.isInline) {
                    document.addEventListener('click', this.clickOutside, false)
                }
            },
            showYearCalendar () {
                this.close()
                this.showYearView = true
                if (!this.isInline) {
                    document.addEventListener('click', this.clickOutside, false)
                }
            },
            setDate (timestamp) {
                const date = new Date(timestamp)
                this.selectedDate = new Date(date)
                this.setPageDate(date)
                this.$emit('selected', new Date(date))
                this.$emit('input', FORMATDAT(new Date(date),'yyyy-MM-dd'))
                this.$emit('get-date',{'day': FORMATDAT(timestamp,'yyyy-MM-dd'),'daykey': this.datekey});
            },
            clearDate () {
                this.selectedDate = nullz
                this.$emit('selected', null)
                this.$emit('input', '')
                this.$emit('cleared')
            },
            /**
             * @param {Object} day
             */
            selectDate (day) {
                let nowd = FORMATDAT(day.timestamp,'yyyy-MM-dd');
                if (day.isDisabled) {
                    this.$emit('selectedDisabled', day)
                    return false
                }
                this.setDate(day.timestamp)
                if (this.isInline) {
                    return this.showDayCalendar()
                }
//                this.$emit('get-date',{'day':FORMATDAT(day.timestamp,'yyyy-MM-dd')});
                this.close()
            },
            /**
             * @param {Object} month
             */
            selectMonth (month) {
                if (month.isDisabled) {
                    return false
                }
                const date = new Date(month.timestamp)
                this.setPageDate(date)
                this.showDayCalendar()
                this.$emit('changedMonth', month)
            },
            /**
             * @param {Object} year
             */
            selectYear (year) {
                if (year.isDisabled) {
                    return false
                }
                const date = new Date(year.timestamp)
                this.setPageDate(date)
                this.showMonthCalendar()
                this.$emit('changedYear', year)
            },
            /**
             * @return {Number}
             */
            getPageDate () {
                return this.pageDate.getDate()
            },
            /**
             * @return {Number}
             */
            getPageMonth () {
                return this.pageDate.getMonth()
            },
            /**
             * @return {Number}
             */
            getPageYear () {
                return this.pageDate.getFullYear()
            },
            /**
             * @return {String}
             */
            getPageDecade () {
                let sD = Math.floor(this.pageDate.getFullYear() / 10) * 10
                return sD + '\'s'
            },
            changeMonth (incrementBy) {
                let date = this.pageDate
                date.setMonth(date.getMonth() + incrementBy)
                this.setPageDate(date)
                this.$emit('changedMonth', date)
            },
            previousMonth () {
                if (!this.previousMonthDisabled()) {
                    this.changeMonth(-1)
                }
            },
            previousMonthDisabled () {
                if (!this.disabled || !this.disabled.to) {
                    return false
                }
                let d = this.pageDate
                return this.disabled.to.getMonth() >= d.getMonth() &&
                    this.disabled.to.getFullYear() >= d.getFullYear()
            },
            nextMonth () {
                if (!this.nextMonthDisabled()) {
                    this.changeMonth(+1)
                }
            },
            nextMonthDisabled () {
                if (!this.disabled || !this.disabled.from) {
                    return false
                }
                let d = this.pageDate
                return this.disabled.from.getMonth() <= d.getMonth() &&
                    this.disabled.from.getFullYear() <= d.getFullYear()
            },
            changeYear (incrementBy, emit = 'changedYear') {
                let date = this.pageDate
                date.setYear(date.getFullYear() + incrementBy)
                this.setPageDate(date)
                this.$emit(emit)
            },
            previousYear () {
                if (!this.previousYearDisabled()) {
                    this.changeYear(-1)
                }
            },
            previousYearDisabled () {
                if (!this.disabled || !this.disabled.to) {
                    return false
                }
                return this.disabled.to.getFullYear() >= this.pageDate.getFullYear()
            },
            nextYear () {
                if (!this.nextYearDisabled()) {
                    this.changeYear(1)
                }
            },
            nextYearDisabled () {
                if (!this.disabled || !this.disabled.from) {
                    return false
                }
                return this.disabled.from.getFullYear() <= this.pageDate.getFullYear()
            },
            previousDecade () {
                if (!this.previousDecadeDisabled()) {
                    this.changeYear(-10, 'changeDecade')
                }
            },
            previousDecadeDisabled () {
                if (!this.disabled || !this.disabled.to) {
                    return false
                }
                return Math.floor(this.disabled.to.getFullYear() / 10) * 10 >= Math.floor(this.pageDate.getFullYear() / 10) * 10
            },
            nextDecade () {
                if (!this.nextDecadeDisabled()) {
                    this.changeYear(10, 'changeDecade')
                }
            },
            nextDecadeDisabled () {
                if (!this.disabled || !this.disabled.from) {
                    return false
                }
                return Math.ceil(this.disabled.from.getFullYear() / 10) * 10 <= Math.ceil(this.pageDate.getFullYear() / 10) * 10
            },
            /**
             * Whether a day is selected
             * @param {Date}
             * @return {Boolean}
             */
            isSelectedDate (dObj) {
                return this.selectedDate && this.selectedDate.toDateString() === dObj.toDateString()
            },
            /**
             * Whether a day is disabled
             * @param {Date}
             * @return {Boolean}
             */
            isDisabledDate (date) {
                let disabled = false
                if (typeof this.disabled === 'undefined') {
                    return false
                }
                if (typeof this.disabled.dates !== 'undefined') {
                    this.disabled.dates.forEach((d) => {
                        if (date.toDateString() === d.toDateString()) {
                            disabled = true
                            return true
                        }
                    })
                }
                if (typeof this.disabled.to !== 'undefined' && this.disabled.to && date < this.disabled.to) {
                    disabled = true
                }
                if (typeof this.disabled.from !== 'undefined' && this.disabled.from && date > this.disabled.from) {
                    disabled = true
                }
                if (typeof this.disabled.ranges !== 'undefined') {
                    this.disabled.ranges.forEach((range) => {
                        if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
                            if (date < range.to && date > range.from) {
                                disabled = true
                                return true
                            }
                        }
                    })
                }
                if (typeof this.disabled.days !== 'undefined' && this.disabled.days.indexOf(date.getDay()) !== -1) {
                    disabled = true
                }
                if (typeof this.disabled.daysOfMonth !== 'undefined' && this.disabled.daysOfMonth.indexOf(date.getDate()) !== -1) {
                    disabled = true
                }
                return disabled
            },
            /**
             * Whether a day is highlighted (only if it is not disabled already)
             * @param {Date}
             * @return {Boolean}
             */
            isHighlightedDate (date) {
                if (this.isDisabledDate(date)) {
                    return false
                }
                let highlighted = false
                if (typeof this.highlighted === 'undefined') {
                    return false
                }
                if (typeof this.highlighted.dates !== 'undefined') {
                    this.highlighted.dates.forEach((d) => {
                        if (date.toDateString() === d.toDateString()) {
                            highlighted = true
                            return true
                        }
                    })
                }
                if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
                    highlighted = date >= this.highlighted.from && date <= this.highlighted.to
                }
                if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(date.getDay()) !== -1) {
                    highlighted = true
                }
                return highlighted
            },
            /**
             * Whether a day is highlighted and it is the first date
             * in the highlighted range of dates
             * @param {Date}
             * @return {Boolean}
             */
            isHighlightStart (date) {
                return this.isHighlightedDate(date) &&
                    (this.highlighted.from instanceof Date) &&
                    (this.highlighted.from.getFullYear() === date.getFullYear()) &&
                    (this.highlighted.from.getMonth() === date.getMonth()) &&
                    (this.highlighted.from.getDate() === date.getDate())
            },
            /**
             * Whether a day is highlighted and it is the first date
             * in the highlighted range of dates
             * @param {Date}
             * @return {Boolean}
             */
            isHighlightEnd (date) {
                return this.isHighlightedDate(date) &&
                    (this.highlighted.to instanceof Date) &&
                    (this.highlighted.to.getFullYear() === date.getFullYear()) &&
                    (this.highlighted.to.getMonth() === date.getMonth()) &&
                    (this.highlighted.to.getDate() === date.getDate())
            },
            /**
             * Helper
             * @param  {mixed}  prop
             * @return {Boolean}
             */
            isDefined (prop) {
                return typeof prop !== 'undefined' && prop
            },
            /**
             * Whether the selected date is in this month
             * @param {Date}
             * @return {Boolean}
             */
            isSelectedMonth (date) {
                return (this.selectedDate &&
                this.selectedDate.getFullYear() === date.getFullYear() &&
                this.selectedDate.getMonth() === date.getMonth())
            },
            /**
             * Whether a month is disabled
             * @param {Date}
             * @return {Boolean}
             */
            isDisabledMonth (date) {
                let disabled = false
                if (typeof this.disabled === 'undefined') {
                    return false
                }
                if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
                    if (
                        (date.getMonth() < this.disabled.to.getMonth() && date.getFullYear() <= this.disabled.to.getFullYear()) ||
                        date.getFullYear() < this.disabled.to.getFullYear()
                    ) {
                        disabled = true
                    }
                }
                if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
                    if (
                        this.disabled.from &&
                        (date.getMonth() > this.disabled.from.getMonth() && date.getFullYear() >= this.disabled.from.getFullYear()) ||
                        date.getFullYear() > this.disabled.from.getFullYear()
                    ) {
                        disabled = true
                    }
                }
                return disabled
            },
            /**
             * Whether the selected date is in this year
             * @param {Date}
             * @return {Boolean}
             */
            isSelectedYear (date) {
                return this.selectedDate && this.selectedDate.getFullYear() === date.getFullYear()
            },
            /**
             * Whether a year is disabled
             * @param {Date}
             * @return {Boolean}
             */
            isDisabledYear (date) {
                let disabled = false
                if (typeof this.disabled === 'undefined' || !this.disabled) {
                    return false
                }
                if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
                    if (date.getFullYear() < this.disabled.to.getFullYear()) {
                        disabled = true
                    }
                }
                if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
                    if (date.getFullYear() > this.disabled.from.getFullYear()) {
                        disabled = true
                    }
                }
                return disabled
            },
            /**
             * Set the datepicker value
             * @param {Date|String|null} date
             */
            setValue (date) {
                if (typeof date === 'string') {
                    let parsed = new Date(date)
                    date = isNaN(parsed.valueOf()) ? null : parsed
                }
                if (!date) {
                    this.setPageDate()
                    this.selectedDate = null
                    return
                }
                this.selectedDate = date
                this.setPageDate(date)
            },
            setPageDate (date) {
                if (!date) {
                    date = new Date(sessionStorage.sysTime)
                }
                this.pageTimestamp = (new Date(date)).setDate(1)
            },
            /**
             * Close the calendar if clicked outside the datepicker
             * @param  {Event} event
             */
            clickOutside (event) {
                if (this.$el && !this.$el.contains(event.target)) {

                    if (this.isInline) {
                        return this.showDayCalendar()
                    }
                    this.resetDefaultDate()
                    this.close()
                    document.removeEventListener('click', this.clickOutside, false)
                }
            },
            dayClasses (day) {
                return {
                    'selected': day.isSelected,
                    'disabled': day.isDisabled,
                    'highlighted': day.isHighlighted,
                    'today': day.isToday,
                    'weekend': day.isWeekend,
                    'sat': day.isSaturday,
                    'sun': day.isSunday,
                    'highlight-start': day.isHighlightStart,
                    'highlight-end': day.isHighlightEnd
                }
            },
            init () {
                if (this.value) {
                    this.setValue(this.value)
                }
                if (this.isInline) {
                    this.setInitialView()
                }
            }
        },
        mounted () {
            this.init();
            if(this.showview){
                this.showCalendar();
            }
        }
    }
</script>

<style lang="stylus" scoped>
    $width = 260px
    .rtl
        direction: rtl
    .dataView{padding:0 4px 2px 4px;}
    .vdp-datepicker
        position relative
        text-align left
        *
            box-sizing border-box
        .el-input__inner
            line-height 30px
            border none
    .vdp-datepicker__calendar
        position absolute
        z-index 799
        background white
        width $width
        border 1px solid #ccc
        header
            display block
            line-height 40px
            span
                display inline-block
                text-align center
                width (100 - (100 / 7) * 2) %
                float left
            .prev
            .next
                width (100 / 7) %
                float left
                text-indent -10000px
                position relative
                &:after
                    content ''
                    position absolute
                    left 50%
                    top 50%
                    transform translateX(-50%) translateY(-50%)
                    border 6px solid transparent
            .prev
                &:after
                    border-right 10px solid #475669
                    margin-left -5px
                &.disabled:after
                    border-right 10px solid #ddd
            .next
                &:after
                    border-left 10px solid #475669
                    margin-left 5px
                &.disabled:after
                    border-left 10px solid #ddd
            .prev:not(.disabled)
            .next:not(.disabled)
            .up:not(.disabled)
                cursor pointer
                &:hover
                    background #eee
        .disabled
            color #ddd
            cursor default
        .flex-rtl
            display flex
            width inherit
            flex-wrap wrap
        .cell
            display inline-block
            padding 0 5px
            width (100 / 7) %
            height 30px
            line-height 30px
            text-align center
            font-size 100%
            vertical-align middle
            &:not(.blank):not(.disabled).day
            &:not(.blank):not(.disabled).month
            &:not(.blank):not(.disabled).year
                cursor pointer
            &.selected
                /*&:hover*/
                /*background #8492A6*/
                /*font-size 40px*/
                -webkit-text-stroke 1px
                -webkit-text-fill-color transparent
                &.highlighted
                    background #4bd
            &.highlighted
                background #cae5ed
            &.grey
                color #888
                &:hover
                    background inherit
            &.day-header
                font-size 75%
                white-space no-wrap
                cursor inherit
                &:hover
                    background inherit
        .month,
        .year
            width 33.333%

    .vdp-datepicker__clear-button
    .vdp-datepicker__calendar-button
        cursor pointer
        font-style normal
        &.disabled
            color #999
            cursor default
</style>
