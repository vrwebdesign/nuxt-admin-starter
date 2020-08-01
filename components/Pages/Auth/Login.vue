<template>
  <section ref="wrapper">
    <h3>ورود به پنل ادمین</h3>
    <form autocomplete="off" v-on:submit.prevent>
      <div>
        <v-text-field
          autocomplete="off"
          v-validate="'required'"
          :error-messages="errors.collect('username')"
          prepend-inner-icon="account_circle"
          name="username"
          v-model="user.username"
          @keyup.enter="login"
          label="نام کاربری"
          id="id"
        ></v-text-field>
        <v-text-field
          autocomplete="off"
          v-validate="'required'"
          :error-messages="errors.collect('password')"
          type="password"
          prepend-inner-icon="lock"
          name="password"
          v-model="user.password"
          @keyup.enter="login"
          label="رمز عبور"
          id="id"
        ></v-text-field>
      </div>
      <div class="remember-me">
        <v-checkbox label="مرا به خاطر بسپار" v-model="user.remember_me"></v-checkbox>
        <a @click="$emit('changeView', 'forget_password')">رمز عبور را فراموش کردم</a>
      </div>
      <v-btn @click="login" rounded outlined color="primary">ورود</v-btn>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      user: <any>{}
    }
  },
  methods: {
    async login() {
      let valid = await this.$validator.validateAll()
      if (!valid) {
        return
      }
      let loading = this.$loader.show('.login-form')
      try {
        let {
          data: { token }
        } = await this.$auth.loginWith('local', {
          data: this.user
        })
        await this.$auth.setUserToken(token)
        this.$router.push('/')
      } catch (error) {
        let msg = 'خطایی رخ داده است لطفا دوباره امتحان کنید'
        try {
          msg = error.response.data.message
        } catch (error) {}
        this.$toast.error().showSimple(msg)
      }
      loading.hide()
    }
  }
})
</script>
