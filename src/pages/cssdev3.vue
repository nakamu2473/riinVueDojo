<script>
import breakLineText from '../components/breakLineText.vue'
import ArticleItem from '../components/ArticleItem.vue'

export default {
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
<template>
  <p>CSSどーじょー3</p>

  <div class="bg_img">
    <div class="bg_white"></div>
    <div class="bg_none"></div>

    <div class="bg_white_600">
      <table border="1">
        <tr>
          <td>七里山超えてパンフレット</td>
          <td>ステッカーセット</td>
          <td>弥七の巾着</td>
          <td>古民家マユリカ　古民家ライター　ピンク</td>
        </tr>
        <tr>
          <td>古民家マユリカ　古民家ライター　オレンジ</td>
          <td>古民家マユリカ　古民家ライター　みどり</td>
          <td>古民家マユリカ　古民家ライター　あお</td>
          <td>古民家マユリカ　古民家ライター　むらさき</td>
        </tr>
        <tr>
          <td>古民家マユリカ　アクリルキーホルダー</td>
          <td>古民家マユリカ　懐かしのステッカー</td>
          <td>古民家マユリカ　ハンドタオル</td>
        </tr>
      </table>
    </div>
  </div>

</template>

<style>
.bg_img {
  background-image: url("@/pic/mayurikasankaku.png");
  
}
.bg_white {
  background-color: white;
  height: 100px;
}
.bg_none {
  background-color: none;
  height: 500px;
}
.bg_white_600 {
  background-color: white;
  height: 600px;
}

</style>