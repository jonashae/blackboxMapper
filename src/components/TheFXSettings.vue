<template>
  <div class="TheFXSettings">
    <h2>Pad Settings</h2>

    <div class="Section">
      <label for="delay">Delay: {{ delay / 10 }}%</label>
      <input
        type="range"
        id="delay"
        name="delay"
        min="0"
        max="1000"
        v-model="delay"
      />

      <label for="reverb">Reverb: {{ reverb / 10 }}%</label>
      <input
        type="range"
        id="reverb"
        name="reverb"
        min="0"
        max="1000"
        v-model="reverb"
      />

      <TheMixSettings />
    </div>
    <h2>Global FX</h2>
    <TheDelaySettings />
    <TheReverbSettings />
  </div>
</template>

<script>
import TheDelaySettings from "./TheDelaySettings.vue";
import TheReverbSettings from "./TheReverbSettings.vue";
import TheMixSettings from "./TheMixSettings.vue";

export default {
  name: "TheFXSettings",
  components: { TheMixSettings, TheReverbSettings, TheDelaySettings },
  data() {
    return {
      delay: 0,
      reverb: 0,
    };
  },
};
</script>

<style scoped>
.Section {
  display: flex;
  flex-direction: column;
}
</style>
