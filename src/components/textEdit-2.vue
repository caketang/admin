<template>
    <div id="textEdit">
        <textarea id="meltdowntxt" class="meltdown" rows="7" cols="80">* 111
        </textarea>
        <i class="fa fa-floppy-o savebtn" aria-hidden="true"></i>
    </div>
</template>

<script>
    window.rangyinputs = require('../assets/edit-2/rangyinputs-jquery.min.js');
    window.jsMeltdown = require('../assets/edit-2/jquery.meltdown.js');
    window.rangyinputs($);
    window.jsMeltdown($, window, document);
    export default{
        name:'textEdit',
        data(){
            return{
                val:""
            }
        },
        props:{
            textValue:{
                type:String,
                default:""
            }
        },
        mounted(){
            $('#meltdowntxt').meltdown({
                openPreview: true,
                previewHeight: "auto"
            })
        }
    }
</script>
<style scoped>
    /*@import "../assets/edit/meltdown.css";*/
    #meltdowntxt h1{color:#f00}
    #textEdit{position: relative}
    .savebtn{position: absolute;top:10px;right:10px;}
</style>
