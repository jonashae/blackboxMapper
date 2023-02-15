<template>
  <div v-for="(mod, index) in modsource">
    <h2>Mod: {{ index }}</h2>
    <div>
      <span class="label">Amount: </span>
      <span class="value">{{ mod["@_amount"] }}</span>
    </div>
    <div>
      <span class="label">Destination:</span>
      <span class="value">{{ mod["@_dest"] }}</span>
    </div>
    <div>
      <span class="label">Destination:</span>
      <span class="value">{{ mod["@_slot"] }}</span>
    </div>
    <div>
      <span class="label">Destination:</span>
      <span class="value">{{ mod["@_src"] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModPanel",
  props: {
    data: Object,
  },
  computed: {
    modsource() {
      //check if data is an array
      let temp = this.data;
      if (!Array.isArray(temp)) {
        //if it is, return the first element
        temp = [temp];
      }
      console.log(this.data.length);
      return temp;
    },
  },
};
</script>

<style scoped></style>
