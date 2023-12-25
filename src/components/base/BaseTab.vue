<template>
  <div class="tabs__content" v-show="selectedTitle === title">
    <slot />
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  title: String
})

const selectedTitle = inject('selectedTitle')
</script>

<style scoped>
.tabs__content {

  min-height: 300px;
  display: block;
  border-radius: 0 0 5px 5px;
  margin: 20px 0 0;
  padding: 10px;
}
</style>