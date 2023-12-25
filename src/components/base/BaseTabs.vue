<script setup>
import { useSlots, ref , provide} from 'vue'

const slots = useSlots()
const tabTitles = ref(slots.default().map(tab => tab.props.title))
const selectedTitle = ref(tabTitles.value[0])

provide('selectedTitle', selectedTitle)
</script>

<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        class="tabs__item"
        :class="{ selected: selectedTitle === title}"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  margin: 0 auto;

  &__header {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  &__item {
    position: relative;
    min-width: 20px;
    width: fit-content;
    padding: 5px;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid grey;
    text-align: center;
    transition: .1s all ease-out;
    cursor: pointer;
    user-select: none;

    &.selected {
      border-bottom: none;

      &:before {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 2px;
        width: 100%;
        background: green;
      }
    }
  }
}
</style>