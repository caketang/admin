<template>
    <div id="confirm">
        <el-dialog :title="LANG['系统提示'] || '系统提示'" v-model="confirmConfig.state" size="tiny" @close="doCancel" v-if="confirmConfig.state" :before-close="doCancel">
            <p >
                <span>{{LANG[confirmConfig.msg] || confirmConfig.msg}}</span>
            </p>
            <span slot="footer" class="dialog-footer">
                <el-button class="formCancel" @click="doCancel">{{LANG['取 消'] || '取 消'}}</el-button>
                <el-button class="formSave" type="primary" @click="doConfirm" v-focus="autofocus">{{LANG['确 定'] || '确 定'}}</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                autofocus: false
            }
        },
        props:{
            confirmConfig:{
                type:Object,
                default:{
                    state:false,
                    msg:"",
                    fn:"",
                    obj:{}
                }
            }
        },
        watch: {
            'confirmConfig.state': function (newval) {
                if(newval){
                    this.autofocus = true;
                }
            }
        },
        components: {},
        methods: {
            //处理确定事件
            doConfirm(){
                this.$emit("do-confirm",{"fn":this.confirmConfig.fn,"obj":this.confirmConfig.obj,"flag":this.confirmConfig.flag});
                this.confirmConfig.state = false;
            },
            doCancel(){
                this.confirmConfig.state = false;
                this.$emit("do-cancel",{"fn":this.confirmConfig.fn,"obj":this.confirmConfig.obj,"flag":this.confirmConfig.flag});
            }
        },
        directives: {
            focus: {
                update: function (el, {value}) {
                    if (value) {
                        el.focus()
                    }
                }
            }
        },
        mounted(){
        },
        created(){
        }
    }
</script>
<style>
</style>