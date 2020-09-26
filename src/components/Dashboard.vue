<template>
  <div>
    <h1>Hai Welcome User</h1>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  mounted() {
    if (this.welcomeUser) {
      this.user = this.welcomeUser;
    }
  },
  computed: {
    ...mapGetters(["welcomeUser"]),
  },
  data() {
    return {
      user: [],
    };
  },
};
</script>