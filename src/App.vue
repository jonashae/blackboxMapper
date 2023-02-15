<script setup>
import {useStore} from 'vuex'
import * as fxparser from 'fast-xml-parser'

import TheSampleField from './components/TheSampleField.vue'
import TheSettingsPanel from './components/TheSettingsPanel.vue'

import dummyText from './xmls/preset.xml'
import TheFileTree from './TheFileTree.vue'
import TheRootFolderSelector from './TheRootFolderSelector.vue'
import TheHeader from './TheHeader.vue'

const parser = new fxparser.XMLParser({
  ignoreAttributes: false,
})

const output = parser.parse(dummyText)
console.log(output)

const builder = new fxparser.XMLBuilder({
  ignoreAttributes: false,
})

let xmlDataStr = builder.build(output)
console.log(parseXml(xmlDataStr))

function parseXml(xmlStr) {
  return new window.DOMParser().parseFromString(xmlStr, 'text/xml')
}

// use store in setup
const store = useStore()
store.dispatch('setActivePreset', output)
</script>

<template>


  <div class="container">
  <TheHeader class="Header"/>
    <TheSampleField/>

    <!--    <div class="Settings">-->
    <!--      <TheFXSettings/>-->
    <!--    </div>-->

    <TheSettingsPanel/>

    <TheFileTree class="Comments"/>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 0.8fr 1fr 0.8fr;
  grid-template-rows: 4rem 0.1fr;
  gap: 1rem;
  grid-template-areas:
    "Header Header Header"
    "Comments SampleField Settings"
}

.Header {
  grid-area: Header;
}

.SelectMode {
  grid-area: SampleField;
  justify-content: flex-start;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  align-items: center;
}

.Settings {
  grid-area: Settings;
  justify-content: flex-start;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
}

.Comments {
  grid-area: Comments;
  justify-content: flex-start;
  display: flex;
  align-content: flex-end;
  flex-direction: column;
}



.export {
  right: 0;
  cursor: pointer;
}
</style>
