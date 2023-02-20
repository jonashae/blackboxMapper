<template>
  <BaseFolder name="Clip Mode">
    <BaseBoolean name="Loop Mode" v-model="para['@_loopmodes']" />

    <BaseSlider
      :slider="{ name: 'Beat Count 0 -> Auto', min: 0, max: 512, step: 1 }"
      :domain="{ min: 0, max: 512 }"
      v-model="para['@_beatcount']"
    />

    <BaseSelection
      :dropdown="{
        name: 'Quant Size',
        options: [
          { name: '1/16,', value: 0 },
          { name: '1/8', value: 1 },
          { name: '1/2', value: 2 },
          { name: '1 bar', value: 3  },
          { name: '2 bar', value: 4 },
          { name: '4 bar', value: 5 },
          { name: '8 bar', value: 6 },
        ],
      }"
      v-model="para['@_quantsize']"
    />

    <BaseSelection
      :dropdown="{
        name: 'Sync',
        options: [
          { name: 'None', value: 0 },
          { name: '1/16', value: 1 },
          { name: '1/8', value: 2 },
          { name: '1/2', value: 3 },
          { name: '1 bar', value: 4 },
          { name: 'Slice', value: 5 },
        ],
      }"
      v-model="para['@_synctype']"
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
