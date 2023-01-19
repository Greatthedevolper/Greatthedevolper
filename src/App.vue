<script setup>
import {RouterView} from "vue-router";
import SideBar from "./components/SideBar.vue";</script>

<template>
  <div class="main-div-wrapper">
    <SideBar msg=""/> 
    <div class="main-div">
      <header/>
      <RouterView v-slot="{ Component }">
        <transition name="scale-slide">
          <component :is="Component" :key="$route.path"></component>
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
