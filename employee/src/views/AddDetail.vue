<template>
  <div class="discover-add-update-detail">
    <b-form @submit="onSubmit">
      <p>
        <span v-if="!isEdit">Add Post</span>
        <span v-else>Update Post</span>
      </p>
      <span>Image</span>
      <b-input type="text" v-model="post.image" class="form-control" />
      <br />
      <span>Title</span>
      <b-input type="text" v-model="post.title" class="form-control" />
      <br />
      <span>Nội dung</span>
      <textarea v-model="post.detail" class="form-control"></textarea>
      <br />
      <b-button type="submit" variant="primary">
        <span v-if="!isEdit">Add</span>
        <span v-else>Update</span>
      </b-button>
    </b-form>
  </div>
</template>
<style scoped>
.discover-add-update-detail {
  width: 50%;
  margin: 0 auto;
}
</style>
<script>
import axios from "axios";

export default {
  name: "Adddetail",
  data() {
    return {
      post: {
        id: 0,
        image: "",
        title: "",
        detail: ""
      },
      isEdit: false
    };
  },

  created() {
    this.isEdit = this.$route.params.isEdit;
    if (this.isEdit) {
      this.post = this.$route.params;
    }
  },

  methods: {
    onSubmit() {
      if (this.isEdit) {
        // TODO Call api Update
      } else {
        // TODO Call api add
      }
      this.post.isDetail = true;
      this.$router.push({
        path: "/list",
        name: "List",
        params: this.post
      });
    }
  }
};
</script>

<style>
</style>