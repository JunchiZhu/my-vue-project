<template>
  <div>
    <input v-model="inputValue" placeholder="Enter text here" @input="trackInput">
    <button @click="buttonClicked">Click Me</button>
  </div>

  <div>
  <button @click="incrementCount">Click Me</button>
  <p>You have clicked the button {{ count }} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      inputValue: ''
    }
  },
  methods: {
    incrementCount() {
      this.count++;
      // Send an event to Google Analytics
      this.$gtag.event('button_click', {
        event_category: 'Button Interactions',
        event_label: 'Click Me Button',
        value: this.count,
      });
      console.log(`Button clicked ${this.count} times`);
    },
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
