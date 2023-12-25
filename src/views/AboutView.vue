<template>
  <div class="about">
    <h1>Страница с компонентами</h1>
    <BaseButton text="qwe" />
    <BaseInput
      v-model="input"
      placeholder="Введите имя"
      :has-hint="!!(!input.length)"
      hint="Пожалуйста, заполните поле"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const input = ref('')
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
}
</style>