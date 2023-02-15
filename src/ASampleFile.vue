<template>
  <div>
        <div
          class="sample"
          draggable="true"
          @dragstart="startDrag($event, file)"
          @click="previewAudioFile(file)"
        >

          <div class="name">{{ file.name }}</div>
          <div class="path">Path: {{ file.path }}</div>
          <div class="loadingBar"></div>
        </div>

      </div>
</template>

<script>
export default {
  name: 'ASampleFile',
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  methods: {
    previewAudioFile(file) {
      if (this.audioPlayer.activeFile !== null) {
        this.audioPlayer.player.pause()
        this.audioPlayer.activeFile = null
      } else {
        const reader = new FileReader()
        reader.onload = () => {
          this.audioPlayer.player = new Audio(reader.result)
          this.audioPlayer.player.play()
        }
        reader.readAsDataURL(file.file)
        this.audioPlayer.activeFile = file.path
      }
    },
    startDrag(ev, item) {
      ev.dataTransfer.setData('application/sample', JSON.stringify(item))
    },
  },
}
</script>

<style scoped>
.sample {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.5rem;
}

.name {
  font-size: 1rem;
  color: #333;
}

.path {
  font-size: 0.8rem;
  color: #666;
}
</style>
