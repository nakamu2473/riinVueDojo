<script>
export default {
  props: {
    article: {
      type: Object
    },
  },
  methods:{
  }
}
</script>
<template>
    <h1>タイトル：{{ this.article.title }}</h1>
    <div>本文：{{ this.article.text }}</div>
    <div> <p v-html=this.article.text /></div>
        <slot></slot>
    <div>書いた人：{{ this.article.atuhor }}</div>
    <br>
</template>