<template>
  <div>
    <p class="discover-list-navbar">
      <!-- TODO -->
      <b-navbar>
        <b-nav-item-dropdown right>
          <b-dropdown-item v-on:click="onEdit($event, item)">Edit</b-dropdown-item>
          <b-dropdown-item v-on:click="onDelete($event, item)">Delete</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar>
    </p>
    <p class="discover-detail">{{post.title}}</p>
    <p class="discover-detail">{{post.detail}}</p>
    <!-- <p class="discover-detail">{{post.image}}</p> -->
    <img v-bind:src="urlImg + post.image" alt="">
  </div>
</template>
<style scoped>
/* TODO */
.dropdown {
  list-style: none;
}
.discover-list-navbar {
  width: 100%;
  text-align: right;
}
.navbar {
  display: block !important;
}
</style>

<script>
import axios from "axios";
export default { 
  name: "Detail",

  data() {
    return {
      post: {
        id: 0,
        title: "",
        detail: "",
        image: ""
      },

      urlImg: "../img/",
    };
  },

  methods: {
    getDetails(params) {
      console.log(params);
    }
  },

  created() {
    this.post = this.$route.params;
    this.getDetails(this.post);
  }
};
</script>

<style>
</style>