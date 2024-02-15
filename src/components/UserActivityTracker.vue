<template>
  <div>
    <input v-model="inputValue" placeholder="Enter text here" @input="trackInput">
    <button @click="buttonClicked">Click Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    buttonClicked() {
      console.log("Button clicked with input:", this.inputValue);
      // Example tracking code (replace with actual Google Analytics tracking code)
      // this.$gtag.event('button_click', {
      //   event_category: 'User Actions',
      //   event_label: 'Click Me Button',
      //   value: this.inputValue
      // });
    },
    trackInput() {
      // Logic to track input (for demonstration purposes, actual tracking would require integration with analytics)
      console.log("Tracking input:", this.inputValue);
    }
  }
}
</script>
