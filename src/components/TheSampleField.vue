<template>
  <div class="SelectMode">
    <div class="SampleField">
      <div
        class="Slot"
        @click="setActiveSamplePad(index)"
        :class="{ activeSlot: isActive(index), hasSample: sampleName(index) !== '' }"
        v-for="index in 16"
        @drop="drop_handler($event, index)"
        @dragover="dragover_handler"
        @dragover.prevent
        @dragenter.prevent
      >
        {{sampleName(index)}}
        <div class="Field" />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'TheSampleField',
  methods: {
    drop_handler(ev, index) {
      const sample = JSON.parse(ev.dataTransfer.getData('application/sample'))
      console.log(sample)
      this.$store.dispatch('selectSamplePad', index - 1)

      const temp = this.$store.getters.getActiveSampleSlot

      const root = sample.path.split('/')[0] + '/'
      let cleanPath = sample.path.replace(root, '')
      cleanPath = cleanPath.replaceAll('/', '\\')

      temp['@_filename'] = cleanPath
      temp.params['@_loopend'] = sample.sampleCount
      temp.params['@_samlen'] = sample.sampleCount
    },
    dragover_handler(ev) {
      // console.log( ev.dataTransfer.types[0])
    },
    isMode(mode) {
      return this.$store.getters.getMode === mode
    },
    setMode(mode) {
      this.$store.dispatch('setMode', mode)
    },
    setActiveSamplePad(index) {
      this.$store.dispatch('selectSamplePad', index - 1)
    },
    sampleName(index) {
      const indexOne = index - 1
      const cells = this.$store.getters.getCells
      const row = Math.floor(indexOne / 4)
      const colum = indexOne % 4
      const sampleCells = cells.find((cell) => {
        return cell['@_column'] == colum && cell['@_row'] == row
      })

      let fileName = sampleCells['@_filename']

      if(fileName !== 'undefined' && fileName !== undefined) {

        const temp = fileName.split('\\').pop()
        return temp.split('.')[0]

      }
      return fileName
    },
    isActive(index) {
      return this.$store.state.selectedSamplePad === index - 1
    },
  },
}
</script>

<style scoped>
.Mode {
  display: flex;
  justify-content: space-around;
  line-height: 2rem;
}

.Mode span {
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid #ffffff;
  flex-grow: 1;
  text-align: center;
}

.SampleField {
  width: 16rem;
  height: 16rem;
  display: flex;
  flex-wrap: wrap;
}

.Slot {
  width: 25%;
  height: 25%;
  background: #eeeeee;
  padding: 2px;
  border: 1px solid #ffffff;
  font-size: 0.75rem;
}

.Slot:hover {
  background: #63d5ff;
}

.activeSlot {
  background: #63d5ff;
}

.hasSample {
  background: #63b9ff;
}
</style>
