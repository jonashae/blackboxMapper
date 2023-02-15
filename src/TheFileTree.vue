<template>
  <div class="file">

    <div class="name">Filter the Sample List</div>
    <input type="text" id="filter" name="filter" v-model="activeFilter" />

    <div class="sampleList">
      <ASampleFile v-for="(file, index) in filteredSampleLib" :file="file" :key="index"/>


    </div>
  </div>
</template>

<script>
import wav from './js/wav.js'
import dummyData from './js/dummyData.js'
import ASampleFile from './ASampleFile.vue'

export default {
  name: 'TheFileTree',
  components: {ASampleFile},
  data() {
    return {
      sampleLib: [],
      activeFilter: '',
      audioPlayer: {
        activeFile: null,
        player: null,
      },
    }
  },
  computed: {
    filteredSampleLib() {
      return this.sampleLib.filter((sample) => {
        const path = sample.path.toLowerCase()
        const filter = this.activeFilter.toLowerCase()
        return path.includes(filter)
      })
    },
  },
  mounted() {
    this.sampleLib = dummyData
  }
}
</script>

<style scoped>
.sampleList {
  max-height: 80vh;
  overflow-y: scroll;
}


</style>
