<template>
    <div class="container flex flex-col gap-10 mx-auto mt-16 pt-5 pb-10">
        <div class="row flex items-center justify-center">
            <div class="join mt-4">
                <input class="join-item btn btn-outline" type="radio" name="options" aria-label="All" checked />
                <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Computer Science" />
                <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Programming" />
                <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Knowledge Sharing" />
                <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Tips & Others" />
            </div>
        </div>

        <div class="row mt-5">
            <div class=" flex flex-wrap items-center gap-10 justify-evenly">
                <div class="card w-96 glass" v-for="(item,index) in count" :key="index">
                        <figure class=""><img src="https://placehold.co/600x300" alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Life hack</h2>
                            <p>
                                {{ shortenContent }}
                            </p>
                            <div class="card-actions items-center justify-between mt-3">
                                <button class="btn btn-primary"><i class="fa-solid fa-eye"></i>Read</button>
                                <div class="rating">
                                    <input type="radio" name="rating-1" class="mask mask-star" />
                                    <input type="radio" name="rating-1" class="mask mask-star" />
                                    <input type="radio" name="rating-1" class="mask mask-star" />
                                    <input type="radio" name="rating-1" class="mask mask-star" />
                                    <input type="radio" name="rating-1" class="mask mask-star" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 10
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>
