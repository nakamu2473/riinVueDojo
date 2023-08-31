<script> 
export default {

  props: {
    txt: {
      type: String,
      default: "Hi"
    },
    theme: {
      type: String,
    }
  },
  data() {
    let btnStyle = {}
    if(this.theme ==="primary"){
      btnStyle = {
        backgroundColor: "green",
        fontWeight: "bold",
      }
    }else if(this.theme ==="danger"){
      console.log(this.theme)
      btnStyle = {
        backgroundColor: "red",
        fontWeight: "bold",
      }
    }
    return {
      btnStyle: btnStyle
    }
  },
  methods: {
    // getStyle() {
    // if(this.theme ==="primary"){
    //   return {
    //     backgroundColor: "green",
    //     fontWeight: "bold",
    //   }
    // }else if(this.theme ==="danger"){
    //   return {
    //     backgroundColor: "red",
    //     fontWeight: "bold",
    //   }
    // }else {
    //   return {}
    // }
    // }
  }
}
</script>

<template>
  <button :style=this.btnStyle>{{txt}}</button>
</template>

<style>
</style>