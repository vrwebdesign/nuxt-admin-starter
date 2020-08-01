<style lang="scss" scoped>
</style>
<template>
  <div>hi Dashboard</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
Component.registerHooks(['fetch'])
@Component({
  components: {}
})
export default class HomePage extends Vue {}
</script>

