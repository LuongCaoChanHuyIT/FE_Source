import AuthLayout from '@/layouts/AuthLayout.vue'
import LoginView from '@/modules/auth/views/LoginView.vue'

export default [
  {
    path: '/auth',
    component: AuthLayout,
    children: [{ path: '', name: 'login', component: LoginView }],
  },
]
