<template>
    <el-row id="dateTimePicker">
        <el-col :span="15" class="dateInput">
            <input autocomplete="off" size="small" type="text" class="el-input__inner" :value="nowval" @click="toggleDropdown" readonly>
            <i class="el-input__icon " :class="{'el-icon-circle-close closeIcon':nowval,'el-icon-date':!nowval,}" @click.stop="delVal"></i>
        </el-col>
        <el-col>
            <el-row v-if="showdrop" class="date_and_time">
                <!--<el-col class="date_container">-->
                    <el-col :span="13" class="date_select">
                        <mydatepicker class="date" v-model="myval" @get-date="getDateval" :datekey="datekey" :showview="showview"></mydatepicker>
                    </el-col>
                    <el-col :span="11" v-show="showTime">
                        <timepicker format="HH:mm:ss" :value="times" @change="changetimes"></timepicker>
                    </el-col>
                    <el-col v-if="showdrop" class="dateEnter">
                        <el-button @click.stop="toggleDropdown">{{LANG['确定'] || ''}}</el-button>
                    </el-col>
                <!--</el-col>-->
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
    import mydatepicker from './myDatePicker.vue'
    import timepicker from './timePicker.vue'
    export default {
        data() {
            return {
                LANG,
                myval: '',
                showdrop: false,
                times: {
                    HH: '00',
                    mm: '00',
                    ss: '00'
                },
                vueinit: false,
                datetimes: '',
                // 是否删除
                isDel: false
            }
        },
        props: {
            datekey: String,
            value: String,
            showview: {
                type: Boolean,
                default: true
            },
            isEnd: {
                type: Boolean,
                default: false
            },
            showTime: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            init() {
                this.myval = this.value;
                this.vueinit = true;
                if (this.myval) {
                    this.setVal();
                } else {
                    this.delVal();
                }
            },
            setVal() {
                this.myval = this.value || '';
                if (this.myval.length === 10) {
                    this.times.HH = '00';
                    this.times.mm = '00';
                    this.times.ss = '00';
                } else {
                    this.times.HH = this.getbasetimes(this.value, 'HH');
                    this.times.mm = this.getbasetimes(this.value, 'mm');
                    this.times.ss = this.getbasetimes(this.value, 'ss');
                }
                this.datetimes = this.mergeDateTime(this.myval);
            },
            getDateval(val) {
                this.datetimes = this.mergeDateTime(val.day);
                this.$emit('input', this.datetimes);
                this.$emit('get-val', {data: this.datetimes, daykey: this.datekey});
            },
            toggleDropdown(e) {
                this.$nextTick(()=>{
                    if(this.showdrop){
                        e.stopPropagation();
                    }
                    this.showdrop = !this.showdrop;
                })
            },
            // 拼接时分秒
            mergeDateTime(day, times) {
                this.isDel = false;
                if (!day) {
                    return sessionStorage.sysTime;
                }
                if (times) {
                    return FORMATDATEPICKER(day) + ' ' + times.HH + ':' + times.mm + ':' + times.ss;
                } else {
                    return FORMATDATEPICKER(day) + ' ' + this.times.HH + ':' + this.times.mm + ':' + this.times.ss;
                }
            },
            // 初始化时分秒
            getbasetimes(val, str) {
                if (!val) {
                    return '00';
                }
                let t = new Date(val);
                switch (str) {
                    case 'HH':
                        return t.getHours().toString().length > 1 ? t.getHours().toString() : '0' + t.getHours().toString();
                    case 'mm':
                        return t.getMinutes().toString().length > 1 ? t.getMinutes().toString() : '0' + t.getMinutes().toString();
                    case 'ss':
                        return t.getSeconds().toString().length > 1 ? t.getSeconds().toString() : '0' + t.getSeconds().toString();
                }
            },
            // 切换时分秒
            changetimes(val) {
                this.isDel = false;
                this.datetimes = this.mergeDateTime(this.datetimes, val.data);
            },
            // 删除值
            delVal(){
                this.isDel = true;
                this.myval = '';
                this.times.HH = '00';
                this.times.mm = '00';
                this.times.ss = '00';
                this.$emit('input', '');
                this.$emit('get-val', {data: '', daykey: this.datekey});
            }
        },
        components: {
            mydatepicker: mydatepicker,
            timepicker: timepicker
        },
        computed: {
            nowval() {
                if(this.isDel){
                    this.$emit('input', '');
                    this.$emit('get-val', {data: '', daykey: this.datekey});
                    return '';
                }else{
                    this.$emit('input', this.datetimes);
                    this.$emit('get-val', {data: this.datetimes, daykey: this.datekey});
                    return this.datetimes;
                }
            }
        },
        watch: {
            value: function (newval) {
                this.init();
            }
        },
        mounted() {
            if(this.vueinit){
                $('body').on('click', () => {
                    this.showdrop = false;
                });
            }
        },
        created() {
            this.init();
            if (this.isEnd) {
                this.times.HH = '23',
                this.times.mm = '59',
                this.times.ss = '59'
            }
        }
    }
</script>
<style lang="less">
    #dateTimePicker{
        position:relative;
        .dateInput{position:relative;min-width:180px;}
        .date_and_time{
            position: absolute;top:36px;border:1px solid #cccccc; width:260px;z-index:888;background-color:#fff;
            .date_select{
                border-right:1px solid #DCDFE6;
                height: 36px;
                .vdp-datepicker__calendar{margin-left: -1px;}
                .el-icon-circle-close{top:3px;}
                /*.el-input__inner{margin-left: 4px;}*/
            }
        }
        .date_container {position: relative;}
        .dateEnter{position: absolute;right:-101%;z-index:9}
    }
</style>
