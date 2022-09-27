<template>
<div>
  <el-descriptions title="个人信息" direction="vertical" :column="4" border>
    <el-descriptions-item label="用户名">{{this.name}}</el-descriptions-item>
    <el-descriptions-item label="姓名">游**</el-descriptions-item>
    <el-descriptions-item label="年龄">21</el-descriptions-item>
    <el-descriptions-item label="手机号">178****9012</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="居住地" :span="2">南昌市</el-descriptions-item>
    <el-descriptions-item label="联系地址">江西省南昌市东湖区江西师范大学</el-descriptions-item>
    <el-descriptions-item label="年级">大三</el-descriptions-item>
  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "Introduce",
  data (){
    return{
      name:this.$route.query.id,
    }
  }
}
</script>

<style scoped>

</style>
