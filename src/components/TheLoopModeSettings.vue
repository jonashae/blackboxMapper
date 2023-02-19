<template>
  <BaseFolder name="loopMode">
    <BaseSelection
      :dropdown="{
        name: 'Loop Mode',
        options: [
          { name: 'None', value: 'martina' },
          { name: 'Forward', value: 'martina' },
          { name: 'Bi Direct', value: 'martina' },
        ],
      }"
      v-model="para['@_mute']"
    />

    <BaseSlider
      :slider="{ name: 'Loop Fade', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseBoolean :init="true" name="Reverse" v-model="para['@_mute']" />


    <BaseSlider
      :slider="{ name: 'Start', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseSlider
      :slider="{ name: 'End', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseSlider
      :slider="{ name: 'Loop Start', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseSlider
      :slider="{ name: 'Loop End', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />
  </BaseFolder>
</template>

<script>
import BaseFolder from './BaseFolder.vue'
import BaseSlider from './BaseSlider.vue'
import BaseSelection from './BaseSelection.vue'
import BaseBoolean from './BaseBoolean.vue'

export default {
  name: 'TheLoopModeSettings',
  components: { BaseBoolean, BaseSelection, BaseSlider, BaseFolder },
  computed: {
    para() {
      return this.$store.getters.getActiveSampleSlot.params
    },
    showBeatSync() {
      return this.para['@_mute']
    },
  },
}
</script>

<style scoped></style>
