<template>
  <!--
<el-button @click="handleToken">测试token</el-button> -->
  <div class="login">
    <div class="container-box">
      <div class="pic"></div>
      <div class="content">
        <h1>Hey,hello</h1>
        <span>Enter the information you entered while registering</span>

        <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" ref="ruleFormRef"
          size="large" :rules="rules" hide-required-asterisk="true">
          <el-form-item label="username" prop="username">
            <el-input v-model="formLabelAlign.username" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="formLabelAlign.password" />
          </el-form-item>
          <el-form-item>
            <div class="form-text-button">
              <el-checkbox-group v-model="formLabelAlign.type">
                <el-checkbox label="Remember me" name="type" />
              </el-checkbox-group>
              <el-button type="text"><span class="forgot-password">Forgot password?</span></el-button>
            </div>
          </el-form-item>
          <el-form-item>
            <!-- <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button> -->
            <div class="login-button" @click="submitForm(ruleFormRef)">Login</div>
          </el-form-item>
          <el-form-item>
            <div class="line-box">
              <div class="line"></div>
              or
              <div class="line"></div>
            </div>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus';
import { reactive, ref } from 'vue';
import { login, login2, token } from '@/api/modules/user';
const labelPosition = ref('top');

const formLabelAlign = reactive({
  username: "",
  password: "",
  type: []
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
// 提交登录
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


const handleToken = () =>
{
  token();
};
</script>

<!-- <style src="./bg.scss" /> -->

<style lang="scss">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;

  .container-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 620px;
    // background: #bf3;
    display: flex;
    padding: 15px 0;

    .pic {
      width: 49%;
      height: 100%;
      background: url(@/assets/imgs/login-bg.jpg) no-repeat;
      background-size: contain;
    }

    .content {
      // background: gray;
      width: 52%;
      height: 100%;
      padding: 80px 70px 0 80px;

      :v-deep(el-form-item__content) {
        width: 100%;
      }
    }
  }
}

.el-form .form-text-button {
  width: 100%;
  display: flex;
    justify-content: space-between;
  }
  
  .el-form-item {
    margin-bottom: 12px;
  }
                                .forgot-password {
                                  color: transparent;
                                  font-weight: bold;
                                  background: linear-gradient(45deg, rgba(#5ea1fa, 1) 0%, rgba($nadeshiko-pink, 1) 100%);
                                  background-clip: text;
                                  -webkit-background-clip: text;
                                }
                
                                .login-button {
                                  cursor: pointer;
                                  background: $baby-blue-eyes;
                                  text-align: center;
                                  width: 100%;
                                  border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
                                  background: linear-gradient(45deg, rgba(#5ea1fa, 1) 0%, rgba($nadeshiko-pink, 1) 100%);
                                  font-weight: bold;
                                  color: white;
                                }
                
                                .line-box {
                                  width: 100%;
                                  height: 100%;
                                  display: flex;
                                  justify-content: space-between;
                                  color: $br-grey;
                
                                  .line {
                
                                    border-bottom: 1px solid $br-grey;
                                    height: 20px;
                                    width: 40%;
                                  }
}
</style>
