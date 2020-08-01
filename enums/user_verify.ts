// export interface UserVerify {
//   0: string
//   1: string
//   toSelect: { text: string; value: string }[]
// }
// const userVerify = {
//   0: 'تایید نشده',
//   1: 'تایید شده'
// }
// export default userVerify

// declare module 'vue/types/vue' {
//   interface NuxtEnumInstance {
//     user_verify: UserVerify
//   }
// }
export enum EUserVerify {
  'تایید نشده',
  'تایید شده'
}
export default EUserVerify
