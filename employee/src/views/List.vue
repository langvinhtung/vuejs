<template>
  <div class="Post">
    <div class="discover">
      <div class="discover-search">
        <h1>Discover</h1>
        <p>All the latest</p>
        <b-input
          type="text"
          v-on:keyup.enter="onSearch"
          v-model="postSearch"
          placeholder="Search"
          class="form-control"
        />
      </div>
      <div class="discover-create">
        <button v-on:click="onAdd">Create a Post</button>
      </div>
      <div class="discover-list">
        <table>
          <tbody>
            <tr v-for="item in displayed" :key="item.id">
              <td>
                <img v-bind:src="urlImg + item.image" alt class="discover-list-img" />
              </td>
              <td>
                <p class="discover-list-navbar">
                  <!-- TODO -->
                  <b-navbar>
                    <b-nav-item-dropdown right>
                      <b-dropdown-item v-on:click="onEdit($event, item)">Edit</b-dropdown-item>
                      <b-dropdown-item v-on:click="onDelete($event, item)">Delete</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar>
                </p>
                <a class="discover-list-title" v-on:click="onDetail($event, item)">{{item.title}}</a>
                <p class="discover-list-detail">{{item.detail}}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example" style="text-align: center">
          <ul class="pagination">
            <li class="page-item">
              <button
                type="button"
                class="page-link btn btn-default"
                v-if="page != 1"
                @click="page--"
              >&lt;</button>
            </li>
            <li class="page-item" id="number-page" v-for="pageNumber in pages" :key="pageNumber">
              <button
                type="button"
                class="page-link btn btn-default"
                v-bind:class="pageNumber"
                @click="page = pageNumber"
              >{{pageNumber}}</button>
            </li>
            <li class="page-item">
              <button
                type="button"
                class="page-link btn btn-default"
                v-if="page < pages.length"
                @click="page++"
              >&gt;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.discover {
  margin: 0 auto;
  width: 50%;
}
.discover-list-img {
  width: 100px;
}

.discover-list-title {
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
}
.discover-list-detail,
.discover-list-title {
  text-align: left;
  padding-left: 30px;
}
.discover-create {
  text-align: left;
  margin: 10px 0;
}
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
  name: "List",
  components: {},
  data() {
    return {
      postSearch: "",
      message: "Trang Abount",
      post: [
        {
          id: 0,
          image: "logo.82b9c7a5.png",
          title: "title detail 0",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus."
        },
        {
          id: 1,
          image: "logo.82b9c7a5.png",
          title: "title detail 1",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus."
        },
        {
          id: 2,
          image: "logo.82b9c7a5.png",
          title: "title detail 2",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus."
        },
        {
          id: 3,
          image: "logo.82b9c7a5.png",
          title: "title detail 3",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus."
        },
        {
          id: 4,
          image: "logo.82b9c7a5.png",
          title: "title detail 4",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus."
        }
      ],
      urlImg: "../img/",
      page: 1,
      perPage: 2,
      pages: [],
      isEdit: false,

      postData: {},

      isDetail: false
    };
  },
  created() {
    this.onSearch();
    this.setPages();
  },
  methods: {
    onSearch() {
      axios
        .get("https://localhost:54633/api/values")
        .then(resp => { console.log(resp.data); });
      this.setPages();
    },

    onAdd() {
      this.postData.isEdit = false;
      this.$router.push({
        path: "/Add-Detail",
        name: "Adddetail",
        params: this.postData
      });
    },

    onEdit(e, object) {
      this.postData = object;
      this.postData.isEdit = true;
      this.$router.push({
        path: "/Update-Detail/:id" + this.postData.id,
        name: "Updatedetail",
        params: this.postData
      });
    },

    onDelete(e, object) {
      let index = this.post.indexOf(object);
      this.post.splice(index, 1);
      this.setPages();
    },

    onDetail(e, object) {
      this.postData = object;
      this.$router.push({
        path: "/detail/:id" + this.postData.id,
        name: "Detail",
        params: this.postData
      });
    },

    setPages() {
      this.pages = [];
      let numberOfPages = Math.ceil(this.post.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },

    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    }
  },

  computed: {
    displayed() {
      return this.paginate(this.post);
    }
  }
};
</script>