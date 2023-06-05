<script>
  import NavBar from '../components/NavBar.vue';
  
  export default{
    components: {
      NavBar,
    },
    
  };

</script>

<template>

    <NavBar/>

  <div class="container flex flex-col gap-10 mx-auto mt-16 h-[100vh] pt-5">

    <div class="row">
      <span class="text-xl text-white font-bold mr-5">Tags:</span>
      <div class="join mt-4">
        <input class="join-item btn btn-outline" type="radio" name="options" aria-label="All" checked />
        <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Computer Science" />
        <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Programming" />
        <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Knowledge Sharing" />
        <input class="join-item btn btn-outline" type="radio" name="options" aria-label="Tips & Others" />
      </div>
    </div>

    <div class="row">
      <h1 class="text-3xl underline underline-offset-8">Recent Posts</h1>
      <div class=" mt-6 py-3">

        <div class="card w-96 glass">
          <figure><img src="https://placehold.co/600x300" alt="car!"/></figure>
          <div class="card-body">
            <h2 class="card-title">Life hack</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque aut nobis veritatis, molestiae animi amet? Incidunt eaque pariatur unde tempore quam quaerat saepe sed excepturi nulla quidem dolor, iste explicabo!
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

<style scoped>
</style>
