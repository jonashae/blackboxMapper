<template>
  <div class="Section">






  </div>
</template>

<script>

import BaseSlider from './BaseSlider.vue'

export default {
  name: 'SampleSettings',
  components: {BaseSlider},
  computed: {
    para() {
      return this.$store.getters.getActiveSampleSlot.params
    },
  }
}
</script>

<style scoped>
.inputField {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
}

.label {
}

.inputSlider {
  flex-grow: 1;
}
</style>
