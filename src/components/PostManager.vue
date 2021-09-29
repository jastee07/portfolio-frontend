<template>
<div>
    <b-input v-model="post.title" ></b-input>
    <div class="flex-container">
    <b-row>
      <b-col cols="5"><label>Published: </label><span v-if="post.published">{{post.published_at | formatDate}}</span></b-col>
      <b-col cols="6"><label>Last Update: </label><span>{{post.updated_at | formatDate}}</span></b-col>
      
    </b-row>
    <b-row>
    </b-row>
    <b-button @click="updatePost(post)">Save Post
    </b-button>
    <b-button @click="createPost()">New Post
    </b-button>
    </div>
      

</div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
    name:'PostManager',
    props:{
        post: Object
    },
    methods:{
        async updatePost(post){
            if(post.slug !== undefined){
                axios.put(`/blog/posts/${post.slug}/`, post)
                .then(response => {
                    this.$emit('savePost', response.data)
                })
                .catch(error => console.log(error))
            }
            else{
                axios.post("/blog/posts/", post)
                .then(response => {
                    console.log(response.data)
                    this.$emit('savePost',response.data);
                }).catch(error => console.log(error))
            }
        },
        createPost(){
            this.$emit('createPost')
        },
    },
    filters:{
        formatDate(date){
            if(date){
                return moment(date).format('LL')
            }
        }
    }
}
</script>
    
<style>
.flex-container{
    display:flex
}
</style>