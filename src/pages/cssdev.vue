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
  <p>CSSどーじょー</p>
  <div>
    <button class="btn1">ボタン1</button><br>
    <button class="btn2">ボタン2</button><br>
    <button class="btn3">ボタン3</button><br>
    <button class="btn4">ボタン4</button><br>
    <button class="btn5">ボタン5</button>
  </div>
  <div style="display:flex; justify-content: space-between;">
    <div style="width:200px; border: solid 1px black;">1</div>
    <div style="width:200px; border: solid 1px black;">2</div>
    <div style="width:200px; border: solid 1px black;">3</div>
  </div>
  <div style="display:flex; justify-content: center;">
    <div style="width:200px; border: solid 1px black;">1</div>
    <div style="width:200px; border: solid 1px black;">2</div>
    <div style="width:200px; border: solid 1px black;">3</div>
  </div>
  <div style="display:flex; justify-content: space-around;">
    <div style="width:200px; border: solid 1px black;">1</div>
    <div style="width:200px; border: solid 1px black;">2</div>
    <div style="width:200px; border: solid 1px black;">3</div>
  </div>
  <div style="display:flex; justify-content: space-between; height: 300px; align-items:center;">
    <div style="width:200px; border: solid 1px black;">1</div>
    <div style="width:200px; border: solid 1px black;display:flex;height:300px;align-items:center;">2
      <div style="width:100px; border: solid 1px black;">2-1</div>
      <div style="width:100px; border: solid 1px black;">2-2</div>
    </div>
    <div style="width:200px; border: solid 1px black;">3</div>
  </div>
  <div style="width:800px; border: solid 1px black;">
    <div style="display:flex;">
      <div style="width:100px;height:100px; border: solid 1px black;margin-top: 50px;"></div>
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