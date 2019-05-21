(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/oddsSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var oddsSet = ({
  data() {
    return {
      LANG,
      //表头玩法开启
      checksPlayOn: false,
      //表格数据
      dataModel: [],
      //加载状态
      loading: false,
      //总条数
      total: 0,
      //每次页条数
      pageSize: 50,
      //总页数
      pageCount: 0,
      //当前页
      currentPage: 0,
      all_min_odds: 0,
      old_odds: '',
      // 快调快捷INPUT值
      inputsix: '',
      inputfive: '',
      inputfour: '',
      inputthree: '',
      inputtwo: '',
      inputone: '',
      // 全选
      allChecked: false,
      currentCheck: [],
      baseUrl: ''
    };
  },

  props: {
    tableUrl: String,
    columnsUrl: String,
    updated: {
      type: Boolean,
      default: false
    },
    playTypeId: Number
  },
  watch: {
    //如果数据网址发生变化，就执行数据请求
    tableUrl: function (newQuestion) {
      if (newQuestion) {
        this.init();
      }
    },
    updated: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },
  methods: {
    //系统初始化
    init() {
      let _this = this; // 初始化快调值


      this.inputfive = '';
      this.inputfour = '';
      this.inputthree = '';
      this.inputtwo = '';
      this.inputone = ''; //总条数

      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount; //当前页

      let currentPage = this.currentPage;
      this.baseUrl = this.tableUrl;

      if (this.baseUrl) {
        this.loading = true;
        let index = this.baseUrl.indexOf('?');

        if (index === -1) {
          this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
        } else {
          let n = this.baseUrl.indexOf('page='); //                      currentPage = currentPage;

          if (n > 0) {
            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || false);
          } else {
            this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
          }

          let m = this.baseUrl.indexOf('page_size=');

          if (m > 0) {
            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 10 : pageSize));
          } else {
            this.baseUrl = this.baseUrl + "&page_size=10";
          }
        }

        this.dataModel = [];
        this.all_min_odds = 0;
        this.$.autoAjax('get', this.baseUrl, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              _this.total = res.attributes.total || 10;
              _this.pageSize = res.attributes.size || 50;
              _this.pageCount = Math.ceil(this.total / this.pageSize);
              _this.currentPage = res.attributes.number || 1;
              let data = res.data || res.data.list || [];
              let dataModel = _this.dataModel; //

              for (let n of data) {
                n.checked = false;
              }

              _this.all_min_odds = FORMATNUMBER(res.data[0].max_odds);

              for (let i in data) {
                let list = data[i];
                let obj = {};

                for (let k in list) {
                  if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
                    obj[k] = FORMATMONEY(list[k]);
                  } else {
                    if (k === 'max_odds' && FORMATNUMBER(_this.all_min_odds) > 0 && FORMATNUMBER(list[k]) < FORMATNUMBER(_this.all_min_odds)) {
                      _this.all_min_odds = FORMATNUMBER(list[k]);
                    }

                    obj[k] = list[k];
                  }
                }

                _this.$set(dataModel, i, obj);
              }

              let old_odds = dataModel;
              sessionStorage.setItem('old_odds', JSON.stringify(old_odds));
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }
    },

    //保存数据
    doSave() {
      let dataModel = this.dataModel;
      let old_dataModel = JSON.parse(sessionStorage.getItem('old_odds'));
      let obj = [];
      let item = [];

      for (let i in dataModel) {
        let list = dataModel[i];
        let temp = {};

        for (let k in list) {
          if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
            temp[k] = FORMATMultiplyMoney(list[k]);
          } else {
            temp[k] = list[k];
          }
        }

        obj.push(temp);
      }

      ; //更改前的赔率

      for (let i in old_dataModel) {
        let list = old_dataModel[i];
        let temp = {};

        for (let k in list) {
          if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
            temp[k] = FORMATMultiplyMoney(list[k]);
          } else {
            temp[k] = list[k];
          }
        }

        item.push(temp);
      }

      this.$emit('save-data', {
        "item": obj,
        "old_odds": item
      });
    },

    //切换页数
    doCurrentChange(v) {
      this.currentPage = v;
      this.init();
    },

    //切换每页条数
    doSizePage(v) {
      this.pageSize = v;
      this.init();
    },

    //显示编辑框
    changeInput(e, index, prop) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;
      event.target.style.display = "none";
      event.target.nextElementSibling.style.display = "block";
      event.target.focus();
    },

    //点击回车
    doEnter(index, prop, subkey) {
      let _this = this;

      if (prop === 'odds') {
        const h = this.$createElement;

        if (parseInt(subkey) >= 0) {//                        if (FORMATNUMBER(this.dataModel[index]['sub_odds'][subkey].odds) > FORMATNUMBER(this.dataModel[index].max_odds)) {
          //                            _this.$notify.error({
          //                                title: '标题名称',
          //                                message: h('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,已修改为最大值'] || '赠率值不可大于最高赔率,已修改为最大值') + this.dataModel[index].max_odds)
          //                            });
          //                            this.dataModel[index]['sub_odds'][subkey].odds = this.dataModel[index].max_odds;
          //                        }
        } else {//                        if (FORMATNUMBER(this.dataModel[index].odds) > FORMATNUMBER(this.dataModel[index].max_odds)) {
            //                            _this.$notify.error({
            //                                title: '标题名称',
            //                                message: h('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,已修改为最大值'] || '赠率值不可大于最高赔率,已修改为最大值') + this.dataModel[index].max_odds)
            //                            });
            //                            this.dataModel[index].odds = this.dataModel[index].max_odds;
            //                        }
          }
      }

      let e = window.event || event;
      let obj = e.srcElement ? e.srcElement : e.target;
      event.target.style.display = "none";
      event.target.previousElementSibling.style.display = "block";
    },

    //开启所有玩法
    checkAllChange(e, str) {
      let event = window.event || e;
      let dataModel = this.dataModel;
      let obj = event.srcElement ? event.srcElement : event.target;

      if (obj.checked) {
        for (let i in this.dataModel) {
          dataModel[i][str] = true;
        }
      } else {
        for (let i in this.dataModel) {
          dataModel[i][str] = false;
        }
      }
    },

    //修改快调
    changeCol(e, prop) {
      const hc = this.$createElement;

      let _this = this;

      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;

      if (prop === 'odds') {
        // 判断当前是否有选中目标比对选中的最高最低赔率，没选默认全选直接比对总赔率
        if (this.currentCheck.length > 0) {
          // 当前选中最大最小赔率     当前选中的item最大最小赔率集合
          let current_max_odds = 0;
          let current_min_odds = 0;
          let current_max_odds_arr = [];
          let current_min_odds_arr = []; // 将选中数组的最大最小赔率放进集合

          for (let i of this.currentCheck) {
            current_max_odds_arr.push(FORMATNUMBER(this.dataModel[i]['max_odds']));
            current_min_odds_arr.push(FORMATNUMBER(this.dataModel[i]['min_odds']));
          } // 最大赔率集合中取最小值


          current_max_odds = GETARRAYMIN(current_max_odds_arr); // 最小赔率集合中取最大值

          current_min_odds = GETARRAYMAX(current_min_odds_arr); // 对比赔率
          //                        if (FORMATNUMBER(obj.value) > FORMATNUMBER(current_max_odds)) {
          //                            this.$notify.error({
          //                                title: '标题名称',
          //                                message: hc('i', { style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,请修改后重试'] || '赠率值不可大于最高赔率,请修改后重试') + obj.value)
          //                            });
          //                            return;
          //                        }
          //                        if (FORMATNUMBER(obj.value) < FORMATNUMBER(current_min_odds)) {
          //                            this.$notify.error({
          //                                title: '标题名称',
          //                                message: hc('i', { style: 'color: teal'}, (LANG['赠率值不可大于最小赔率,请修改后重试'] || '赠率值不可小于最高赔率,请修改后重试') + obj.value)
          //                            });
          //                            return;
          //                        }
        } else {// 批量设置赔率，判断批量设置的赔率值是否都大于被设置的值的最高赔率
            //                        if (FORMATNUMBER(obj.value) > FORMATNUMBER(this.all_min_odds)) {
            //                            _this.$notify.error({
            //                                title: '标题名称',
            //                                message: hc('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,请修改后重试'] || '赠率值不可大于最高赔率,请修改后重试') + obj.value)
            //                            });
            //                            return;
            //                        }
          }
      }

      if (FORMATNUMBER(obj.value) < 0) {
        return this.$message.error(LANG['最小值为0'] || '最小值为0');
      }

      if (obj.value) {
        for (let i in this.dataModel) {
          if (this.dataModel[i].sub_odds && prop === 'odds') {
            if (this.currentCheck.length === 0) {
              let list = this.dataModel[i].sub_odds;

              for (let k = 0; k < list.length; k++) {
                list[k].odds = obj.value;
              }
            } else {
              for (let n of this.currentCheck) {
                if (n == i) {
                  let list = this.dataModel[i].sub_odds;

                  for (let k = 0; k < list.length; k++) {
                    list[k].odds = obj.value;
                  }
                }
              }
            }
          } else {
            if (this.currentCheck.length === 0) {
              this.dataModel[i][prop] = obj.value;
            } else {
              for (let n of this.currentCheck) {
                if (n == i) {
                  this.dataModel[i][prop] = obj.value;
                }
              }
            }
          }
        }

        obj.blur();
      }
    },

    // 全选
    allCheckedOdd() {
      let bool = this.allChecked;

      for (let i of this.dataModel) {
        i['checked'] = bool;
      }

      if (!this.allChecked) {
        this.currentCheck = [];
      } else {
        this.currentCheck = [];

        for (let i of this.dataModel.keys()) {
          this.currentCheck.push(i);
        }
      }
    },

    checkedOdd(index, value) {
      if (value) {
        this.currentCheck.push(index);
        new Set(this.currentCheck);
      } else {
        let i = this.currentCheck.indexOf(index);
        this.currentCheck.splice(i, 1);
      }
    } //玩法开启
    //            changeCheckbox(event,index,key1,key2){
    //                let e = window.event|| event;
    //                let obj = e.srcElement ? e.srcElement: e.target;
    //                let str = this.dataModel[index][key2] || "";
    //                let list = str.split(",");
    //                let val = this.dataModel[index][key1];
    //                for(let k in list){
    //                    if(list[k] == "enabled" && !val){
    //                        list[k] = "";
    //                    }
    //                    if(list[k] == "" && val){
    //                        list[k] = "enabled";
    //                    }
    //                }
    //                this.dataModel[index][key2] = list.toString();
    //            }


  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5892c86e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/oddsSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"modelSet"}},[_c('el-button',{staticStyle:{"position":"absolute","right":"10px","top":"-36px"},attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['保 存'] || '保 存')},on:{"click":_vm.doSave}}),_vm._v(" "),_c('table',{staticClass:"el-table el-table__header el-table--border",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell"},[_c('el-checkbox',{on:{"change":_vm.allCheckedOdd},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}})],1)]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['玩法名称'] || '玩法名称')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{"padding":"0 20px"},attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell",staticStyle:{"padding-top":"46px"},domProps:{"textContent":_vm._s(_vm.LANG['当前赔率'] || '当前赔率')}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputone),expression:"inputone"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","placeholder":"快调","min":"1"},domProps:{"value":(_vm.inputone)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'odds')},"blur":function($event){return _vm.changeCol($event,'odds')},"input":function($event){if($event.target.composing){ return; }_vm.inputone=$event.target.value}}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{"padding":"0 20px"},attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell",staticStyle:{"padding-top":"46px"},domProps:{"textContent":_vm._s(_vm.LANG['0.001返奖'] || '0.001返奖')}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputsix),expression:"inputsix"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","placeholder":"快调","min":"1"},domProps:{"value":(_vm.inputsix)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'per_odds')},"blur":function($event){return _vm.changeCol($event,'per_odds')},"input":function($event){if($event.target.composing){ return; }_vm.inputsix=$event.target.value}}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['最高赔率'] || '最高赔率')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['玩法开启'] || '玩法开启')}},[_c('br'),_vm._v(" "),_c('el-checkbox',{staticStyle:{"margin-top":"10px"},attrs:{"checked":_vm.checksPlayOn?true:false},on:{"change":function($event){return _vm.checkAllChange($event,'stateus')}},model:{value:(_vm.checksPlayOn),callback:function ($$v) {_vm.checksPlayOn=$$v},expression:"checksPlayOn"}})],1)]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['限额设置'] || '限额设置')}})])]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['单注最小'] || '单注最小')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['单注最大'] || '单注最大')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['单项最大'] || '单项最大')}},[_vm._v(_vm._s())])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['单注最高派奖'] || '单注最高派奖')}})])]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"el-table_1_column_37_column_39_column_40 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputtwo),expression:"inputtwo"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","min":"2","placeholder":"快调"},domProps:{"value":(_vm.inputtwo)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'min_bet')},"blur":function($event){return _vm.changeCol($event,'min_bet')},"input":function($event){if($event.target.composing){ return; }_vm.inputtwo=$event.target.value}}})])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_39_column_41 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputthree),expression:"inputthree"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","placeholder":"快调"},domProps:{"value":(_vm.inputthree)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'one_bet')},"blur":function($event){return _vm.changeCol($event,'one_bet')},"input":function($event){if($event.target.composing){ return; }_vm.inputthree=$event.target.value}}})])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_39_column_42 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputfour),expression:"inputfour"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","placeholder":"快调"},domProps:{"value":(_vm.inputfour)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'one_term')},"blur":function($event){return _vm.changeCol($event,'one_term')},"input":function($event){if($event.target.composing){ return; }_vm.inputfour=$event.target.value}}})])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_39_column_43 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.inputfive),expression:"inputfive"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px","display":"block"},attrs:{"type":"number","placeholder":"快调"},domProps:{"value":(_vm.inputfive)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.changeCol($event,'one_max_money')},"blur":function($event){return _vm.changeCol($event,'one_max_money')},"input":function($event){if($event.target.composing){ return; }_vm.inputfive=$event.target.value}}})])])])]),_vm._v(" "),_vm._l((_vm.dataModel),function(item,index){return (_vm.dataModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('el-checkbox',{on:{"change":function($event){return _vm.checkedOdd(index, item.checked)}},model:{value:(item.checked),callback:function ($$v) {_vm.$set(item, "checked", $$v)},expression:"item.checked"}})],1)]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[(_vm.playTypeId === 1)?_c('span',[_vm._v(_vm._s(item.odds_type)+" - "+_vm._s(item.result))]):_c('span',[_vm._v(_vm._s(item.result))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._l((item.sub_odds),function(sub,key){return _c('div',{staticStyle:{"clear":"both"}},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(sub?sub.name:''))]),_vm._v(" "),_c('span',{staticClass:"sub",on:{"click":function($event){return _vm.changeInput($event,index,'zdpl')}}},[_vm._v(_vm._s(sub?sub.odds:''))]),_vm._v(" "),(sub)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(sub.odds),expression:"sub.odds"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(sub.odds)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'odds',key)},"blur":function($event){return _vm.doEnter(index,'odds',key)},"input":function($event){if($event.target.composing){ return; }_vm.$set(sub, "odds", $event.target.value)}}}):_vm._e()])}),_vm._v(" "),(!item.sub_odds)?_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'zdpl')}}},[_vm._v(_vm._s(item.odds))]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.odds),expression:"item.odds"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.odds)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'odds')},"blur":function($event){return _vm.doEnter(index,'odds')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "odds", $event.target.value)}}})],2)]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._l((item.sub_odds),function(sub,key){return _c('div',{staticStyle:{"clear":"both"}},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(sub?sub.name:''))]),_vm._v(" "),_c('span',{staticClass:"sub",on:{"click":function($event){return _vm.changeInput($event,index,'fj')}}},[_vm._v(_vm._s(sub?sub.per_odds:''))]),_vm._v(" "),(sub)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(sub.per_odds),expression:"sub.per_odds"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(sub.per_odds)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'per_odds',key)},"blur":function($event){return _vm.doEnter(index,'per_odds',key)},"input":function($event){if($event.target.composing){ return; }_vm.$set(sub, "per_odds", $event.target.value)}}}):_vm._e()])}),_vm._v(" "),(!item.sub_odds)?_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'fj')}}},[_vm._v(_vm._s(item.per_odds))]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.per_odds),expression:"item.per_odds"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.per_odds)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'per_odds')},"blur":function($event){return _vm.doEnter(index,'per_odds')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "per_odds", $event.target.value)}}})],2)]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.max_odds))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('el-checkbox',{attrs:{"true-label":'enabled',"false-label":'disabled'},model:{value:(item.status),callback:function ($$v) {_vm.$set(item, "status", $$v)},expression:"item.status"}})],1)]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'dzzx')}}},[_vm._v(_vm._s(item.min_bet))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.min_bet),expression:"item.min_bet"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.min_bet)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'min_bet')},"blur":function($event){return _vm.doEnter(index,'min_bet')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "min_bet", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'dzzd')}}},[_vm._v(_vm._s(item.one_bet))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.one_bet),expression:"item.one_bet"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.one_bet)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'one_bet')},"blur":function($event){return _vm.doEnter(index,'one_bet')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "one_bet", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'dxzx')}}},[_vm._v(_vm._s(item.one_term))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.one_term),expression:"item.one_term"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.one_term)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'one_term')},"blur":function($event){return _vm.doEnter(index,'one_term')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "one_term", $event.target.value)}}})])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_c('span',{on:{"click":function($event){return _vm.changeInput($event,index,'dxzgpj')}}},[_vm._v(_vm._s(item.one_max_money))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(item.one_max_money),expression:"item.one_max_money"}],staticClass:"el-input__inner",attrs:{"type":"number"},domProps:{"value":(item.one_max_money)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&$event.keyCode!==13){ return null; }return _vm.doEnter(index,'one_max_money')},"blur":function($event){return _vm.doEnter(index,'one_max_money')},"input":function($event){if($event.target.composing){ return; }_vm.$set(item, "one_max_money", $event.target.value)}}})])])]):_vm._e()}),_vm._v(" "),(_vm.dataModel.length == 0)?_c('tr',{staticStyle:{"text-align":"center","height":"100px"}},[_c('td',{attrs:{"colspan":"8"}},[_vm._v("暂无数据")])]):_vm._e()],2),_vm._v(" "),(_vm.dataModel.length >0 )?_c('el-col',{staticClass:"toolbar mt20",staticStyle:{"position":"relative"},attrs:{"span":24}},[_c('el-pagination',{staticStyle:{"float":"right"},attrs:{"current-page":_vm.currentPage,"page-sizes":[10,50,100,200,500],"page-size":_vm.pageSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"current-change":_vm.doCurrentChange,"size-change":_vm.doSizePage}})],1):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/oddsSet.vue
