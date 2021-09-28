<template>
    <div>
        
        <li v-for="post in posts" v-bind:key="post.id">
            <router-link :to="'/' + post.slug + '/'">
            {{post.title}}
            </router-link>
        </li>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: "BlogFeed",
    data: function() {
            return {
                posts: []
            };
    },
    async mounted(){
        this.posts = 
            await axios.get("/blog/posts/").then(response => response.data)
    },
}
</script>