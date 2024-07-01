<script setup lang="ts">

import TopMenu from "@/modules/common/components/TopMenu.vue";
import SideMenu from "@/modules/projects/components/SideMenu.vue";
</script>

<template>
  <div class="flex flex-col">
    <!--    Top Menu  -->

    <top-menu></top-menu>

    <main>
      <!--   side Menu   -->

      <side-menu></side-menu>

      <!--   router view   -->
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>

</style>