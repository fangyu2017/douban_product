<template>
  <div class="movie_detail">
    <h3>{{detail.title}} ({{detail.year}})</h3>
    <div class="detail_fl">
      <img :src="detail.images.large" alt="">
    </div>
    <div class="detail_r">
      <p>导演: 佩顿·里德</p>
      <p>编剧: 克里斯·麦克纳 / 埃里克·萨默斯 / 保罗·路德 / 安德鲁·贝伦 / 加百利·法拉利</p>
      <p>主演: 保罗·路德 / 伊万杰琳·莉莉 / 迈克尔·佩纳 / 汉娜·乔恩-卡门 / 沃尔顿·戈金斯 / 更多...</p>
      <p>类型: 动作 / 科幻 / 冒险</p>
      <p>官方网站: www.marvel.com/antman</p>
      <p>制片国家/地区: 美国</p>
      <p>语言: 英语</p>
      <p>上映日期: 2018-08-24(中国大陆) / 2018-07-06(美国)</p>
      <p>片长: 118分钟 / 119分钟(中国大陆)</p>
      <p>又名: 蚁侠2：黄蜂女现身(港) / 蚁人2 / 蚁人与黄蜂女 / Ant-Man 2</p>
      <p>IMDb链接: tt5095030</p>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
      return{
        detail:{}
      }
    },
    methods:{
       getJosn(id){
        this.$axios.get("/api/v2/movie/subject/"+id).then(res=>{
          this.detail=res.data
          console.log(res)
        })
       }
    },
    created(){
      this.getJosn(this.$route.params.id)
    }
  }

</script>

<style>

</style>


