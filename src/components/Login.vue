<template>
  <div>
    <header-top class="header-top"></header-top>

    <div class="signup">
      <h1>Login</h1>
      <ValidationObserver v-slot="{ invalid }" ref="form">
        <el-form>
          <el-row class="sign-up-row">
            <el-col :span="6">
              <validation-provider
                rules="required|email"
                name="email"
                v-slot="{ errors }"
              >
                <label>Email*:</label>
                <el-input v-model="form.email"></el-input>
                <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
          </el-row>

          <el-row class="sign-up-row">
            <el-col :span="6">
              <validation-provider
                rules="required|min:8|alpha_num"
                name="password"
                v-slot="{ errors }"
              >
                <label>Password*:</label>
                <el-input v-model="form.password" show-password></el-input>
                <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
          </el-row>
          <el-row class="sign-up-row">
            <el-col :span="6">
              <el-button
                class="flt-right"
                type="primary"
                :disabled="invalid"
                @click="login()"
                >Login</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import HeaderTop from "./Header";

export default {
  components: {
    HeaderTop,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        dob: "",
        gender: "male",
        password: "",
      },
    };
  },
  methods: {
    login() {
      var response = "Success";
      if (response == "Success") {
        this.$message({
          message: "Login Success",
          type: "success",
        });
        this.$router.push("dashboard");
      } else {
        this.$message({
          message: "Sorry invalid credentials",
          type: "error",
        });
      }
    },
  },
};
</script>

<style  scoped>
.flt-right {
  float: right;
}
.sign-up-row {
  margin-bottom: 20px;
}
.signup {
  margin-top: 50px;
  /* margin-left: 30%; */
}
.mar-left-20 {
  margin-left: 20px;
}
</style>

<style >
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 340px;
}
</style>
