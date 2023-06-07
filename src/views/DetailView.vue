<template>
    <div class="container mt-16 py-10 mx-auto flex justify-center">

        <div class="flex flex-col w-2/3 px-10">

            <img class="rounded-lg" :src="blogData.image" alt="">
            <h1 class="text-3xl bg-black mt-10">{{ blogData.title }}</h1>
            <span class="text-sm text-slate-600 mt-3">{{ blogData.created_at }}</span>

            <div class="rating-container mt-3 w-1/5 flex justify-between items-start">
                <i v-for="(rating,index) in blogData.rating" :key="index" class="fa-solid fa-star text-[#fcb603] text-sm"></i>
            </div>

            <p class="w-full mt-10 leading-7" v-html="formattedContent"></p>

            <div class="row flex gap-4 justify-between items-center mt-14 w-full">

                <div class="">
                    <router-link class="btn btn-secondary" to="/"><i class="fa-solid fa-circle-chevron-left"></i>Back</router-link>
                </div>

                <div class="">
                    <label for="my_modal_7" class="btn btn-primary"> <i class="fa-solid fa-star"></i> Rate this</label>
                    <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                    <div class="modal backdrop-filter backdrop-blur-sm bg-opacity-30">
                        <div class="modal-box flex flex-col items-center gap-7">
                            <h3 class="text-xl font-bold">Do you enjoy this kind of blog?</h3>
                            <div class="rating rating-lg">
                                    <input type="radio" value="1" name="rating-1" class="mask mask-star" v-model="rating" @change="handleRatingChange" />
                                    <input type="radio" value="2" name="rating-1" class="mask mask-star" v-model="rating" @change="handleRatingChange" />
                                    <input type="radio" value="3" name="rating-1" class="mask mask-star" v-model="rating" @change="handleRatingChange" />
                                    <input type="radio" value="4" name="rating-1" class="mask mask-star" v-model="rating" @change="handleRatingChange" />
                                    <input type="radio" value="5" name="rating-1" class="mask mask-star" v-model="rating" @change="handleRatingChange" />
                            </div>

                        </div>
                    <label class="modal-backdrop" for="my_modal_7"></label>
                    </div>
                </div>


            </div>

        </div>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {

        data() {
            return {
                blogID: null,
                blogData: {},
                rating: 0,
            };
        },
        created () {
            this.blogID = this.$route.params.id;
            this.fetchData(this.blogID);
        },
        methods: {
            fetchData (id) {
                axios.post('http://127.0.0.1:8000/api/v1/blogs/detail',{'id':id})
                    .then((response)=>{
                        this.blogData = this.getResponseData(response.data.blog);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
            },
            getResponseData(blog){
                blog.image = 'http://127.0.0.1:8000/storage/blogImages/'+blog.image;
                const date = new Date(blog.created_at);
                const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
                const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
                blog.created_at = `${formattedDate} | ${formattedTime}`;
                return blog;
            },
            handleRatingChange(){
                console.log(this.rating);
            }
        },
        computed: {
            formattedContent() {
                if (!this.blogData.content)
                    return "";
                return this.blogData.content.replace(/(?:\r\n|\r|\n)/g, "<br>");
            }
        },
}
</script>

<style lang="stylus" scoped>

</style>
