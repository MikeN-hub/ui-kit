<script setup lang="ts">
import { RouterView } from "vue-router";
import TheHeader from "@/components/layout/TheHeader.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <div class="container">
    <TheHeader />
    <Sidebar />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 30px;
  transition: 0.2s;
  &_full {
    margin-left: 0;
  }
}
</style>
