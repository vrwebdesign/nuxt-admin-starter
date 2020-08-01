<style lang="scss" scoped>
.v-toolbar__title {
  margin-left: 0;
  margin-right: 20px;
  img {
    max-height: 64px;
  }
}
.nav-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  // background: whitesmoke;
  height: 64px;
  .logo {
    img {
      max-height: 64px;
    }
  }
}
.custom-navigation {
  background: linear-gradient(to bottom, #6910e2, #6910e2 64px, #cd36f3);
  z-index: 10;
}
.custom-toolbar {
  background: #fff;
  z-index: 9;
}
</style>

<template>
  <section>
    <v-navigation-drawer
      v-model="drawer"
      dark
      :clipped="clipped"
      :mini-variant="miniVariant"
      class="custom-navigation"
      right
      fixed
      app
    >
      <div class="nav-top">
        <div v-show="!miniVariant" class="logo">
          <img src="/img/logo_white.png" alt />
        </div>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>{{ `chevron_${miniVariant ? 'left' : 'right'}` }}</v-icon>
        </v-btn>
      </div>
      <appNavigation :miniVariant="miniVariant"></appNavigation>
    </v-navigation-drawer>
    <v-app-bar color="white" dense app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-tooltip bottom transition="fadeLeft">
        <template v-slot:activator="{ on }">
          <v-btn @click="logout" icon v-on="on">
            <v-icon class="la-rotate-180">exit_to_app</v-icon>
          </v-btn>
        </template>
        <span>خروج</span>
      </v-tooltip>
    </v-app-bar>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import appNavigation from '../Navigation/Navigation.vue'
export default Vue.extend({
  components: {
    appNavigation
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false
    }
  },
  methods: {
    logout() {
      this.$store.commit('auth/logout')
      this.$router.push('/auth')
    }
  }
})
</script>
