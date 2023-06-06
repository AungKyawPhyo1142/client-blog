<template>
    <div class="container mt-16 py-10 mx-auto flex justify-center">

        <div class="flex flex-col">

            <img class="rounded-lg" src="https://placehold.co/600x300" alt="">
            <h1 class="text-3xl bg-black mt-10">Blog Title</h1>
            <span class="text-sm text-slate-600 mt-3">01-06-2023</span>

            <div class="rating-container mt-3 w-1/5 flex justify-between items-start">
                <i v-for="(rating,index) in ratings" :key="index" class="fa-solid fa-star text-[#fcb603] text-sm"></i>
            </div>

            <p class="w-full mt-10 leading-7" v-html="formattedContent"></p>

            <div class="row flex gap-4 justify-between items-center mt-14 w-full">
                <div class="">
                    <label for="my_modal_7" class="btn btn-primary"> <i class="fa-solid fa-star"></i> Rate this</label>
                    <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                    <div class="modal backdrop-filter backdrop-blur-sm bg-opacity-30">
                        <div class="modal-box flex flex-col items-center gap-7">
                            <h3 class="text-xl font-bold">Do you enjoy this kind of blog?</h3>
                            <div class="rating rating-lg">
                                    <input type="radio" v-model="rate" value="1" name="rating-1" class="mask mask-star" />
                                    <input type="radio" v-model="rate" value="2" name="rating-1" class="mask mask-star" />
                                    <input type="radio" v-model="rate" value="3" name="rating-1" class="mask mask-star" />
                                    <input type="radio" v-model="rate" value="4" name="rating-1" class="mask mask-star" />
                                    <input type="radio" v-model="rate" value="5" name="rating-1" class="mask mask-star" />
                            </div>

                        </div>
                    <label class="modal-backdrop" for="my_modal_7">Close</label>
                    </div>
                </div>
                <div class="join w-1/2">
                    <input class="input bg-primary w-full text-black join-item" placeholder="Feedback"/>
                    <button class="btn join-item "><i class="fa-regular fa-paper-plane"></i>Send</button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import { isClient } from '@vueuse/core';

    export default {
    data() {
        return {
            ratings: 5,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Hic laborum alias fugit fuga in, autem accusamus rerum enim deserunt voluptate, distinctio laboriosam!\nVeritatis eligendi sed unde delectus, nostrum perferendis. Tempora.\nLorem ipsum dolor sit amet consectetur adipisicing elit.\n Hic laborum alias fugit fuga in, autem accusamus rerum enim deserunt voluptate, distinctio laboriosam!\nVeritatis eligendi sed unde delectus, nostrum perferendis. Tempora.\n",
            rate: 0
        };
    },
    computed: {
        formattedContent() {
            if (!this.content)
                return "";
            return this.content.replace(/(?:\r\n|\r|\n)/g, "<br>");
        }
    },
    components: { isClient }
}
</script>

<style lang="stylus" scoped>

</style>
