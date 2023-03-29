import PostService from "~/services/PostService";

export default (ctx, inject) => {
    const services = {
        posts: new PostService(ctx.$axios)
    }
    
    inject('services', services)
}