function injectStyle (context) {
  __webpack_require__(459)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5892c86e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  oddsSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_oddsSet = (Component.exports);

// EXTERNAL MODULE: ./src/components/changePlay.vue + 2 modules
var changePlay = __webpack_require__(271);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryOdds.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lotteryOdds = ({
  data() {
    return {
      LANG,
      tableUrl: "",
      columnsUrl: "",
      //彩票模板
      lotteryTemplate: "",
      lotteryTemplateId: -1,
      //标准快速玩法
      lotteryTypeId: 0,
      lotteryTypeName: "标准玩法",
      //彩票ID
      lotteryList: [],
      nowLotteryId: -1,
      nowLotteryTemplate: '',
      nowLotteryPid: -1,
      nowPlayTypeId: -1,
      playTypeList: [],
      loading: false,
      updated: false
    };
  },

  components: {
    oddsSet: components_oddsSet,
    changeplay: changePlay["a" /* default */]
  },
  methods: {
    init() {
      this.lotteryTemplate = this.$route.query.name || "";
      this.lotteryTemplateId = this.$route.query.id || -1;
      this.baseUrl = "";
      this.baseUrl = URL.api + ROUTES.GET.lottery.rate + "?tid=" + this.lotteryTemplateId;
      this.getPlayType();
    },

    // 获取玩法类型
    getPlayType() {
      let _this = this;

      this.loading = true;
      let gameUrl = URL.api + ROUTES.GET.lottery.types.play + "?tid=" + this.lotteryTemplateId + "&lottery_type=" + this.lotteryTypeId;
      this.$.autoAjax('get', gameUrl, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            if (res.data && res.data[0] && res.data[0].sub && res.data[0].sub[0]) {
              _this.nowPlayTypeId = res.data[0].sub[0].play_type1 || -1;
              _this.nowLotteryId = res.data[0].lottery_id || -1;
              _this.nowLotteryTemplate = res.data[0].name || '';
            }

            _this.lotteryList = [];
            let model = res.data || [];

            for (let k in model) {
              _this.lotteryList.push({
                id: model[k].lottery_id,
                name: model[k].name,
                sub: model[k].sub
              });
            }

            _this.getPlayTypeList(0);

            _this.tableUrl = _this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');

          _this.loading = false;
        }
      });
    },

    // 写相关玩法
    getPlayTypeList(index) {
      this.playTypeList = [];
      this.nowPlayTypeId = this.lotteryList[index].sub[0].play_type1 || -1;
      let playTypeList = this.playTypeList;
      let model = this.lotteryList[index].sub || [];

      for (let k in model) {
        playTypeList.push({
          id: model[k].play_type1,
          name: model[k].play_type1_name
        });
      }
    },

    changeGame(obj, index) {
      this.nowLotteryId = parseInt(obj.id);
      this.getPlayTypeList(index);
      this.tableUrl = this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
    },

    //切换玩法分类
    changePlayType(item) {
      this.nowPlayTypeId = item.id || -1;
      this.tableUrl = this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
    },

    //切换玩法
    doChangePlay(obj) {
      if (obj.item == "fast" && this.lotteryTypeId === 0) {
        this.lotteryTypeId = 1;
        this.lotteryTypeName = "快捷玩法";
        this.init();
      }

      if (obj.item == "standard" && this.lotteryTypeId === 1) {
        this.lotteryTypeId = 0;
        this.lotteryTypeName = "标准玩法";
        this.init();
      }
    },

    //保存设置
    saveOdds(obj) {
      console.log(obj);

      let _this = this;

      this.updated = false;
      let oData = {};
      oData.tid = this.lotteryTemplateId;
      oData.tname = this.lotteryTemplate;
      oData.lid = this.nowLotteryId;
      oData.lottery_name = this.nowLotteryTemplate;
      oData.odds = obj.item;
      oData.old_odds = obj.old_odds;
      let url = "";
      url = URL.api + ROUTES.PUT.lottery.rate;
      this.$.autoAjax('put', url, oData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.updated = true;

            _this.$message.success(LANG["恭喜您，赔率设置成功！"] || "恭喜您，赔率设置成功！");
          } else if (res.msg) {
            _this.$message.error(res.msg);
          } else {
            _this.$message.error(LANG["赔率设置失败！"] || "赔率设置失败！");
          }
        },
        p: () => {},
        error: e => {
          _this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
        }
      });
    },

    goBlack() {
      window.history.go(-1);
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  watch: {
    $route: function (newval) {
      if (newval.query.name) {
        this.init();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d247bc12","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryOdds.vue
var lotteryOdds_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"lotteryOdds"}},[_c('el-row',{staticStyle:{"margin-bottom":"10px"}},[_c('el-col',{attrs:{"span":20}},[_c('changeplay',{on:{"do-change-play":_vm.doChangePlay}})],1),_vm._v(" "),_c('el-col',{staticClass:"tRight",attrs:{"span":4}},[_c('el-button',{attrs:{"type":"primary","size":"small","icon":"arrow-left"},on:{"click":_vm.goBlack}},[_vm._v("返 回")])],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"text-align":"left","margin-bottom":"10px"},attrs:{"span":24}},[_c('span',[_vm._v(_vm._s(_vm.LANG["当前模板"] || "当前模板")+" => "+_vm._s(_vm.lotteryTemplate))])]),_vm._v(" "),_c('el-col',{staticClass:"btngroup"},_vm._l((_vm.lotteryList),function(item,index){return _c('el-button',{key:index,staticClass:"formCancel",class:{'el-button--primary':parseInt(item.id) == parseInt(_vm.nowLotteryId)},staticStyle:{"margin-bottom":"10px"},attrs:{"size":"small"},on:{"click":function($event){return _vm.changeGame(item,index)}}},[_vm._v(_vm._s(item.name)+"\n        ")])}),1),_vm._v(" "),_c('el-col',_vm._l((_vm.playTypeList),function(item,index){return _c('el-button',{key:index,staticClass:"formCancel",class:{'el-button--primary':parseInt(item.id) == parseInt(_vm.nowPlayTypeId)},staticStyle:{"padding":"10px"},attrs:{"type":"text"},on:{"click":function($event){return _vm.changePlayType(item)}}},[_vm._v(_vm._s(item.name)+"\n        ")])}),1),_vm._v(" "),_c('el-col',[_c('oddsSet',{attrs:{"tableUrl":_vm.tableUrl,"columnsUrl":_vm.columnsUrl,"playTypeId":_vm.lotteryTypeId,"updated":_vm.updated},on:{"save-data":_vm.saveOdds}})],1)],1)}
var lotteryOdds_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/lottey/lotteryOdds.vue
function lotteryOdds_injectStyle (context) {
  __webpack_require__(458)
}
/* script */


