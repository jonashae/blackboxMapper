<template>
  <div class="TheMixSettings">
    <div class="Section">
      <h3>Mix Settings</h3>

      <div>
        <label for="mute"> Mute </label>
        <input
          type="checkbox"
          id="mute"
          name="delay"
          min="0"
          max="1000"
          v-model="mute"
        />
      </div>
      <label for="volume"
        >Volume
        <input
          id="volume"
          v-model="volume"
          max="100"
          min="0"
          name="preDelay"
          step="0.1"
          type="number"
        />
      </label>
      <input
        id="volume"
        v-model="volume"
        max="100"
        min="0"
        name="preDelay"
        step="0.1"
        type="range"
      />

      <label for="pan"
        >Pan
        <input
          id="pan"
          v-model="pan"
          max="100"
          min="0"
          name="preDelay"
          step="0.1"
          type="number"
        />
      </label>
      <input
        id="pan"
        v-model="pan"
        max="100"
        min="0"
        name="decay"
        step="0.1"
        type="range"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheMixSettings",
  data() {
    return {
      pan: 50,
      volume: 50,
      mute: 50,
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
