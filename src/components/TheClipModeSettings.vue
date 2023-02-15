<template>
  <BaseFolder name="LFO">
    <BaseBoolean :init="true" name="Loop Mode" v-model="para['@_mute']" />

    <BaseSlider
      :slider="{ name: 'Beat Count 0 -> Auto', min: 0, max: 512, step: 1 }"
      :domain="{ min: 0, max: 512 }"
      v-model="para['@_panpos']"
    />

    <BaseSelection
      :dropdown="{
        name: 'Quant Size',
        options: [
          { name: '1/16,', value: 'martina' },
          { name: '1/8', value: 'martina' },
          { name: '1/2', value: 'martina' },
          { name: '1 bar', value: 'martina' },
          { name: '2 bar', value: 'martina' },
          { name: '4 bar', value: 'martina' },
          { name: '8 bar', value: 'martina' },
        ],
      }"
      v-model="para['@_mute']"
    />

    <BaseSelection
      :dropdown="{
        name: 'Sync',
        options: [
          { name: '1/16,', value: 'martina' },
          { name: '1/8', value: 'martina' },
          { name: '1/2', value: 'martina' },
          { name: '1 bar', value: 'martina' },
          { name: 'Slice', value: 'martina' },
        ],
      }"
      v-model="para['@_mute']"
    />

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
  name: 'TheClipModeSettings',
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
