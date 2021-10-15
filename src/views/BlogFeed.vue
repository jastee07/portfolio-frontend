<template>
    <div>
        <p v-if="!posts">We're sorry. We'll post something soon</p>
        <b-list-group>
            <b-list-group-item v-for="post in published_posts" v-bind:key="post.id">

                <b-link :to="'/' + post.slug + '/'">
                <h2>{{post.title}}</h2>

                </b-link>
                <br/>
                {{post.published_at | formatDate}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>


<script>
//import axios from 'axios'
import moment from 'moment'
import BlogService from '../services/blog-service'
export default {
    name: "BlogFeed",
    data: function() {
            return {
                posts: []
            };
    },
    async mounted(){
        this.posts = 
            await BlogService.getPosts(false)
            .then(response => response.data)
    },
    filters: {
        formatDate(date){
            return moment(date).format('LL')
        }
    },
    computed: {
        published_posts: function(){
            return this.posts.filter(post => post.published)
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}
</style>