<template>
  <div>
  <button @click="incrementCount">Click Me</button>
  <p>You have clicked the button {{ count }} times.</p>
  </div>

  <div>
    <input v-model="searchQuery" placeholder="Search here..." @keyup.enter="submitSearch">
    <button @click="submitSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      searchQuery: '',
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

    submitSearch() {
      console.log("Search submitted: ", this.searchQuery);

      this.trackSearchQuery(this.searchQuery);

      this.searchQuery = '';
    },
    trackSearchQuery(query) {
      if (query.trim() !== '') {
        this.$gtag.event('search', {
          event_category: 'Search',
          event_label: query,
        });
      }
    }
  }
}
</script>
