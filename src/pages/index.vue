<script>
import myBtnEvent from '../components/myBtnEvent.vue'
export default {
  data() {
    return {
        count: 0
    }
  },
  components: {
    myBtnEvent
  },
  methods:{
    myEvent (mycount) {
      console.log(mycount)
      return this.count  = mycount
    }
  }
}
</script>
<template>
    <div> home </div>
    {{ this.count   }}<myBtnEvent :count=this.count @myEvent="myEvent"/>
    {{ console.log(this.count) }}
</template>