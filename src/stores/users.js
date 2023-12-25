import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref(JSON.parse(localStorage.getItem('users')) || [])
  const getUsers = computed(() => users.value)

  const addNewUser = (data) => {
    users.value.push(data)
    localStorage.setItem(`users`, JSON.stringify(users.value))
  }

  return {
    addNewUser,
    getUsers,
  }
})
