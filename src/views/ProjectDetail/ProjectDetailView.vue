<template>
  <div class="project-detail-view">
    <div class="header" :style="`background: no-repeat center / cover url(${projectData.imageUrl});`"></div>

    <!-- title -->

    <section class="images-section">
      <div v-for="(url, i) in images" :key="i">
        <img class="image" :src="url" />
      </div>
    </section>

    <!-- modal -->

    <section class="related-projects">
      <p class="title-lg">More Projects</p>

      <div class="container">
        <div v-for="(project, i) in relatedProducts" :key="i" class="project-card" @click="goToProjectDetailView(project.id)">
          <div class="image" :style="`background: no-repeat center / cover url(${project.imageUrl});`"></div>
          <p class="title-lg">{{ project.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import projects from '@/data/projects'

const route = useRoute()
const router = useRouter()

const projectData = projects.find(project => project.id === route.params.id)
const images = [
  "https://media.istockphoto.com/id/2149515192/photo/chef-preparing-a-seafood-starter.jpg?s=612x612&w=0&k=20&c=cnCIfCjk9fd_U4RP9h53vLi7CFGmXk0JQE-U43WWKMg=",
  "https://media.istockphoto.com/id/1404204719/photo/unrecognizable-multiracial-female-and-male-friends-having-the-dinner-at-the-restaurant-balcony.jpg?s=612x612&w=0&k=20&c=0w9dYREjATPfYPaathelh9XGbfLtA8vR27WcUlkNUrg=",
  "https://media.istockphoto.com/id/1872877058/photo/partial-image-of-couple-toasting-wine-from-glasses-at-table-in-hotel-restaurant.jpg?s=612x612&w=0&k=20&c=J2VVIZO_pOT-ayAJqWgRWhO2hKwIcEGbhkFIIrLqp70=",
  "https://media.istockphoto.com/id/1446478805/photo/a-chef-is-finishing-the-preparation-of-the-plate.jpg?s=612x612&w=0&k=20&c=OoFoYYJ0_eun72wlt-lDzlYjY-CaLwphDgUyIApDu_I=",
  "https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.jpg?s=612x612&w=0&k=20&c=jwKJmGErrLe2XsTWNYEEyiNicudYVA4j8jvnTiJdp58=",
  // "https://media.istockphoto.com/id/1933259531/photo/variety-of-food-dishes-with-meat-fish-and-steak-served-in-michelin-star-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=uTPNuNanFjgIKOSEygS8Z5FYa5GZIeFFTkXCZvA8QqY=",
  "https://media.istockphoto.com/id/1176929739/photo/restaurant-plate-of-black-angus-beef-fillet-with-warm-potatoes-in-cheese-sauce-and-mushroom.jpg?s=612x612&w=0&k=20&c=vmz0OJanbPTYkCtR4xlGgJQj9VOLPkvddISQzyYnS64=",
  "https://media.istockphoto.com/id/1411971240/photo/wine-and-champain-glass-in-luxury-weddings-and-events.jpg?s=612x612&w=0&k=20&c=YVSlq0UuN0rpB252gO77eKcqc5DI0aNRQZI8lTSAZhY=",
  // "https://media.istockphoto.com/id/1933261583/photo/deer-minced-meat-terrine-dish-duck-breast-with-balsamic-cherries-in-michelin-star-gourmet.jpg?s=612x612&w=0&k=20&c=ZQKLfYaeTkmVGhGgK0EKhF8dNLOrwSj7I_c69t-yWRY=",
  "https://media.istockphoto.com/id/1388791611/photo/teppanyaki-style.jpg?s=612x612&w=0&k=20&c=gNhQXH4awScPV_ZR3GHXm6PKnz4HtjBS8Y5Oqb3Cs50=",
  "https://media.istockphoto.com/id/1411606505/photo/waiter-adding-sauce-on-mussels-during-catering.jpg?s=612x612&w=0&k=20&c=sLY1ILsEs4knFb7VECSWUBHqr1zEpIg6JK2eE_FWVvA=",
  "https://media.istockphoto.com/id/1172877148/photo/pouring-red-wine.jpg?s=612x612&w=0&k=20&c=5ulFO6kgoNH4Mj0QFUqNWB_-QTinyhdBSeWF8K0WENs=",
]
const relatedProducts = projects.filter(project => project.id !== route.params.id)

function goToProjectDetailView(id) {
  router.push({ name: "ProjectDetail", params: { id }, })
}
</script>
