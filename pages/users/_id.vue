<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="service"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
export default Vue.extend({
  data() {
    return {
      date: null,
      title: '',
      service: this.$service.users,
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{}
    }
  },
  async mounted() {
    if (this.$route.params.id !== 'create') {
      this.loading = true
      this.item = await this.service.$get(this.$route.params.id)
      this.title = `ویرایش کاربر {{name}}`
      this.loading = false
    } else {
      this.title = 'ایجاد کاربر جدید'
    }
    this.formData = [
      {
        rows: [
          {
            label: 'وضعیت تایید',
            type: 'select',
            items: this.$enum.user_verify.toSelect,
            validation: { required: true },
            placeholder: 'وضعیت تایید را وارد نمایید',
            model: 'is_verified'
          },
          {
            label: 'نام و نام خانوادگی کاربر',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام و نام خانوادگی کاربر را وارد نمایید',
            model: 'name'
          },
          {
            label: 'نام مستعار',
            type: 'textField',
            placeholder: 'نام مستعار را وارد نمایید',
            model: 'alias_name'
          },
          {
            label: 'موبایل',
            type: 'textField',
            validation: { required: true },
            placeholder: 'موبایل را وارد نمایید',
            model: 'mobile'
          },
          {
            label: 'شماره شبا',
            type: 'textField',
            validation: { sheba_number: true },
            placeholder: 'شماره شبا را وارد نمایید',
            model: 'sheba_number'
          },
          {
            label: 'شماره کارت',
            type: 'textField',
            validation: { number: true, digits: 16 },
            placeholder: 'شماره کارت را وارد نمایید',
            model: 'card_number'
          },
          {
            label: 'عکس کارت',
            type: 'fileUpload',
            placeholder: 'عکس کارت را وارد نمایید',
            model: 'card_image'
          }
        ]
      }
    ]
  }
})
</script>
