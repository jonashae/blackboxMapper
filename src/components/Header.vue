<template>
  <div class="TheHeader">
    <TheRootFolderSelector/>
    <TheExportButton/>
  </div>
</template>

<script>
import TheRootFolderSelector from './TheRootFolderSelector.vue'
import TheExportButton from './TheExportButton.vue'

export default {
  name: 'TheHeader',
  components: {TheExportButton, TheRootFolderSelector},

}
</script>

<style scoped>
.TheHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  background-color: #333;
  color: #fff;
}
</style>
