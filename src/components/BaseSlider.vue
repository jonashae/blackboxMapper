<template>
  <div class="baseSlider">
    <div class="label">{{ slider.name }}</div>

    <input
      class="inputNumber"
      type="number"
      :min="slider.min"
      :max="slider.max"
      :step="slider.step"
      v-model="value"
    />

    <input
      class="inputSlider styled-slider slider-progress"
      :style="calculateSliderStyle"
      type="range"
      :min="slider.min"
      :max="slider.max"
      :step="slider.step"
      v-model="value"
    />
  </div>
</template>
<script>
export default {
  name: 'BaseSlider',
  props: {
    slider: {},
    domain: {},
    modelValue: {},
  },
  emits: ['update:modelValue'],
  computed: {
    calculateSliderStyle() {
      const in_min = this.domain.min
      const in_max = this.domain.max
      const out_min = 0
      const out_max = 100

      const percent =
        ((this.modelValue - in_min) * (out_max - out_min)) / (in_max - in_min) +
        out_min
      return {
        background:
          'linear-gradient(90deg, #007CF8 0 ' +
          percent +
          '%, transparent ' +
          percent +
          '% 100%)',
      }
    },
    value: {
      get() {
        const in_min = this.domain.min
        const in_max = this.domain.max
        const out_min = this.slider.min
        const out_max = this.slider.max
        const output =
          ((this.modelValue - in_min) * (out_max - out_min)) /
            (in_max - in_min) +
          out_min
        return   Math.floor(output)

      },
      set(value) {
        const in_min = this.slider.min
        const in_max = this.slider.max
        const out_min = this.domain.min
        const out_max = this.domain.max
        let output =
          ((value - in_min) * (out_max - out_min)) / (in_max - in_min) +
          out_min
        output = Math.floor(output)
        this.$emit('update:modelValue', output)
      },
    },
  },
}
</script>
<style scoped>
.baseSlider {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.2rem;
  font-size: 0.75rem;
}

.label {
  flex-basis: 100%;
}

.inputNumber {
  width: 4rem;
  height: 1.2rem;
  background: #f3f3f3;
  border: hidden;
  text-align: end;
}

.inputSlider {
  flex-grow: 1;
  height: 1rem;
}

/*generated with Input range slider CSS style generator (version 20211225)
https://toughengineer.github.io/demo/slider-styler*/
input[type="range"].styled-slider {
  height: 1rem;
  -webkit-appearance: none;
}

/*webkit*/
input[type="range"].styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1em;
  height: 100%;
  border-radius: 0;
  background: #007cf8;
  border: none;
  box-shadow: none;
}

input[type="range"].styled-slider::-webkit-slider-runnable-track {
  height: 100%;
  border: none;
  box-shadow: none;
}
</style>
