<template>
    <div>
        <p v-if="!posts">We're sorry. We'll post something soon</p>
        <b-list-group>
            <b-list-group-item v-for="post in posts" v-bind:key="post.id">

                <b-link :to="'/' + post.slug + '/'">
                    {{post.title}}
                </b-link>
                <br/>
                {{post.published_at | formatDate}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>


<script>
import axios from 'axios'
import moment from 'moment'
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
    filters: {
        formatDate(date){
            return moment(date).format('LL')
        }
    }
}
</script>