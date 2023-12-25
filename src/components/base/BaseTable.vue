<template>
  <div class="table">
    <div class="table__header">
      <p class="table__header-item">
        ФИО
      </p>
      <p class="table__header-item">
        Дата рождения
      </p>
      <p class="table__header-item">
        Номер телефона
      </p>
      <p class="table__header-item">
        Электронная почта
      </p>
    </div>
    <div class="table__content">
      <template v-if="items.length">
        <div
          v-for="item in items"
          :key="item"
          class="table__content-slot"
        >
          <p class="table__content-item">
            {{ item?.fio }}
          </p>
          <p class="table__content-item">
            {{ getDate(item?.birthday) }}
          </p>
          <p class="table__content-item">
            {{ item?.phone }}
          </p>
          <p class="table__content-item">
            {{ item?.email }}
          </p>
        </div>
      </template>
      <template v-else>
        Таблица пуста
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
})

const getDate = (date) => {
  if (!date) return ''

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
  }

  return new Date(date).toLocaleString('ru', options)
}
</script>

<style lang="scss" scoped>
.table {

  &__header,
  &__content-slot {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  &__header {
    @media screen and (max-width: 699px){
      display: none;
    }
  }

  &__content-slot {
    @media screen and (max-width: 699px){
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__content {
    display: grid;

    @media screen and (max-width: 699px){
      gap: 32px;
    }
  }

  &__header-item {
    padding: 2px;
    outline: 1px solid red;
    background: grey;
    text-align: center;
  }

  &__content-item {
    padding: 10px;
    outline: 1px solid red;
    text-align: center;
  }
}
</style>