<template>
  <div class="RootFolder">
    <div class="name">Root dir of the Black Box SD Card</div>
    <input
      type="file"
      id="filepicker"
      name="fileList"
      webkitdirectory
      multiple
    />
</div>
</template>

<script>
import dummyData from './js/dummyData.js'
import wav from './js/wav.js'

export default {
  name: 'TheRootFolderSelector',

  mounted() {
    this.sampleLib = dummyData
    document.getElementById('filepicker').addEventListener(
      'change',
      (event) => {
        this.sampleLib = []
        for (const file of event.target.files) {
          const fileName = file.name.split('.')[0]
          if (file.type.match('audio.wav') && (fileName.length > 0)) {
            const waveFile = new wav(file)
            const tummy = this.sampleLib
            waveFile.onloadend = function () {
              const sampleCount = this.dataLength / this.blockAlign
              if (sampleCount < 0 || sampleCount === Infinity) {
                console.warn(
                  'Cant read ' + fileName + ' because: ' + this.error
                )
              } else {
                tummy.push({
                  name: fileName,
                  path: file.webkitRelativePath,
                  sampleCount: sampleCount,
                  file: file,
                })
              }
            }
          }
        }
      },
      false
    )
  },
}
</script>

<style scoped>
.RootFolder{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;
  color: #fff;
  font-size: 0.75rem;
}
</style>
