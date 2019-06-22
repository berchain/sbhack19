<template>
  <app-view>
    <app-header title="What does a fairtrade banana mean?" />
    <article class="p-3">
      <header class="mb-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eveniet
          excepturi iusto natus nobis rerum sapiente unde vel veniam. Aliquid
          distinctio harum in laudantium nam placeat possimus quam temporibus,
          velit.
        </p>
      </header>
      <section>
        <dl>
          <dt>
            <img src="../../assets/images/economy.png" alt="" />
            <span>The economic criteria</span>
          </dt>
          <dd>
            Fairtrade minimum price for workers
          </dd>
          <dd>
            Secure partnerships: producers can request pre-financing from buyers
          </dd>
        </dl>
        <dl>
          <dt>
            <img src="../../assets/images/environment.png" alt="" />
            <span>The environmental criteria</span>
          </dt>
          <dd>Sustainable water & waste management</dd>
          <dd>Preserving biodiversity and soil fertility</dd>
          <dd>Minimum use of pesticides and chemicals</dd>
          <dd>Prohibition of GMOs</dd>
          <dd>Organic production receives higher Fairtrade Minimum Price</dd>
        </dl>
        <dl>
          <dt>
            <img src="../../assets/images/social.png" alt="" />
            <span>The social criteria</span>
          </dt>
          <dd>Democratic organization (e.g. cooperatives</dd>
          <dd>
            Workers rights (health standards) and non-discrimination policy
          </dd>
          <dd>Forced and child labour strictly prohibited</dd>
        </dl>
      </section>
      <div class="flex">
        <div class="flex flex-col w-3/4 mx-auto mt-24 mb-10">
          <div
            class=" rounded-full border-4 border-black p-5 bg-white product mx-auto overflow-hidden"
          >
            <img src="../../assets/images/banana.jpeg" alt="" />
          </div>
          <div class="block border-l-4 border-black h-24 w-1 mx-auto"></div>
          <AppButton cta="See Journey" url="/journey" />
        </div>
      </div>
    </article>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import AppButton from '../journey/AppButton'
export default {
  name: 'Index',
  components: { AppButton, AppHeader, AppView }
}
</script>

<style scoped lang="scss">
dl {
  @apply border-black border-4 bg-yellow-500 p-5 mb-8;
}
dt {
  @apply text-2xl font-semibold flex flex-col mb-5 self-center my-8 text-center p-5;
}
dd {
  &:before {
    content: '\2713';
    display: inline-block;
    @apply -ml-8 border float-left border-black w-6 h-6 text-center leading-none text-2xl font-semibold text-green-700;
  }
  @apply pl-8 mb-2;
}
dt img {
  @apply m-auto w-1/2;
}
</style>
