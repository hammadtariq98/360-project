import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Visionneuse from './../views/animation360-visionneuse.vue'
import Hologramme from './../views/animation360-hologramme.vue'
import DessinTechnique from './../views/animation360-dessin-technique.vue'
import Apropos from './../views/apropos.vue'
import NousJoindre from './../views/nous-joindre.vue'
import Soumission from './../views/soumission.vue'
import UnitairesSerie from './../views/produit-photos-unitaires-serie.vue'
import HauteVitesse from './../views/produit-photos-haute-vitesse.vue'
import RealisationFibrobec from './../views/realisation-Fibrobec.vue'
import RealisationIASO from './../views/realisation-IASO.vue'
import RealisationInnotag from './../views/realisation-Innotag.vue'
import RealisationSacsindustriels from './../views/realisation-Sacsindustriels.vue'
import RealisationPresident from './../views/realisation-President.vue'

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
  },
  {
    path: '/produit-photos-unitaires-serie',
    name: 'UnitairesSerie',
    component: UnitairesSerie
  },
  {
    path: '/produit-photos-haute-vitesse',
    name: 'HauteVitesse',
    component: HauteVitesse
  },
  {
    path: '/realisation-Fibrobec',
    name: 'RealisationFibrobec',
    component: RealisationFibrobec
  },
  {
    path: '/realisation-IASO',
    name: 'RealisationIASO',
    component: RealisationIASO
  },
  {
    path: '/realisation-Innotag',
    name: 'RealisationInnotag',
    component: RealisationInnotag
  },
  {
    path: '/realisation-President',
    name: 'RealisationPresident',
    component: RealisationPresident
  },
  {
    path: '/realisation-Sacsindustriels',
    name: 'RealisationSacsindustriels',
    component: RealisationSacsindustriels
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
