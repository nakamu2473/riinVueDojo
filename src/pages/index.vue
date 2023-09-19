<script>
import MyBtn from '../components/MyBtn.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  data() {
    return {
      article: {
        1: {
          id: 1,
          title: "タイトルだよ〜",
          text: "本文だよ〜",
          atuhor: "書いた人だよ〜"
        },
        2: {
          id: 2,
          title: "タイトルだよ〜2",
          text: "本文だよ〜2",
          atuhor: "書いた人だよ〜2"
        },
        3: {
          id: 3,
          title: "タイトルだよ〜3",
          text: "本文だよ〜3",
          atuhor: "書いた人だよ〜3"
        },
      }
    }
  },
  components: {
    ArticleItem,
  },
}
</script>
<template>
    <div> home </div>

  {{ console.log(this.article) }}
    <div v-for="item in this.article">
      <ArticleItem :article="item" />
    </div>
</template>