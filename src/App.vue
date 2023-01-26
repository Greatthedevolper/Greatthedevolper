<script>
import {RouterView} from "vue-router";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
    RouterView
  },
  data() {
    return {
      checked: 'false',
      currentPath: window.location.hash,
      themeClass: localStorage.getItem("theme-class") || false,
    }
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  },
  methods: {
    toggle: function () {
      let wrapper = document.querySelector(".main-div-wrapper")
      if (localStorage.getItem("theme-class")) {
        if ((localStorage.getItem("theme-class")) === "") {
          wrapper.classList.add("light")
          localStorage.setItem("theme-class", "light");
        } else {
          wrapper.classList.remove("light")
          localStorage.setItem("theme-class", "");
        }
      } else {
        wrapper.classList.add("light")
        localStorage.setItem("theme-class", "light");
      }
    }
  },

}

</script>

<template>
  <div class="main-div-wrapper" :class="[this.$route.name, themeClass ]">
    <SideBar msg=""/>
    <div class="main-div">
      <button id="theme-btn" @click="toggle()"><i class="lni lni-sun"></i></button>
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
