import axios from "axios";


class BlogService {

    getPosts(isEditor){
        if(isEditor){
            return axios.get(`/blog/posts/?editor=${isEditor}`);
        }
        else {
            return axios.get(`/blog/posts/`);
        }
        
    }

    getPost(slug){
        return axios.get(`blog/posts/${slug}/`)
    }

    async updatePost(post, slug){
        return axios.put(`blog/posts/${slug}/`, post)
    }

    async createPost(post){
        return axios.post(`blog/posts/`, post)
    }
}

export default new BlogService();