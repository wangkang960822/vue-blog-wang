<template>
  <div v-theme:colum="'wide'" id="list-blogs">
    <h1>测试Mixin混入</h1>
    <!-- srarch -->
    <input type="text" v-model="search" placeholder="search something..." />
    <div v-for="(blog,index) in filterdBlogs" :key="index" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixins";
export default {
  name: "ListBlogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },

  created() {
    this.$axios.get("http://jsonplaceholder.typicode.com/posts").then(res => {
      console.log(res.data);
      this.blogs = res.data.slice(0, 10);
    });
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding == "wide") {
          el.style.maxWidth = "1260px";
        } else if (binding == "narrow") {
          el.style.maxWidth = "560px";
        }
        if (binding.arg == "column") {
          el.style.background = "#ddd";
          el.style.padding = "20px";
        }
      }
    }
  },
  filters: {
    // "to-uppercase": function(value) {
    //   return value.toUpperCase();
    // },
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin]
  // snippet: function(value) {
  //   return value.slice(0, 100) + "...";
  // }
  // }
};
</script>


<style scoped>
#list-blog {
  max-width: 800px;
  margin: 0 auto;
}
#single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