/* template */

/* template functional */
var lotteryOdds_vue_template_functional_ = false
/* styles */
var lotteryOdds_vue_styles_ = lotteryOdds_injectStyle
/* scopeId */
var lotteryOdds_vue_scopeId_ = "data-v-d247bc12"
/* moduleIdentifier (server only) */
var lotteryOdds_vue_module_identifier_ = null

var lotteryOdds_Component = Object(component_normalizer["a" /* default */])(
  lotteryOdds,
  lotteryOdds_render,
  lotteryOdds_staticRenderFns,
  lotteryOdds_vue_template_functional_,
  lotteryOdds_vue_styles_,
  lotteryOdds_vue_scopeId_,
  lotteryOdds_vue_module_identifier_
)

/* harmony default export */ var lottey_lotteryOdds = __webpack_exports__["default"] = (lotteryOdds_Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/changePlay.vue
//
//
//
//
//
//
/* harmony default export */ var changePlay = ({
  data() {
    return {
      LANG,
      //标准玩法选中状态
      standardActive: "primary",
      //快捷玩法选中状态
      quickActive: ""
    };
  },

  props: {
    active: {
      type: String,
      default: "standard"
    }
  },
  methods: {
    //初始化
    init() {// if(this.active != "standard"){
      //     this.doChangePlay("fast")
      // }
    },

    //切换玩法
    doChangePlay(str) {
      if (str == 'standard') {
        this.standardActive = "primary";
        this.quickActive = "";
        this.$emit("do-change-play", {
          "item": "standard"
        });
      } else {
        this.standardActive = "";
        this.quickActive = "primary";
        this.$emit("do-change-play", {
          "item": "fast"
        });
      }
    }

  },
  watch: {
    active: function (newval) {
      if (newval) {
        this.doChangePlay(newval);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4923e83e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/changePlay.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typeBtn"},[_c('el-button',{attrs:{"type":_vm.standardActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['官方玩法'] || '官方玩法')},on:{"click":function($event){return _vm.doChangePlay('standard')}}}),_vm._v(" "),_c('el-button',{attrs:{"type":_vm.quickActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['信用玩法'] || '信用玩法')},on:{"click":function($event){return _vm.doChangePlay('fast')}}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/changePlay.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  changePlay,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_changePlay = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);