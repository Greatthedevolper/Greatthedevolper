<template>
  <div class="container">
    <div class="main-gallery">
      <Carousel
          id="gallery"
          :items-to-show="1.5"
          :wrap-around="false"
          v-model="currentSlide"
      >
        <Slide v-for="slide in images" :key="slide">
          <img class="carousel__item" :src="slide.src" :alt="slide.alt"/>
        </Slide>
        <template #addons>
          <Pagination/>
          <Navigation />
        </template>
      </Carousel>

      <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
      >
        <Slide v-for="(slide,index) in images" :key="slide">
          <img class="carousel__item" :src="slide.src" :alt="slide.alt" @click="slideTo(index)"/>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data: () => ({
    currentSlide: 0,
    images: [
      {src: "src/assets/images/bicord-image-1.png", alt: "My-Work1"},
      {src: "src/assets/images/bicord-image-2.png", alt: "My-Work2"},
      {src: "src/assets/images/bicord-image-3.png", alt: "My-Work3"},
      {src: "src/assets/images/bicord-image-4.png", alt: "My-Work4"},
      {src: "src/assets/images/bicord-image-5.png", alt: "My-Work5"},
      {src: "src/assets/images/bicord-image-6.png", alt: "My-Work5"},
    ]
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
})
</script>

<style lang="scss" scoped>

.main-gallery {
  padding-top: 50px;

  #gallery {
    margin: 30px 0;

    .carousel__slide {
      width: 100%;
      height: 400px;
      margin-right: 10px;

      .carousel__item {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }


    .carousel__prev,
    .carousel__next {
      border: 1px solid red;
      border-radius: 50%;
      color: red;
    }
  }


  #thumbnails {
    .carousel__slide {
      width: 100%;
      height: 100px;

      .carousel__item {
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius: 10px;
      }
    }
  }
}
</style>