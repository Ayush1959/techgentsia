<template>
  <div class="nav">
    <ul class="horizontal">
      <li class="pointer">
        <a @click="goHome">Home</a>
      </li>
      <li class="pointer">
        <a @click="goSignUp">SignUp</a>
      </li>
      <li class="pointer">
        <a @click="goLogin">Login</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goSignUp() {
      this.$router.push("/sign-up");
    },
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.logo-nav {
  object-fit: fill;
  height: 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  width: 13%;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>