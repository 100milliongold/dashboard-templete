<template>
    <form @submit.prevent="login" class="form-signin">
      <div class="form-row">
        <div class="text-center mb-5 px-5 col-12">
          <img :src="require('../assets/images/img-alio-logo.png')" class="img-fluid"/> 
        </div>
        <div class="form-label-group col-12">
          <input type="text" v-model="email" placeholder="email"  class="form-control input_id"/>
        </div>
        <div class="form-label-group col-12">
          <input type="password"  v-model="password" placeholder="Password"  class="form-control password" value="password123"/>
        </div>
        <p v-if="err">Bad login information</p>
        <button  class="btn btn-lg  btn-block login-btn" type="submit">Login</button>
      </div>
    </form>
</template>
<style scoped>
@import '../assets/styles/login/login.scss';
</style>


<script>
import {Auth} from '../api'

export default {
  beforeCreate : function(){
    document.body.className = "login-content"
  },
  data() {
    return {
      email: 'test@test.com',
      password: '',
      err: false
    }
  },
  methods: {
    login() {
      Auth.login(this.email, this.password)
      .then(() => this.$router.replace(this.$route.query.redirect || '/'))
      .catch(() => this.err = true)
    }
  }
}
</script>
