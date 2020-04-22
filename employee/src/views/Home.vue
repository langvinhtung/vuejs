<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
import axios from "axios";

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
      userLogin: {
        userName: '1',
        password: '1',
      },
    };
  },
  methods: {
    onSubmit(evt) {
      if ( 
        this.user.userName === this.userLogin.userName &&
        this.user.password === this.userLogin.password
      ) {
        this.$router.push({
          path: '/list',
          name: 'List',
        });
      } else {
        alert('Loi');
      }
    },
  },
};
</script>
