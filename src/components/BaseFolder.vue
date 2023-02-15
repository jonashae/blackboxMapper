<template>
  <div class="Folder" :class="{ isOpen: isOpen }">
    <div class="header" @click="toggleFolder()">{{ name }}</div>
    <div class="CloseArea">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseFolder',
  data() {
    return {
      isOpen: true,
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleFolder() {
      console.log('toggleFolder')
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.Folder {
  border: 1px solid #ccc;
  border-radius: 0px;
  margin: 0.5rem;
}

.CloseArea {
  max-height: 0px;
  overflow: hidden;
  transition: all 0.5s;
}

.isOpen .CloseArea {
  max-height: 500px;
  transition: all 250ms;
}

.header {
  background: #eeeeee;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0.1rem 0.5rem;
}
</style>
