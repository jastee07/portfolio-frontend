<template>
  <div>
      <h1>{{post.title}}</h1>
      <div v-html="post.body"/>
  </div>
</template>

<script>
import BlogService from '../services/blog-service'
export default {
    name: 'BlogPost',
    data(){
        return {
            post: {}
        }
    },
    mounted() {
        this.loadPost();
    },
    methods:{
        async loadPost(){
            let { data } = await BlogService.getPost(this.$route.params.slug)
            this.post = data;
        }
    }
}
</script>

<style>

</style>