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
    <div>本文： <slot></slot></div>
       
    <div>書いた人：{{ this.article.atuhor }}</div>
    <br>
</template>