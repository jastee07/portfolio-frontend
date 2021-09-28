<template v-on:createPost>
  <div>
    <div class="sidebar-container">
    <b-sidebar id="sidebar" 
        aria-labelledby="sidebar-title" 
        visible no-header shadow no-close-on-esc no-header-close
        class="sticky-top">
      <template>
        <div class="p-3">
          <h4 id="sidebar-title">Posts</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item v-for="(post, index) in posts" 
              :key="post.slug" active @click="selectPost(index)">{{post.title}}</b-nav-item>
            </b-nav>
          </nav>
        </div>
      </template>
    </b-sidebar>
    </div>
    <div class="b-container"> 
      <b-row>
        <b-col cols="4"/>
        <b-col cols="7">
          <post-manager :post="selectedPost"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4"/>
        <b-col cols="7">
            <tiptap :content="selectedPost.body" v-on:updateContent="updateContent"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Tiptap from '../components/Tiptap.vue'
import PostManager from '../components/PostManager.vue'
export default {
  name:'Author',
  components:{
   Tiptap,
   PostManager
  },
  data: () => {
    return {
      posts:[],
      selectedPost: {},
      editor: {}
    };
  },
  async mounted(){
    this.posts = await axios.get("/blog/posts/").then(response => response.data)
  },
  methods: {
    selectPost(index){
      this.selectedPost = this.posts[index];
    },
    updateContent(data){
      this.selectedPost.body = data;
      this.updatePost(this.selectedPost)
    },
    savePost(data){
      this.selectedPost = data;
    },
    createPost(){
      var post = {
        title: 'A new post!',
        body: '<p>What do you want to write</p>'
      }
      this.selectedPost = post;
      this.posts.push(post)
      this.editor.commands.updateContent(post.body)
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  float:left !important;
}
</style>