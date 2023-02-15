<template>
  <div class="TheReverbSettings">
    <div class="Section">
      <h3>Reverb Settings</h3>

      <label for="preDelay"
        >Pre Delay
        <input
          id="preDelay"
          v-model="preDelay"
          max="100"
          min="0"
          name="preDelay"
          step="0.1"
          type="number"
        />
      </label>

      <input
        id="preDelay"
        v-model="preDelay"
        max="100"
        min="0"
        name="preDelay"
        step="0.1"
        type="range"
      />

      <label for="decay"
        >Decay
        <input
          id="decay"
          v-model="decay"
          max="100"
          min="0"
          name="preDelay"
          step="0.1"
          type="number"
        />
      </label>
      <input
        id="decay"
        v-model="decay"
        max="100"
        min="0"
        name="decay"
        step="0.1"
        type="range"
      />

      <label for="damping"
        >Damping:
        <input
          id="preDelay"
          v-model="damping"
          max="100"
          min="0"
          name="damping"
          step="0.1"
          type="number"
        />
      </label>
      <input
        id="damping"
        v-model="damping"
        max="100"
        min="0"
        name="damping"
        step="0.1"
        type="range"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheReverbSettings",
  data() {
    return {
      decay: 50,
      preDelay: 50,
      damping: 50,
    };
  },
};
</script>

<style scoped>
.Section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.inline {
  display: inline-block;
}
</style>
