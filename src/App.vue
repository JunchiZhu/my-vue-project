<template>
  <div id="app">
    <UserActivityTracker/>
  </div>
</template>

<script>
import UserActivityTracker from './components/UserActivityTracker'

export default {
  name: 'App',
  components: {
    UserActivityTracker
  }
}
</script>