<template>
  <app-view>
    <figure>
      <h1>Thank you!</h1>
    </figure>
    <article>
      <h2>Track your donations</h2>
      <section>
        <ul>
          <li>
            <div>
              <figure class="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src="../../assets/images/banana.jpeg"
                  alt=""
                  class="w-4/5"
                />
              </figure>
              <h3 class="font-semibold">Fair-trade</h3>
              <p>
                See transaction on blockchain <a href="#querystring">hash</a>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
export default {
  components: { AppView }
}
</script>

<style scoped></style>
