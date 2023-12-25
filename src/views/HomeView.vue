<template>
  <main>
    <BaseTabs>
      <BaseTab title="Форма">
        <TheForm />
      </BaseTab>
      <BaseTab title="Данные">
        <BaseTable :items="getUsers" />
      </BaseTab>
    </BaseTabs>
  </main>
</template>

<script setup>
import { useUsersStore } from '@/stores/users.js'
import { storeToRefs } from 'pinia'
import BaseTabs from '@/components/base/BaseTabs.vue'
import BaseTab from '@/components/base/BaseTab.vue'
import BaseTable from '@/components/base/BaseTable.vue'
import TheForm from '@/components/TheForm.vue'

const { getUsers } = storeToRefs(useUsersStore())
</script>