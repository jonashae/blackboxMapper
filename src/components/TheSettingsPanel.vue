<template>
  <div>
    <h3>Pad Settings</h3>
    <div class="SampleName">{{ sampleName }}</div>
    <div class="Settings">
      <!-- Allgemeine Setting -->
      <div class="firstColum">
        <BaseFolder name="Main">
          <BaseSelection
            :dropdown="{
              name: 'Cell Mode',
              options: [
                { name: 'Sample', value: 0 },
                { name: 'Clip', value: 1 },
                { name: 'Slicer', value: 2 },
                { name: 'Granular', value: 3 },
              ],
            }"
            v-model="para['@_cellmode']"
          />
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
                { name: 'Stereo 1', value: 0 },
                { name: 'Stereo 2', value: 1 },
                { name: 'Stereo 3', value: 2 },
                { name: 'Mono 1L', value: 3 },
                { name: 'Mono 1R', value: 4 },
                { name: 'Mono 2L', value: 5 },
                { name: 'Mono 2R', value: 6 },
                { name: 'Mono 3L', value: 7 },
                { name: 'Mono 3R', value: 8 },
              ],
            }"
            v-model="para['@_outputbus']"
          />
          <BaseSelection
            :dropdown="{
              name: 'Quality',
              options: [
                { name: 'Normal', value: 0 },
                { name: 'High Q', value: 1 },
              ],
            }"
            v-model="para['@_interpqual']"
          />
        </BaseFolder>

        <BaseFolder name="Sound Adjustment">
          <BaseSlider
            :slider="{ name: 'Pitch', min: -12, max: 12, step: 0.1 }"
            :domain="{ min: -24000, max: 24000 }"
            v-model="para['@_pitch']"
          />

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

        <BaseFolder name="TriggerSettings">
          <BaseSelection
            :dropdown="{
              name: 'Trigger Mode',
              options: [
                { name: 'Trigger', value: 0 },
                { name: 'Gate', value: 1 },
                { name: 'Toggle', value: 2 },
              ],
            }"
            v-model="para['@_samtrigtype']"
          />

          <BaseSelection
            :dropdown="{
              name: 'Poly Mode',
              options: [
                { name: 'Mono', value: 0 },
                { name: 'Poly 2', value: 1 },
                { name: 'Poly 4', value: 2 },
                { name: 'Poly 6', value: 3 },
                { name: 'Poly 8', value: 4 },
                { name: 'Poly X', value: 5 },
              ],
            }"
            v-model="para['@_polymode']"
          />

          <BaseSelection
            :dropdown="{
              name: 'Exclusion Group',
              options: [
                { name: 'Exel X', value: 0 },
                { name: 'Exel A', value: 1 },
                { name: 'Exel B', value: 2 },
                { name: 'Exel C', value: 3 },
                { name: 'Exel D', value: 4 },
              ],
            }"
            v-model="para['@_chokegrp']"
          />
        </BaseFolder>

        <TheLFOSettings />
      </div>

      <div class="SecondColum">
        <!--      <SampleSettings />-->
        <!--        <TheClipModeSettings />-->

        <SlicerSettings />
      </div>
    </div>
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
import TheClipModeSettings from './TheClipModeSettings.vue'
import SlicerSettings from './SettingsSlicer.vue'

export default {
  name: 'TheSettingsPanel',
  components: {
    SlicerSettings,
    TheClipModeSettings,
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

<style scoped>
.Settings {
  display: flex;
  flex-direction: row;
}
</style>
