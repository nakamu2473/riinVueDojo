<script>
import SharedCounter from '../components/SharedCounter.vue'
export default {
  data() {
    return {
        count: 0
    }
  },
  components: {
    SharedCounter
  },
  methods:{
    btnIncrement () {
      return this.count++
    }
  }
}
</script>
<template>
    <div> home </div>
    <SharedCounter  :count="this.count" />
    <button @click="btnIncrement">←増える</button>
    <SharedCounter  :count="this.count" />
    <button @click="btnIncrement">←増える</button>
    <SharedCounter  :count="this.count" />
    <button @click="btnIncrement">←増える</button>
</template>