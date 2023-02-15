<template>
  <div class="Settings">
    <h3>Pad Settings</h3>
    <div class="SampleName">{{ sampleName }}</div>



    <TheLoopModeSettings/>
    <TheLFOSettings/>



    <BaseFolder name="Main Routing">
      <BaseSlider
        :slider="{ name: 'Gain', min: -96, max: 12, step: 0.1 }"
        :domain="{ min: -96000, max: 12000 }"
        v-model="para['@_gaindb']"
      />

      <BaseSlider
        :slider="{ name: 'Pan', min: -100, max: 100, step: 0.1 }"
        :domain="{ min: -1000, max: 1000 }"
        v-model="para['@_panpos']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Output',
          options: [
            { name: 'Stereo 1', value: 'martina' },
            { name: 'Stereo 2', value: 'Jonas' },
            { name: 'Stereo 3', value: 'Jonas' },
            { name: 'Mono 1L', value: 'Jonas' },
            { name: 'Mono 1R', value: 'Jonas' },
            { name: 'Mono 2L', value: 'Jonas' },
            { name: 'Mono 2R', value: 'Jonas' },
            { name: 'Mono 3L', value: 'Jonas' },
            { name: 'Mono 3R', value: 'Jonas' },
          ],
        }"
        v-model="para['@_mute']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Quality',
          options: [
            { name: 'Normal', value: 'martina' },
            { name: 'High Q', value: 'Jonas' },
          ],
        }"
        v-model="para['@_mute']"
      />
    </BaseFolder>

    <BaseFolder name="TriggerSettings">
      <BaseSelection
        :dropdown="{
          name: 'Trigger Mode',
          options: [
            { name: 'Trigger', value: 'martina' },
            { name: 'Gate', value: 'Jonas' },
            { name: 'Toggle', value: 'Jonas' },
          ],
        }"
        v-model="para['@_mute']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Poly Mode',
          options: [
            { name: 'Mono', value: 'martina' },
            { name: 'Poly 2', value: 'Jonas' },
            { name: 'Poly 4', value: 'Jonas' },
            { name: 'Poly 6', value: 'Jonas' },
            { name: 'Poly 8', value: 'Jonas' },
            { name: 'Poly X', value: 'Jonas' },
          ],
        }"
        v-model="para['@_mute']"
      />

      <BaseSelection
        :dropdown="{
          name: 'Exclusion Group',
          options: [
            { name: 'Exel X', value: 'martina' },
            { name: 'Exel A', value: 'martina' },
            { name: 'Exel B', value: 'martina' },
            { name: 'Exel C', value: 'martina' },
            { name: 'Exel D', value: 'martina' },
          ],
        }"
        v-model="para['@_mute']"
      />


    </BaseFolder>

    <BaseFolder name="Sound Adjustment">
      <BaseSlider
        :slider="{ name: 'Pitch', min: -12, max: 12, step: 0.1 }"
        :domain="{ min: -24000, max: 24000 }"
        v-model="para['@_pitch']"
      />

      <BaseTextField init="C4" name="Root Note" />
      <BaseSlider
        :slider="{ name: 'Filter', min: -100, max: 100, step: 0.1 }"
        :domain="{ min: -1000, max: 1000 }"
        v-model="para['@_dualfilcutoff']"
      />

      <BaseSlider
        :slider="{ name: 'Res', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_res']"
      />
    </BaseFolder>

    <BaseFolder name="FX Routing">
      <BaseSlider
        :slider="{ name: 'Delay', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_fx1send']"
      />

      <BaseSlider
        :slider="{ name: 'Reverb', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_fx2send']"
      />
    </BaseFolder>

    <BaseFolder name="ADSR">
      <BaseSlider
        :slider="{ name: 'Attack', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_envattack']"
      />

      <BaseSlider
        :slider="{ name: 'Sustain', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_envsus']"
      />

      <BaseSlider
        :slider="{ name: 'Decay', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_envdecay']"
      />

      <BaseSlider
        :slider="{ name: 'Release', min: 0, max: 100, step: 0.1 }"
        :domain="{ min: 0, max: 1000 }"
        v-model="para['@_envrel']"
      />
    </BaseFolder>

    <SampleSettings />
  </div>
</template>

<script>
import TheModPanel from './TheModPanel.vue'
import SampleSettings from './SampleSettings.vue'
import BaseFolder from './BaseFolder.vue'
import BaseSlider from './BaseSlider.vue'
import BaseSelection from './BaseSelection.vue'
import TheLFOSettings from './TheLFOSettings.vue'
import TheLoopModeSettings from './TheLoopModeSettings.vue'
import BaseTextField from './BaseTextField.vue'

export default {
  name: 'TheSettingsPanel',
  components: {
    BaseTextField,
    TheLoopModeSettings,
    TheLFOSettings,
    BaseSelection,
    BaseSlider,
    BaseFolder,
    SampleSettings,
    TheModPanel,
  },
  computed: {
    para() {
      return this.$store.getters.getActiveSampleSlot.params
    },

    activePreset() {
      const SamplePads = this.$store.getters.getActiveSampleSlot
      console.log(SamplePads)
      return SamplePads
    },
    modsource() {
      return this.activePreset['modsource']
    },
    sampleName() {
      return this.$store.getters.getActiveSampleSlot['@_filename']
    },
  },
}
</script>

<style scoped></style>
