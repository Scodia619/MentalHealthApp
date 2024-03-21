import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mental-health-app-mgu0.onrender.com/api'
})

export const getCommunityPosts = () => {
    return api.get(`/posts?private=false`)
    .then(res => res.data.posts)
}