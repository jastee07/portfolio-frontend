<template>
<div>
<nav-bar/>
  <div class="container mt-5">

      <div class="row">
          <div class="col-lg-8">
              <article>
                        <!-- Post header-->
                        <header class="mb-4">
                            <!-- Post title-->
                            <h1 class="fw-bolder mb-1">{{ post.title }}</h1>
                            <!-- Post meta content-->
                            <div class="text-muted fst-italic mb-2">{{post.published_at | formatDate}}</div>
                            <!-- Post categories-->
                        </header>
                        <!-- Preview image figure-->
                        <!-- Post content-->
                        <section class="mb-5" v-html="post.body">

                        </section>
                    </article>
          </div>
      </div>
  </div>
  </div>
</template>

<script>
import moment from 'moment'
import BlogService from '../services/blog-service'
import NavBar from '../components/NavBar.vue'
export default {
    name: 'BlogPost',
    components:{
        NavBar
    },
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
    },
    filters: {
        formatDate(date){
            return moment(date).format('LL')
        }
    }
}
</script>

<style>

</style>