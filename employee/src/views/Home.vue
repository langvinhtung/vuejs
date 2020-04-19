<template>
  <div class="home">
    <b-form @submit.prevent.stop="onSubmit" action>
      <label for="text-password">User Name</label>
      <b-input
        v-model="user.userName"
        type="text"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-input>
      <label for="text-password">Password</label>
      <b-input
        v-model="user.password"
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-input>
      <br>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  data() {
    return {
      user: {
        userName: "",
        password: ""
      },
      userLogin: {
        userName: "lvtung1",
        password: "12345678a@"
      }
    };
  },
  methods: {
    onSubmit(evt) {
      if (
        this.user.userName == this.userLogin.userName &&
        this.user.password == this.userLogin.password
      ) {
        this.$router.push({
          path: "/about",
          name: "About"
        });
      } else {
        alert("Loi")
      }
    }
  }
};
</script>
