<template>
  <form @submit.prevent class="form">
   <div class="form__blocks">
     <div class="form__block">
       <p>
         ФИО
       </p>
       <BaseInput
         v-model="formData.fio"
         :has-hint="!formData.fio"
         hint="Пожалуйста, заполните поле"
       />
     </div>
     <div class="form__block">
       <p>
         Дата рождения
       </p>
       <BaseInput
         v-model="formData.birthday"
         :has-hint="!formData.birthday"
         type="date"
         hint="Пожалуйста, заполните поле"
       />
     </div>
     <div class="form__block">
       <p>
         Телефон
       </p>
       <BaseInput
         v-model="formData.phone"
         :has-hint="!formData.phone"
         type="number"
         inputmode="numeric"
         hint="Пожалуйста, заполните поле"
       />
     </div>
     <div class="form__block">
       <p>
         Электронная почта
       </p>
       <BaseInput
         v-model="formData.email"
         :has-hint="!formData.email"
         hint="Пожалуйста, заполните поле"
       />
     </div>
   </div>
    <BaseButton
      :disabled="isDisabled"
      text="Отправить"
      class="form__button"
      @click="saveForm()"
    />
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUsersStore } from '@/stores/users.js'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseButton from '@/components/base/BaseButton.vue'
const usersStore = useUsersStore()

const defaultFormData = () => ({
  fio: '',
  birthday: '',
  phone: '',
  email: '',
})

const formData = ref(defaultFormData())

const isDisabled = computed(() => !(formData.value.fio && formData.value.birthday && formData.value.phone && formData.value.email))
const saveForm = () => {
  usersStore.addNewUser(formData.value)
  formData.value = defaultFormData()
}
</script>

<style scoped lang="scss">
.form {

  &__blocks {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__button {
    margin: 16px 0 0;
  }
}
</style>