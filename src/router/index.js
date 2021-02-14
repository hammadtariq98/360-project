import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Visionneuse from './../views/animation360-visionneuse.vue'
import Hologramme from './../views/animation360-hologramme.vue'
import DessinTechnique from './../views/animation360-dessin-technique.vue'
import Apropos from './../views/apropos.vue'
import NousJoindre from './../views/nous-joindre.vue'
import Soumission from './../views/soumission.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/innovation',
    name: 'Innovation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Innovation.vue')
  },
  {
    path: '/animation360-visionneuse',
    name: 'Visionneuse',
    component: Visionneuse
  },
  {
    path: '/animation360-hologramme',
    name: 'Hologramme',
    component: Hologramme
  },
  {
    path: '/animation360-dessin-technique',
    name: 'DessinTechnique',
    component: DessinTechnique
  },
  {
    path: '/soumission',
    name: 'Soumission',
    component: Soumission
  },
  {
    path: '/nous-joindre',
    name: 'NousJoindre',
    component: NousJoindre
  },
  {
    path: '/apropos',
    name: 'Apropos',
    component: Apropos
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
