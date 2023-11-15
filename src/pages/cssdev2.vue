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
  <p>CSSどーじょー2</p>

  <!-- <div style="width:800px; border: solid 1px black;position: relative">
    <div style="width:800px;height: 200px; background-color: rgb(79, 85, 86);"></div>
    <div style="display:flex;">
      <div style="width:100px;height:100px; border: solid 1px black;position: absolute;top: 150px;left: 15px;"></div>
      <div style="width:100px;height:100px; margin-top: 60px;">
        <div>リンTSV</div>
        <div>@fruitriin@misskey.systems</div>
        <div style="width:1000px;">
          <div>Administrator</div>
          <div>チョットデキル</div>
        </div>
      </div>
    </div>
    <div style="margin-left:100px;">モデレーションノートを追加する</div>
    <div style="margin-left:100px;">Soft Skillsを読むのだポッター</div>
    <hr>
    <div style="display:flex; justify-content: center; height: 100px; align-items:center;">
      <div style="">登録日</div>
      <div style="padding-left: 20px;">2023/2/18 23:30:55(9ヶ月前)</div>
    </div>
    <hr>
    <div style="display:flex; justify-content: center; height: 100px; align-items:center;">
      <div>
        <div style="margin-left:50px;">12,307</div>
        <div style="margin-left:50px;">ノート</div>
      </div>
      <div>
        <div style="margin-left:50px;">45</div>
        <div style="margin-left:50px;">フォロー</div>
      </div>
      <div>
        <div style="margin-left:50px;">273</div>
        <div style="margin-left:50px;">フォロワー</div>
      </div>
    </div>
  </div> -->
  <div>
    <table border="1" width="300" height="300">
      <tr style="position:sticky; top: 0; background-color:white;">
        <td>りんご</td>
        <td>ねこ</td>
        <td>いぬ</td>
        <td>さくらんぼ</td>
        <td>くるま</td>
        <td>くつ</td>
        <td>ひまわり</td>
        <td>みかん</td>
        <td>すみれ</td>
        <td>とり</td>
      </tr>
      <tr>
        <td>ぶどう</td>
        <td>うさぎ</td>
        <td>もも</td>
        <td>ごりごり</td>
        <td>じてんしゃ</td>
        <td>ほん</td>
        <td>たんぽぽ</td>
        <td>さくら</td>
        <td>ちょうちょう</td>
        <td>ひよこ</td>
      </tr>
      <tr>
        <td>かぼちゃ</td>
        <td>さかな</td>
        <td>あかちゃん</td>
        <td>ひなた</td>
        <td>ほし</td>
        <td>じしん</td>
        <td>すいか</td>
        <td>とけい</td>
        <td>つき</td>
        <td>ゆび</td>
      </tr>
      <tr>
        <td>さくらんぼ</td>
        <td>くるま</td>
        <td>くつ</td>
        <td>ひまわり</td>
        <td>みかん</td>
        <td>すみれ</td>
        <td>とり</td>
        <td>りんご</td>
        <td>ねこ</td>
        <td>いぬ</td>
      </tr>
      <tr>
        <td>ごりごり</td>
        <td>じてんしゃ</td>
        <td>ほん</td>
        <td>たんぽぽ</td>
        <td>さくら</td>
        <td>ちょうちょう</td>
        <td>ひよこ</td>
        <td>ぶどう</td>
        <td>うさぎ</td>
        <td>もも</td>
      </tr>
      <tr>
        <td>ひなた</td>
        <td>ほし</td>
        <td>じしん</td>
        <td>すいか</td>
        <td>とけい</td>
        <td>つき</td>
        <td>ゆび</td>
        <td>かぼちゃ</td>
        <td>さかな</td>
        <td>あかちゃん</td>
      </tr>
    </table>
  </div>
  <div style="overflow-x: auto; width: 300px">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
  </div>

  <div style="overflow-y: auto; height: 300px">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
    <img src="@/pic/RiinVue.png">
  </div>
</template>

<style>
.btn1 {
  padding: 10px;
  margin: 10px;
  border:solid;
}
.btn2 {
  padding: 20px;
  margin: 10px;
  border:solid;
}
.btn3 {
  padding: 1px;
  margin: 10px;
  border:solid;
}
.btn4 {
  padding: 100px;
  margin: 10px;
  border:solid;
}
.btn5 {
  padding: 45px;
  margin: 10px;
  border:solid;
}
</style>