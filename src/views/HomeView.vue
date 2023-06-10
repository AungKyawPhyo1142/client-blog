<script>
import axios from 'axios';

export default {
    data() {
        return {
            top_blogs: [],
            recent_blogs: [],
        }
    },
    methods: {
        topRatedBlogs () {
            axios.get('http://127.0.0.1:8000/api/v1/blogs/top/rated')
                .then((response)=>{
                    this.top_blogs = this.getResponseData(response.data.blogs);
                })
                .catch((err)=>{
                    console.log(err);
                })
        },

        recentBlogs(){
            axios.get('http://127.0.0.1:8000/api/v1/blogs/recent')
                .then((response)=>{
                    this.recent_blogs = this.getResponseData(response.data.blogs);
                })
                .catch((err)=>{
                    console.log(err);
                })
        },

        gotoDetail(id){
            this.$router.push({path:`/detail/${id}`});
        },

        getResponseData(blogs){
            for(let i=0;i<blogs.length;i++){
                blogs[i].image = 'http://127.0.0.1:8000/storage/blogImages/'+blogs[i].image;
                const date = new Date(blogs[i].created_at);
                blogs[i].created_at = date;
            }
            return blogs;
        },

    },
    computed: {
        shortenTopContent() {
            this.top_blogs.forEach(element => {
                const words = element.content.split(" ");
                const truncatedWords = words.slice(0, 8);
                element.content = truncatedWords.join(" ").concat('...');
            });
        },
        shortenRecentContent(){
            this.recent_blogs.forEach(element => {
                const words = element.content.split(" ");
                const truncatedWords = words.slice(0, 8);
                element.content = truncatedWords.join(" ").concat('...');
            });
        }
    },

    mounted () {
        this.topRatedBlogs();
        this.recentBlogs();
    }

};
</script>

<template>    
    
    <div class="container flex flex-col gap-10 mx-auto mt-16 pt-5 pb-10">
    
        <div class="row">
            <h1 class="text-3xl text-center underline underline-offset-8">Top Rated Posts</h1>
            <div class=" mt-6 py-3">
                <div class="flex flex-wrap justify-center items-center gap-10">

                    <div class="card w-96 h-[500px] glass" v-for="(item,index) in top_blogs" :key="index">
                        <figure class="">
                            <img :src="item.image" alt="" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ item.title }}</h2>
                            <span class=" text-xs mb-3">{{ item.created_at }}</span>
                            <p>
                                {{ shortenTopContent }}
                                {{ item.content }}
                            </p>
                            <div class="card-actions items-center justify-between mt-3">
                                <button @click="gotoDetail(item.id)" class="btn btn-primary"><i class="fa-solid fa-eye"></i>Read</button>
                                <div class="rating-container w-1/3 flex items-center justify-between">
                                    <i v-for="(rate,idx) in item.rating" :key="idx" class="fa-solid fa-star text-[#fcb603] text-xl"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
        </div>
        <div class="row">
            <h1 class="text-3xl text-center underline underline-offset-8">Recent Posts</h1>
            <div class=" mt-6 py-3">
                <div class="flex flex-wrap justify-center items-center gap-10">

                    <div class="card w-96 h-[500px] glass" v-for="(item,index) in recent_blogs" :key="index">
                        <figure class="">
                            <img :src="item.image" alt="car!" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ item.title }}</h2>
                            <span class=" text-xs mb-3">{{ item.created_at }}</span>
                            <p>
                                {{ shortenRecentContent }}
                                {{ item.content }}
                            </p>
                            <div class="card-actions items-center justify-between mt-3">
                                <button  @click="gotoDetail(item.id)" class="btn btn-primary"><i class="fa-solid fa-eye"></i>Read</button>
                                <div class="rating-container w-1/3 flex items-center justify-between">
                                    <i v-for="(rate,idx) in item.rating" :key="idx" class="fa-solid fa-star text-[#fcb603] text-xl"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    
        </div>
    
    </div>

</template>

<style scoped>

</style>
