<template>
    <div class="export" @click="exportSettings">Export</div>
</template>

<script>
import * as fxparser from 'fast-xml-parser'

export default {
  name: 'TheExportButton',
  data: () => ({
    builder:new fxparser.XMLBuilder({
      ignoreAttributes: false,
    })
  }),
  methods:{
    exportSettings() {
      const xml = this.builder.build(this.$store.getters.getActivePreset)
      const dataStr = 'data:text/xml;charset=utf-8,' + encodeURIComponent(xml)
      const downloadAnchorNode = document.createElement('a')
      downloadAnchorNode.setAttribute('href', dataStr)
      downloadAnchorNode.setAttribute('download', 'preset.xml')
      document.body.appendChild(downloadAnchorNode) // required for firefox
      downloadAnchorNode.click()
      downloadAnchorNode.remove()
    }
  },
}
</script>

<style scoped>

</style>
