import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Testing from '@/components/Testing.vue'
import Exercise from '@/components/Exercise.vue'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/exercise',
      name: 'exercise',
      component: Exercise
    }
  ],
  mode: 'history' // abstract
})

export default router