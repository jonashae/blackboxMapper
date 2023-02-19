<template>
  <div class="baseBoolean">
    <div class="label">{{ name }}</div>

     <input
        class="inputField"
        type="checkbox"
        v-model="value"
      />
  </div>
</template>
<script>
export default {
  name: 'BaseBoolean',
  props: {
    name: {
      type: String,
      required: true,
    },
    init: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  computed:{
    value: {
      get() {
        return this.init
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  }
}
</script>
<style scoped>
.baseBoolean {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0.2rem;
  font-size: 0.75rem;
}

.label {
}

.inputField {
  height: 0.8rem;
  border-radius: 0;
  border: none;
  background: #f3f3f3;
}

.inputSlider {
  flex-grow: 1;
  height: 1rem;
}
</style>
