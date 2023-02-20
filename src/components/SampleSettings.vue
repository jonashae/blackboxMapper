<template>
  <div class="Section">
    <BaseFolder name="Sample Settings">
      <BaseSelection
        :dropdown="{
          name: 'Loop Mode',
          options: [
            { name: 'None', value: 0 },
            { name: 'Forward', value: 1 },
            { name: 'Bidirect', value: 2 },
          ],
        }"
        v-model="para['@_loopmode']"
      />
      <BaseSlider
        :slider="{ name: 'Loop Fade', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 10000 }"
        v-model="para['@_loopfadeamt']"
      />

      <BaseBoolean name="Reverse" v-model="para['@_reverse']" />

      <BaseSlider
        :slider="{ name: 'Start', min: 0, max: this.maxSampleLength, step: 1 }"
        :domain="{ min: 0, max: this.maxSampleLength }"
        v-model="para['@_samstart']"
      />

      <BaseSlider
        :slider="{ name: 'End', min: 0, max: this.maxSampleLength, step: 1 }"
        :domain="{ min: 0, max: this.maxSampleLength }"
        v-model="para['@_samlen']"
      />

      <BaseSlider
        :slider="{ name: 'Loop Start', min: 0, max: this.maxSampleLength, step: 1 }"
        :domain="{ min: 0, max: this.maxSampleLength }"
        v-model="para['@_loopstart']"
      />

      <BaseSlider
        :slider="{ name: 'Loop End', min: 0, max: this.maxSampleLength, step: 1 }"
        :domain="{ min: 0, max: this.maxSampleLength }"
        v-model="para['@_loopend']"
      />
    </BaseFolder>


  </div>
</template>

<script>

import BaseSlider from './BaseSlider.vue'
import BaseFolder from './BaseFolder.vue'
import BaseSelection from './BaseSelection.vue'
import BaseBoolean from './BaseBoolean.vue'

export default {
  name: 'SampleSettings',
  components: {BaseBoolean, BaseSelection, BaseFolder, BaseSlider},
  computed: {
    maxSampleLength() {
      return 1000
    },
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
