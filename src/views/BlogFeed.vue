<template>
    <div>
        <li v-for="post in posts" v-bind:key="post.id">
            {{post.title}}
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
    mounted: () => {
        axios.get("blog/posts/")
        .then(response => {
            this.posts = response.data
            })
        .catch(error => console.log(error.response))
    },
}
</script>