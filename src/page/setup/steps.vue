<template>
  <div id="">
    <el-steps :space="100" :active="active" finish-status="success">
    <el-step title="货币"></el-step>
    <el-step title="邮件服务器"></el-step>
    <el-step title="后台站点"></el-step>
    <el-step title="前台站点"></el-step>
    <el-step title="推广链接"></el-step>
    <el-step title="配置成功"></el-step>
  </el-steps>
</div>
</template>
<script>
  export default{
      data() {
      return {
       
      };
    },
    props:{
      active: {
        type: Number,
        default: 0,
      }
    }
    
  }
    
</script>
<style scoped>
</style>