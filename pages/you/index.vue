<template>
  <app-view>
    <app-header title="What you are supporting" />
    <footer class="fixed bottom-0 w-full px-5 mb-5">
      <app-button cta="support" url="/login" />
    </footer>
  </app-view>
</template>

<script>
import AppView from '../../components/AppView'
import AppHeader from '../../components/AppHeader'
import AppButton from '../journey/AppButton'
export default {
  components: { AppButton, AppHeader, AppView }
}
</script>
