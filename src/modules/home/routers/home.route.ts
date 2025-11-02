import DefaultLayout from '@/layouts/DefaultLayout.vue'

import HomeView from '@/modules/home/views/HomeView.vue'
import AboutView from '@/modules/home/views/AboutView.vue'

export default [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'about', name: 'about', component: AboutView },
    ],
  },
]
