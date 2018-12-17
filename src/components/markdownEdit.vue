<template>
	<div id="markdownEdit">
		<mavon-editor
			class="mavonEditorContainer"
			:toolbars="toolbarConfig"
			:value='defaultValue'
			:toolbarsFlag="true"
      :default_open="'edit'"
      :subfield="false"
			@change="valueChange"
			@imgAdd="imgAdd"
			ref="mavonEditor"
			>
		</mavon-editor>
	</div>
</template>
<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
let toolbarsObj = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: false, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: false, // code
  table: true, // 表格
  subfield: true, // 是否需要分栏
  fullscreen: false, // 全屏编辑
  readmodel: false, // 沉浸式阅读
  htmlcode: false, // 展示html源码
  help: true, // 帮助
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: false, // 保存（触发events中的save事件）
  navigation: false, // 导航目录
  alignleft: false, // 左对齐
  aligncenter: false, // 居中
  alignright: false // 右对齐
}
export default {
  data() {
    return {
      defaultValue: "",
      imgUploadBaseUrl: URL.rpi,
      imgBaseUrl: URL.img
    };
  },
  props: {
    content: String,
    keys: {
      type: String,
      default: ""
    },
    updated: {
      type: Boolean,
      default: false
    },
    toolbarConfig: {
      type: Object,
      default: function() {
        return toolbarsObj
      }
    }
  },
  mounted() {
    Object.assign(toolbarsObj, this.toolbarConfig)
    this.defaultValue = this.content;
  },
  beforeDestroy() {
    this.defaultValue = "";
  },
  methods: {
    // 编辑区的值发生变化的回调，参数value：原始markdowm字符串，reder：解析后的结果
    valueChange: function(value, reder) {
      // 向父组件派发事件并传值
      this.$emit("change_text", { val: value, keys: this.keys });
    },
		// 图片文件添加回调事件, 参数filename: 写在md中的文件名, File: File Object)
    imgAdd: function(filename, File) {
      this.formatDetection(filename, File);
    },
    // 检测选择的图片是否符合上传要求
		formatDetection: function(filename, file) {
			const fileFormat = ['jpg','jpeg','png'];
			if(file.size/1024 < 10*1024){
				// 判断文件格式是否符合
				let lowerCase = file.type.split('/')[1];
				let capital = lowerCase.toUpperCase();
				let isLowerCase = fileFormat.indexOf(lowerCase);
				let isCapital = fileFormat.indexOf(capital);

				if(isLowerCase != -1 || isCapital != -1){
					if( !this.isMatch(file.name.split('.')[0]) ){
						this.$message(`${file.name}文件名格式不符合！只能是英文数字下划线`);
            // 不符合的就del掉
            this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
            setTimeout(() => {
              document.querySelector('.fa-mavon-undo').click();
            },500);
					}else{
						// 符合的就submit
            this.imgSubmit(filename, file);
					}
				}else{
					this.$message(`${file.name}文件格式不符合！`);
          this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
          setTimeout(() => {
            document.querySelector('.fa-mavon-undo').click();
          },500);
				}
			}else{
				this.$message(`${file.name}文件大小超过限制！`);
				this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
        setTimeout(() => {
          document.querySelector('.fa-mavon-undo').click();
        },500);
			}
		},
		isMatch: function(str) {
			// 匹配字母数字下划线开头或结尾的任意字符
			let reg = /^[a-zA-Z\d_]*$/;
			return reg.test(str)
    },
    imgSubmit(name, img) {
      let formData = new FormData();
      formData.append('post_type', 'upfile');
      formData.append('upfile[]', img, img.name);
      let vm = this;

        this.$.autoAjax('post',this.imgUploadBaseUrl, formData,'', {
            ok: (res) => {
                if (res.state  && res.state == 0) {
                    let url = '';
                    url = this.imgBaseUrl + res.data.file[0].url;
                    vm.$refs.mavonEditor.$img2Url(name, url);
                    this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
                } else {
                    this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
                    this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
                    setTimeout(() => {
                        document.querySelector('.fa-mavon-undo').click();
                    }, 500);
                }
            },
            p: () => {
            },
            error: e => {
                console.log(e)
            }
        })
      // this.$http.post(this.imgUploadBaseUrl, formData, URLCONFIG).then((res)=>{
      //   if (res.data.state  && res.data.state == 0) {
      //     let url = '';
      //     url = this.imgBaseUrl + res.data.data.file[0].url;
      //     vm.$refs.mavonEditor.$img2Url(name, url);
      //     this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
      //   } else {
      //     this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
      //     this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
      //     setTimeout(() => {
      //       document.querySelector('.fa-mavon-undo').click();
      //     }, 500);
      //   }
      // })
      .catch((err)=>{
        this.$message.error(LANG['服务器错误请稍后重试！'] || '服务器错误请稍后重试！');
        this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
        setTimeout(() => {
          document.querySelector('.fa-mavon-undo').click();
        }, 500);
      })
    }
  },
  watch: {
    content: function(newval, oldval) {
      this.$nextTick(() => {
        this.defaultValue = newval;
      })
    }
  },
  components: {
    mavonEditor
  }
};
</script>
<style>
#markdownEdit .editor-toolbar {
  padding: 0 0 !important;
}
#markdownEdit .mavonEditorContainer {
  max-height: 400px;
  overflow: auto;
  border: 1px solid #bfcbd9;
}
#markdownEdit .v-note-wrapper {
  position: static;
  display: block;
}
#markdownEdit .v-note-wrapper .v-note-panel {
  box-shadow: none;
}
#markdownEdit .popup-dropdown {
  z-index: 10;
}
.v-note-wrapper.fullscreen {
  position: fixed;
  top: 44px;
}
#markdownEdit .add-image-link-wrapper .add-image-link {
  width: 80% !important;
  left: 10% !important;
  top: 40% !important;
}
@media screen and (max-width: 1500px) {
  #markdownEdit .add-image-link-wrapper .add-image-link {
    width: 80% !important;
    left: 10% !important;
    top: 40% !important;
  }
}
</style>
