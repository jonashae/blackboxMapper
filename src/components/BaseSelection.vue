<template>
  <div class="baseSelection">
    <div class="label">{{ dropdown.name }}</div>

    <select class="inputField" v-model="value">
      <option
        v-for="element in dropdown.options"
        :value="element.value"
        :key="element.value"
      >
        {{ element.name }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: 'BaseSelection',
  props: {
    slider: {},
    domain: {},
    dropdown: {},
  },
  emits: ['update:modelValue'],
  computed:{
    value: {
      get() {
        return this.dropdown.options
      },
      set(value) {
        console.log(value)
        this.$emit('update:modelValue', value)
      },
    },
  }
}
</script>
<style scoped>
.baseSelection {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding: 0.2rem;
  font-size: 0.75rem;
}

.label {
}

.inputField {
  width: 4rem;
  height: 1.2rem;
  font-size: 0.75rem;
  border-radius: 0;
  border: none;
  background: #f3f3f3;
}

.inputSlider {
  flex-grow: 1;
  height: 1rem;
}
</style>
