<template>
  <div class="sidebar">
    <RouterLink v-for="item in MenuItems" :key="item.name" :to="item.link" class="sidebar__item">
      {{ item.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const MenuItems = reactive([
  { name: "Typography", link: "/typography" },
  { name: "Button", link: "/typography/button" },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 62px;
  left: 0;
  height: 100%;
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  gap: 10px;
  transition: 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
  transform: translateX(0px);
  &__item {
    display: block;
    border: 2px solid rgb(221, 210, 210);
    border-radius: 12px;
    padding: 10px;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
      border-color: var(--primary-color);
    }
  }
  &:hover {
    background-color: rgb(221, 236, 231);
  }
}
</style>
