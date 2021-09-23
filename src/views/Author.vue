<template>
  <div>
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" visible no-header shadow no-close-on-esc no-header-close>
      <template>
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Posts</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item v-for="(post, index) in posts" 
              :key="post.slug" active @click="selectPost(index)">{{post.title}}</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
    <div>
      <h1>{{selectedPost.title}}</h1>
  
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: () => {
    return {
      posts:[],
      selectedPost: {}
    };
  },
  async mounted(){
    this.posts = await axios.get("/blog/posts/").then(response => response.data)
  },
  methods: {
    selectPost(index){
      this.selectedPost = this.posts[index];
    }
  }
};
</script>