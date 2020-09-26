<template>
  <div>
    <header-top class="header-top"></header-top>

    <div class="signup">
      <h1>Signup</h1>
      <ValidationObserver v-slot="{ invalid }" ref="form">
        <el-form>
          <el-row class="sign-up-row">
            <el-col :span="6">
              <validation-provider
                rules="required"
                name="name"
                v-slot="{ errors }"
              >
                <label>Name*:</label>
                <el-input v-model="form.name"></el-input>
                <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
          </el-row>
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
              <validation-provider name="dob">
                <label>DOB:</label>
                <el-date-picker
                  v-model="form.dob"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </validation-provider>
            </el-col>
          </el-row>
          <el-row class="sign-up-row">
            <el-col>
              <label>Gender</label>
              <el-radio-group class="mar-left-20" v-model="form.gender">
                <el-radio label="male" value="male">Male</el-radio>
                <el-radio label="female" value="female">Female</el-radio>
              </el-radio-group>
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
                @click="submit()"
                >Submit</el-button
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
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    HeaderTop,
  },
  mounted() {
    if (this.usersStore) {
      this.user = this.usersStore;
    }
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
      user: [],
    };
  },
  methods: {
    submit() {
      var app = this;
      app.form.created = new Date();
      var obj = Object.assign({}, app.form);
      app.user.push(obj);
      app.usersUpdate(app.user);
      this.form.name = "";
      this.form.email = "";
      this.form.dob = "";
      this.form.gender = "male";
      this.form.created = "";
      this.form.password = "";
      this.$refs.form.reset();
      app.$message({
        message: "Account Created",
        type: "success",
      });
    },
    ...mapMutations(["usersUpdate"]),
  },
  computed: {
    ...mapGetters(["usersStore"]),
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
.error {
  color: red;
}
</style>
