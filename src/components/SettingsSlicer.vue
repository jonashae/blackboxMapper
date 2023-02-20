<template>
  <div class="Section">
    <BaseFolder name="Slicer Settings">
      <BaseBoolean name="LoopMode" v-model="para['@_loopmodes']" />
      <BaseBoolean name="Play Thu" v-model="para['@_playthru']" />

      <BaseSlider
        :slider="{ name: 'Beat Count 0 -> Auto', min: 0, max: 512, step: 1 }"
        :domain="{ min: 0, max: 512 }"
        v-model="para['@_beatcount']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Quant Size',
          options: [
            { name: '2 bar,', value: 0 },
            { name: '1 bar', value: 1 },
            { name: '1/2', value: 2 },
            { name: '1/2 T', value: 3 },
            { name: '1/4', value: 4 },
            { name: '1/4T', value: 5 },
            { name: '1/8', value: 6 },
            { name: '1/8T', value: 7 },
            { name: '1/16', value: 8 },
            { name: '1/16T', value: 9 },
            { name: '1/32', value: 10 },
            { name: '1/32T', value: 11 },
            { name: '1/64', value: 12 },
            { name: 'None', value: 13 },
          ],
        }"
        v-model="para['@_slicerquantsize']"
      />

      <BaseBoolean name="Sync" v-model="para['@_slicersync']" />

      <BaseSlider
        :slider="{ name: 'Slice', min: 0, max: 512, step: 1 }"
        :domain="{ min: 0, max: 512 }"
        v-model="para['@_actslice']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Slice Seq',
          options: [
            { name: 'None,', value: 0 },
            { name: 'Forward', value: 1 },
            { name: 'Backwards', value: 2 },
            { name: 'Random', value: 3 },
            { name: 'Stagger', value: 4 },
          ],
        }"
        v-model="para['@_slicestepmode']"
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
  name: 'SlicerSettings',
  components: { BaseBoolean, BaseSelection, BaseFolder, BaseSlider },
  computed: {
    maxSampleLength() {
      return 1000
    },
    para() {
      return this.$store.getters.getActiveSampleSlot.params
    },
  },
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
