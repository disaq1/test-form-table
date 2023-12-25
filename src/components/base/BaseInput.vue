<template>
  <div
    :class="['input-wrapper', hasHint ? 'input-wrapper--hint' : '', disabled ? 'input-wrapper--disabled' : '']"
  >
    <input
      :value="modelValue"
      :autofocus="autofocus"
      :disabled="disabled"
      :inputmode="inputmode"
      :placeholder="placeholder"
      :type="type"
      class="input"
      @input="handleInput"
    >
    <p
      v-if="hasHint"
      class="input__hint"
    >
      {{ hint }}
    </p>
  </div>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
  },
  placeholder: {
    type: String,
    default: '',
  },
  hasHint: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: [String, Number],
    default: '',
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  inputmode: {
    type: String,
    default: 'text',
  },
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => emit('update:modelValue', event.target.value)
</script>

<style lang="scss" scoped>
.input {
  padding: 12px 16px;
  height: 44px;

  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0;
  text-align: left;

  border: 1px solid rgb(50, 50, 55);
  border-radius: 8px;

  color: rgb(40, 40, 40);
  background: #FFFFFF;

  caret-color: rgb(95, 120, 190);
}

.input::placeholder {
  text-align: left;

  color: rgb(108, 108, 108);
}

.input-wrapper--disabled {
  & input {
    border: 1px solid #00000040;

    color: rgba(#000000, .5);
    background: transparent;
  }
  & .input-wrapper {
    &__prepend-item,
    &__append-item {
      color: rgba(#000000, .5);
    }
  }
}

.input__hint {
  margin: 4px 0 0;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;

  color: rgb(95, 120, 190);
}
</style>