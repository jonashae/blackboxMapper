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
import dummyData from '../js/dummyData.js'
import wav from '../js/wav.js'

export default {
  name: 'TheRootFolderSelector',

  mounted() {
    // this.sampleLib = dummyData
    document.getElementById('filepicker').addEventListener(
      'change',
      (event) => {
        this.sampleLib = []
        for (const file of event.target.files) {
          const fileName = file.name.split('.')[0]
          if (file.type.match('audio.wav') && (fileName.length > 0)) {


            let reader = new FileReader()
            let blob = file.slice(0, 44)

            reader.onload = function(e) {
              let buffer = e.target.result

              function getName(buf) {
                return String.fromCharCode.apply(null, new Int8Array(buf))
              }

              function getNumber(buf) {
                if(buf.byteLength === 4) {
                  return new DataView(buf).getUint32(0, true)
                } else if(buf.byteLength === 2) {
                  return new DataView(buf).getUint16(0, true)
                } else {
                  return new DataView(buf).getUint8(0, true)
                }
              }


              const ChunkID =  getName(buffer.slice(0, 4))
              const ChunkSize =  getNumber(buffer.slice(4, 8))
              const Format =  getName(buffer.slice(8, 12))
              const Subchunk1ID =  getName(buffer.slice(12, 16))
              const Subchung1Size =  getNumber(buffer.slice(16, 20))
              const AudioFormart =  getNumber(buffer.slice(20, 22))
              const NumChannels =  getNumber(buffer.slice(22, 24))
              const SampleRate =  getNumber(buffer.slice(24, 28))
              const ByteRate =  getNumber(buffer.slice(28, 32))
              const BlockAlign =  getNumber(buffer.slice(32, 34))
              const BitsPerSample =  getNumber(buffer.slice(34, 36))
              const Subchunk2ID =  getNumber(buffer.slice(36, 40))
              const Subchunk2Size =  getNumber(buffer.slice(40, 44))


              // console.log(ChunkID, ChunkSize, Format, Subchunk1ID, Subchung1Size, AudioFormart, NumChannels, SampleRate, ByteRate, BlockAlign, BitsPerSample, Subchunk2ID, Subchunk2Size)
              // console.log(file.webkitRelativePath +': ' +Subchunk2Size / BlockAlign)
              //
              //
              //
              // // Junk Header mit 32 Bit
              //
              // if(Subchunk1ID === 'JUNK'){
              //   console.log('JUNK Header gefunden Steinberg')
              // }
              //
              // if(Math.abs(ChunkSize - Subchunk2Size) > 100){
              //   console.log('ChunkSize und Subchunk2Size sind zu unterschiedlich')
              // }
              //




              // console.log(buffer, dv, blockId)

            }
            reader.readAsArrayBuffer(blob)
            //
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
