<template>
  <div>
    <router-view name="login"></router-view>
    <div class="wrapper">
      <router-view name="header"></router-view>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>


<script>
import {Auth} from './api'
import './assets/styles/index.scss'

export default {
  name: 'app',
  data() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },
  created() {
    Auth.onChange = loggedIn => {
      console.log('onchage', loggedIn)
      this.loggedIn = loggedIn
    }
  }
}
</script>

<style>
.router-link-exact-active  {
  
}

</style>
