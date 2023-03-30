export default class PostService {
    axios: any
    apiUrl: any

    constructor($axios: any) {
        this.axios = $axios
        this.apiUrl = process.env.NUXT_ENV_API_URL
    }

    async findAll() {
        return await this.axios.get(`${this.apiUrl}/posts`).then((res: any) => res.data);
    }

    async find(id: number) {
        return await this.axios.get(`${this.apiUrl}/posts/${id}`).then((res: any) => res.data);
    }

    async create(post: any) {
        return await this.axios.post(`${this.apiUrl}/posts/create`, post).then((res: any) => res);
    }
}
