<template>
<!-- <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" style="max-width: 460px"
  ref="ruleFormRef">
  <el-form-item label="Name" prop="username">
    <el-input v-model="formLabelAlign.username" />
  </el-form-item>
  <el-form-item label="Activity zone" prop="password">
    <el-input v-model="formLabelAlign.password" />
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
  </el-form-item>
</el-form>
<el-button @click="handleToken">测试token</el-button> -->
<div class="login">
  <div class="bg-container">
    <div class="bg-container-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>
      <div class="item item-top"></div>
      <div class="item item-bottom"></div>
      <div class="item item-middle"></div>
    </div>
    <div class="bg-container-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>
      <div class="item item-top"></div>
      <div class="item item-bottom"></div>
      <div class="item item-middle"></div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login, login2, token } from '@/api/modules/user'
const labelPosition = ref('right');

const formLabelAlign = reactive({
  username: '',
  password: '',
});
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
    { min: 1, max: 12, message: 'Length should be 1 to 12', trigger: 'blur' },
  ]
});
const submitForm = async (formEl: FormInstance | undefined) =>
{
  if (!formEl) return;
  await formEl.validate(async (valid, fields) =>
  {

    const res = await login(formLabelAlign);
    if (res.success) {
      localStorage.setItem('user', res.data.token);
    }
  });

};
const resetForm = (formEl: FormInstance | undefined) =>
{
  if (!formEl) return;
  // formEl.resetFields();
  login2(formLabelAlign);
};

const handleToken = () =>
{
  token();
};
</script>

<!-- <style src="./bg.scss" /> -->

<style lang="scss">

</style>
