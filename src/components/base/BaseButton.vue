<template>
  <button
    :class="[
			'button',
			block ? 'button--block' : '',
			loading ? 'button--loading' : '',
			disabled ? 'button--disabled' : '',
		]"
    :disabled="disabled"
  >
    <span class="loading-circle"></span>
    <span class="button__text">
			{{ text }}
		</span>
  </button>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Boolean,
    default:false,
  },
  loading: {
    type: Boolean,
    default:false,
  },
  disabled: {
    type: Boolean,
    default:false,
  },
  text: {
    type: [String, Number],
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  box-sizing: border-box;
  padding: 12px 20px;

  border: none;
  border-radius: 8px;

  background: linear-gradient(90deg, rgba(240,250,240,1) 0%, rgba(200,230,210,1) 100%);
  transition: all 0.4s ease-in-out;

  cursor: pointer;
}

.button__text {
  white-space: nowrap;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;

  color: rgb(40, 42, 47);
}

.button:hover,
.button:focus {
  background: linear-gradient(90deg, rgb(200,225,200) 0%, rgb(165,210,155) 100%);

  & .button__text {
    color: rgb(240, 255, 240);
  }
}

.button:active {
  background: rgb(135, 230, 130);

  & .button__text {
    color: rgb(240, 255, 240);
  }
}

.button:disabled {
  pointer-events: none;
}

.button--disabled,
.button--loading {
  background: rgb(233, 233, 233);

  & .button__text {
    color: rgb(100, 100, 100);
  }
}

.button--block {
  width: 100%;
}

.button.button--loading {
  position: relative;
  pointer-events: none;
}

.button.button--loading .button__text {
  opacity: 0;
}

.button.button--loading .loading-circle::after {
  content: '';

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 24px;
  height: 24px;

  margin: auto;

  border: 2px solid transparent;
  border-top-color: rgb(40, 42, 47);
  border-radius: 50%;

  animation: button-loading-spinner 1s ease infinite;
}

@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>