<template>
    <div class="container flex flex-col gap-10 mx-auto mt-16 pt-5 pb-10">
        <div class="row flex items-center justify-center">
            <div class="join mt-4">
                <input class="join-item btn btn-outline" type="radio" name="options" v-model="filterTag" value="all" @change="filterChange" aria-label="All" checked />
                <input class="join-item btn btn-outline" type="radio" name="options" v-model="filterTag" value="computerScience" @change="filterChange" aria-label="Computer Science" />
                <input class="join-item btn btn-outline" type="radio" name="options" v-model="filterTag" value="programming" @change="filterChange" aria-label="Programming" />
                <input class="join-item btn btn-outline" type="radio" name="options" v-model="filterTag" value="knowledgeSharing" @change="filterChange" aria-label="Knowledge Sharing" />
                <input class="join-item btn btn-outline" type="radio" name="options" v-model="filterTag" value="tipsAndOthers" @change="filterChange" aria-label="Tips & Others" />
            </div>
        </div>

        <div class="row mt-5">
            <div class=" flex flex-wrap items-center gap-10 justify-evenly">
                <div class="card w-96 h-[500px] glass" v-for="(item,index) in blogs" :key="index">
                        <figure class=""><img :src="item.image" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{{ item.title }}</h2>
                            <p>
                                {{ shortenContent }}
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
</template>

<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                blogs: [],
                filterTag: 'all',
            }
        },
        created () {
            this.fetchBlogs();
        },
        methods: {
            fetchBlogs(){
                axios.get('http://127.0.0.1:8000/api/v1/blogs/all')
                .then((response)=>{
                    this.blogs = this.getResponseData(response.data.blogs);
                })
                .catch((err)=>{
                    console.log(err);
                })                
            },

            fetchBlogWithTags(tag){
                axios.post('http://127.0.0.1:8000/api/v1/blogs/filter',{'tag':tag})
                .then((response)=>{
                    this.blogs = this.getResponseData(response.data.blog);
                })
                .catch((err)=>{
                    console.log(err);
                })
            },

            getResponseData(blogs){
                for(let i=0;i<blogs.length;i++){
                    blogs[i].image = 'http://127.0.0.1:8000/storage/blogImages/'+blogs[i].image;
                    const date = new Date(blogs[i].created_at);
                    blogs[i].created_at = date;
                }
                return blogs;
            },

            gotoDetail(id){
                this.$router.push({path:`/detail/${id}`});
            },

            filterChange(){
                if(this.filterTag==='all'){
                    this.fetchBlogs();
                }
                else{
                    this.fetchBlogWithTags(this.filterTag);
                }
            }

        },
        computed: {
            shortenContent(){
                this.blogs.forEach(element => {
                    const words = element.content.split(" ");
                    const truncatedWords = words.slice(0, 8);
                    element.content = truncatedWords.join(" ").concat('...');
                });
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
