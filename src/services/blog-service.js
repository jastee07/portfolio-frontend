import axios from "axios";


export default class BlogService {

    async getPosts(isEditor){
        var response = await axios.get(`/blog/posts/?editor=${isEditor}`);
        return response.data
    }

    async getPost(slug){
        try{
         var response = await axios.get(`blog/posts/${slug}/`)
         return response.data
        }
        catch(e){
            return e.message
        }
        
    }

    async updatePost(slug){
        var response = await axios.put(`blog/posts/${slug}/`)
        return response.data
    }

    async createPost(){
        var response = await axios.post(`blog/posts/`)
        return response.data
    }
}