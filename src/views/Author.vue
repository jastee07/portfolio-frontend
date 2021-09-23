<template>
<div id="author-panel">
  <input v-model="email"/>
  <ul>
    <li v-for="post in posts" :key="post.slug">
      {{post.title}}
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Author',
  data() {
    return {
      posts: []
    }
},
  mounted(){
   axios.get("/blog/posts/").then(response => response.json()).then(data => this.posts = data)
  },
  methods:{
    getPosts(){
      axios.get("/blog/posts/").then(response => {
        console.log(response.data)
        this.posts = response.data
      })
    }
  }
}