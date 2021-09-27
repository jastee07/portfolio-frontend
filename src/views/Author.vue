<template>
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
          <div @click="toggleTitle">
            <b-input v-model="selectedPost.title" ></b-input>
          </div>
            <tiptap :content="selectedPost.body" v-on:updateContent="updateContent"/>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Tiptap from '../components/Tiptap.vue'
export default {
  name:'Author',
  components:{
   Tiptap
  },
  data: () => {
    return {
      posts:[],
      selectedPost: {},
      editor: {},
      editTitle: false
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
    async updatePost(post){
      if(post.slug){
        axios.put(`/blog/posts/${post.slug}/`, post)
          .then(response => {
            this.selectedPost = response.data
          })
          .catch(error => console.log(error))
      }
      else{
        axios.post("/blog/posts/", post)
          .then(response => {
            this.selectedPost = response.data;
            this.posts.push(this.selectedPost)
          }).catch(error => console.log(error))
      }
      
    },
    toggleTitle(){
      this.editTitle = !this.editTitle
    }
  }
};
</script>

<style scoped>
.sidebar-container {
  float:left !important;
}
</style>