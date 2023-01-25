<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation} from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      isActive: true,
      images: [
        {src: "src/assets/images/portfolio1.png", alt: "My-Work1"},
        {src: "src/assets/images/Portfolio2.png", alt: "My-Work2"},
        {src: "src/assets/images/Portfolio3.png", alt: "My-Work3"},
        {src: "src/assets/images/Portfolio4.png", alt: "My-Work4"},
        {src: "src/assets/images/Portfolio5.png", alt: "My-Work5"},
        {src: "src/assets/images/Portfolio6.png", alt: "My-Work5"},
      ]
    }
  },
  methods: {
    changeActive(index) {
      this.isActive = this.isActive === index ? null : index
    }
  }
}
</script>
<template>
  <div class="media-gallery">
    <h2>My Recent Work :</h2>
    <div class="row">
      <div class="col-md-6" v-for="(images,index) in images">
        <div class="img-wrapper">
          <img
              v-on:click="changeActive(index)"
              :src=images.src
              :alt=images.alt
              v-bind:class="{ active: index === isActive }"
          >
        </div>
      </div>
      <carousel :items-to-show="1.5">
        <slide v-for="slide in 10" :key="slide">
          {{ slide }}
        </slide>

        <template #addons>
          <navigation/>
        </template>
      </carousel>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.media-gallery {
  padding: 100px 0;

  .img-wrapper {
    max-width: 600px;
    margin: 15px;

    img {
      width: 100%;
      cursor: pointer;

      &.active {
        border: 4px solid red;
      }
    }
  }
}
</style>
