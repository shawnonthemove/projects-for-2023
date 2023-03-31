<template>
  <div v-if="modelValue" class="son">
    <div>sonAAA</div>
    <div>content: <input type="text" :value="text" @input="emitChange"></div>
    <button @click="emitEvent">toggle</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  modelModifiers: {
    log: {
      type: Boolean
    }
  },
  text: {
    type: String,
    required: true
  },
  textModifiers: {
    isBt: {
      type: Boolean
    }
  }
})
const emit = defineEmits(['update:modelValue', 'update:text']);
const emitEvent = () => {
  if (props.modelModifiers.log) console.log('modifier');
  emit('update:modelValue', false);
}
const emitChange = (event) => {
  emit('update:text', props.textModifiers.isBt ? '---' + event.target.value + '---' : event.target.value)
}
</script>

<style scoped>
.son {
  width: 200px;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>