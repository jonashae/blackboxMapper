<template>
  <div class="DelaySettings">
    <div class="Section">
      <h3>Delay Settings</h3>

      <label for="feedback"
        >Feedback
        <input
          id="preDelay"
          v-model="feedback"
          max="100"
          min="0"
          name="feedback"
          step="0.1"
          type="number"
        />
      </label>

      <input
        id="feedback"
        v-model="feedback"
        max="100"
        min="0"
        name="feedback"
        step="0.1"
        type="range"
      />

      <div>
        <label for="pingpong">Ping Pong Mode</label>
        <input
          id="pingpong"
          v-model="pingpong"
          class="inline"
          type="checkbox"
        />
      </div>

      <div>
        <label for="beatdelay">Use Beatdelay</label>
        <input
          id="checkbox"
          v-model="beatdelay"
          class="inline"
          type="checkbox"
        />

        <label for="checkbox"> Beat Dealy Time</label>
        <select v-model="beatdelayTime">
          <option>1/64</option>
          <option>1/32</option>
          <option>1/16</option>
          <option>1/8T</option>
          <option>1/16D</option>
          <option>1/8</option>
          <option>1/4T</option>
          <option>1/8D</option>
          <option>1/4</option>
          <option>1/2T</option>
          <option>1/2</option>
          <option>1 bar</option>
        </select>
      </div>

      <label for="delayTime">Delay Time: {{ cutoff / 10 }}%</label>
      <input
        id="delayTime"
        v-model="delayTime"
        max="1000"
        min="0"
        name="delayTime"
        type="range"
      />

      <div>
        <label for="filter">Filter Mode</label>
        <input id="filer" v-model="filter" class="inline" type="checkbox" />
      </div>

      <label for="cutoff">Cutoff: {{ cutoff / 10 }}%</label>
      <input
        id="cutoff"
        v-model="cutoff"
        max="1000"
        min="0"
        name="cutoff"
        type="range"
      />

      <label for="width">Width: {{ width / 10 }}%</label>
      <input
        id="width"
        v-model="width"
        max="1000"
        min="0"
        name="width"
        type="range"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TheDelaySettings",
  data() {
    return {
      delayTime: 500,
      filter: true,
      pingpong: false,
      beatdelay: false,
      beatdelayTime: "1/8T",
      feedback: 500,
      width: 1000,
      cutoff: 0,
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
