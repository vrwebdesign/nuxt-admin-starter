import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { INav } from '~/models/Navigation'
export default class NavigationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  get(roles: string[]): INav[] {
    return [
      {
        icon: 'apps',
        title: 'دشبورد',
        to: '/'
      },
      {
        icon: 'la-users',
        title: 'کاربران',
        to: '/users'
      },
      {
        icon: 'la-money-bill',
        title: 'تراکنش ها',
        to: '/transactions'
      },
      //   {
      //     icon: 'la-stethoscope',
      //     title: 'پزشکان',
      //     to: '/doctors'
      //   },
      //   {
      //     icon: 'la-paper-plane',
      //     title: 'ارسال پیام',
      //     to: '/send-message'
      //   },
      //   {
      //     icon: 'la-question-circle',
      //     title: 'کوییز',
      //     to: '/quiz'
      //   },
      //   {
      //     icon: 'la-image',
      //     title: 'جواب آزمایش',
      //     to: '/test-answer'
      //   },

      {
        icon: 'la-globe',
        title: 'لندینگ بیماران خارج',
        child: [
          {
            icon: 'la-user-md',
            title: 'پزشکان',
            to: '/doctors'
          },
          {
            icon: 'la-user-md',
            title: 'پزشکان',
            to: '/doctors'
          },
          {
            icon: 'la-user-md',
            title: 'پزشکان',
            to: '/doctors'
          },
          {
            icon: 'la-user-md',
            title: 'پزشکان',
            to: '/doctors'
          },
          {
            icon: 'la-comments',
            title: 'نظرات',
            to: '/doctor-reviews',
            child: [
              {
                icon: 'la-calendar-day',
                title: 'رزرو ها',
                to: '/reservation'
              },
              {
                icon: 'la-user-injured',
                title: 'بیمار ها',
                to: '/patients'
              }
            ]
          }
        ]
      }
      //   {
      //     icon: 'la-mobile',
      //     title: 'اپلیکیشن رسا',
      //     to: '/application'
      //   },
      //   {
      //     icon: 'la-vial',
      //     title: 'تست کرونا',
      //     to: '/corona-test'
      //   }
    ]
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    navigation: NavigationService
  }
}
