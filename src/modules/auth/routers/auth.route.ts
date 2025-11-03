import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'

export default [
  {
    path: '/auth',
    component: DefaultLayout,
    children: [{ path: '', name: 'login', component: LoginView }],
  },
]
