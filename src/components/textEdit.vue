<template>
    <div id="textEdit">
        <textarea id="meltdowntxt" class="meltdown" rows="7" cols="80">
        </textarea>
        <i class="fa fa-floppy-o savebtn" aria-hidden="true"></i>
        <div>
            <textEdit2></textEdit2>
        </div>
    </div>
</template>

<script>
import  '../assets/edit/rangyinputs-jquery.min'
import  '../assets/edit/element_resize_detection'
import  '../assets/edit/js-markdown-extra'
import  '../assets/edit/jquery.meltdown'
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
<style>
    @import "../assets/edit/meltdown.css";
    #textEdit{position: relative}
    .savebtn{position: absolute;top:10px;right:10px;}
</style>
