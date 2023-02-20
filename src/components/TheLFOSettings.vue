<template>
  <BaseFolder name="LFO">
    <BaseSelection
      :dropdown="{
        name: 'Waveform',
        options: [
          { name: 'Saw', value: 0 },
          { name: 'Reverse Saw', value: 1 },
          { name: 'Triangle', value: 2 },
          { name: 'Positive Triangle', value: 3 },
          { name: 'Sine', value: 4 },
          { name: 'Positive Sine', value: 5 },
          { name: 'Square', value: 6 },
          { name: 'Positive Square', value: 7 },
          { name: 'Random', value: 8 },
        ],
      }"
      v-model="para['@_lfowave']"
    />

    <BaseBoolean name="BeatSync" v-model="para['@_lfobeatsync']" />

    <BaseSlider
      v-if="!showBeatSync"
      :slider="{ name: 'Freq', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_lforate']"
    />

    <BaseSelection
      v-if="showBeatSync"
      :dropdown="{
        name: 'Bars',
        options: [
          { name: '8 Bars', value: 0 },
          { name: '4 Bars', value: 1 },
          { name: '1 Bar', value: 2 },
          { name: '1/2', value: 3 },
          { name: '1/2 T', value: 4 },
          { name: '1/4', value: 5 },
          { name: '1/4 T', value: 6 },
          { name: '1/8', value: 7 },
          { name: '1/8 T', value: 8 },
          { name: '1/16', value: 9 },
          { name: '1/16 T', value: 10 },
          { name: '1/32', value: 11 },
          { name: '1/32 T', value: 12 },
          { name: '1/64', value: 13 },
          { name: '1/64 T', value: 14 },
        ],
      }"
      v-model="para['@_lforatebeatsync']"
    />

    <BaseSlider
      :slider="{ name: 'Depth', min: 0, max: 100, step: 0.1 }"
      :domain="{ min: 0, max: 1000 }"
      v-model="para['@_lfoamount']"
    />

    <BaseBoolean name="Restart with Trigger" v-model="para['@_lfokeytrig']" />
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
      return this.para['@_lfobeatsync']
    },
  },
  beforeMount() {
    if(this.para['@_lfowave'] === undefined) this.para['@_lfowave'] = 0
    if(this.para['@_lfobeatsync'] === undefined) this.para['@_lfobeatsync'] = 0
    if(this.para['@_lforate'] === undefined) this.para['@_lforate'] = 0
    if(this.para['@_lforatebeatsync'] === undefined) this.para['@_lforatebeatsync'] = 0
    if(this.para['@_lfoamount'] === undefined) this.para['@_lfoamount'] = 0
    if(this.para['@_lfokeytrig'] === undefined) this.para['@_lfokeytrig'] = 0

    console.log(this.para)
  }
}
</script>

<style scoped></style>
