<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch, Emit, Ref } from 'vue-property-decorator'
import Header from '@/components/Layouts/Default/Header/Header.vue'

@Component({
  components: { Header }
})
export default class HeaderComponent extends Vue {}
</script>

