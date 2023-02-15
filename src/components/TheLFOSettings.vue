<template>
  <BaseFolder name="LFO">
    <BaseSelection
      :dropdown="{
        name: 'Waveform',
        options: [
          { name: 'Saw', value: 'martina' },
          { name: 'Reverse Saw', value: 'martina' },
          { name: 'Triangle', value: 'martina' },
          { name: 'Positive Triangle', value: 'martina' },
          { name: 'Sine', value: 'martina' },
          { name: 'Positive Sine', value: 'martina' },
          { name: 'Square', value: 'martina' },
          { name: 'Positive Square', value: 'martina' },
          { name: 'Random', value: 'martina' },
        ],
      }"
      v-model="para['@_mute']"
    />

    <BaseBoolean :init="true" name="BeatSync" v-model="para['@_mute']" />

    <BaseSlider
      v-if="!showBeatSync"
      :slider="{ name: 'Freq', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseSelection
      v-if="showBeatSync"
      :dropdown="{
        name: 'Bars',
        options: [
          { name: '8', value: 'martina' },
          { name: '4', value: 'martina' },
          { name: '1', value: 'martina' },
          { name: '1/2', value: 'martina' },
          { name: '1/2 T', value: 'martina' },
          { name: '1/4', value: 'martina' },
          { name: '1/4 T', value: 'martina' },
          { name: '1/8', value: 'martina' },
          { name: '1/8 T', value: 'martina' },
          { name: '1/16', value: 'martina' },
          { name: '1/16 T', value: 'martina' },
          { name: '1/32', value: 'martina' },
          { name: '1/32 T', value: 'martina' },
          { name: '1/64', value: 'martina' },
          { name: '1/64 T', value: 'martina' },
        ],
      }"
      v-model="para['@_mute']"
    />

    <BaseSlider
      :slider="{ name: 'Depth', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_panpos']"
    />

    <BaseBoolean :init="true" name="Trigger" v-model="para['@_mute']" />
  </BaseFolder>
</template>

<script>
import BaseFolder from './BaseFolder.vue'
import BaseSlider from './BaseSlider.vue'
import BaseSelection from './BaseSelection.vue'
import BaseBoolean from './BaseBoolean.vue'

export default {
  name: 'TheLFOSettings',
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
