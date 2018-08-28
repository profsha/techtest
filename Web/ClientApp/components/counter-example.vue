<template>
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a Vue.js component & Vuex</p>

    <p>
      Current count (Vuex): <strong>{{ currentCount }}</strong>
    </p>
    <p>
      Auto count: <strong>{{ autoCount }}</strong>
    </p>

    <kendo-window :title="'Window title'" v-on:open="onOpen">Content</kendo-window>

    <button @click="incrementCounter()">Increment</button>
    <button @click="resetCounter()">Reset</button>

    <kendo-calendar :value="new Date()"></kendo-calendar>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
  data() {
  return {
  autoCount: 0,
  }
  },

  computed: {
  ...mapState({
  currentCount: state => state.test.test1.counter
  })
  },

  methods: {
  ...mapActions(['setCounter']),

  incrementCounter: function() {
  var counter = this.currentCount + 1;
  this.setCounter({counter: counter});
  },
  resetCounter: function() {
  this.setCounter({counter: 0});
  this.autoCount = 0;
  },
  onOpen (e) {
            console.log('Window is about to be opened.');
        }

  },

  created() {
//   setInterval(() => {
//   this.autoCount += 1
//   }, 1000)
  }
  }
</script>

<style>
</style>
