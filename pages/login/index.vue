<template>
  <div class="min-h-screen body flex flex-col">
    <div class="p-5 text-white">
      <img src="../../assets/images/libra_logo.svg" alt="" class="w-2/5" />
    </div>
    <section class="bg-white border-black border-4 my-auto mx-5">
      <h2 class="text-xl text-center pt-5">
        libra by Facebook
      </h2>
      <div class="m-5">
        <input
          type="text"
          placeholder="Username"
          class="p-3 w-full border-2 border-gray-400"
        />
      </div>
      <div class="m-5">
        <input
          type="password"
          placeholder="Password"
          class="p-3 w-full border-2 border-gray-400"
        />
      </div>
      <div class="m-5">
        <button
          class="p-3 w-full text-white flex justify-between"
          style="background-color: rgb(95, 53, 231)"
        >
          <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
            /></svg
          ><span class="m-auto">Facebook login</span>
        </button>
      </div>
    </section>
    <footer>
      <app-button-back cta="Go back" />
    </footer>
  </div>
</template>

<script>
import AppButtonBack from '../journey/AppButtonBack'
export default {
  components: { AppButtonBack }
}
</script>

<style scoped>
.body {
  background-color: rgb(95, 53, 231);
}
</style>
