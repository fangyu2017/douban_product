<template>
  <div class="in_teacher">
    <h1>正在热映</h1>
    <div class="movies_list">
      <div v-for="(list,index) in lists" class="movie_list" >
          <div @click="goDetail(list.id)">
            <div class="movie_img">
              <img :src="list.images.large" alt="">
            </div>
            <h2>{{list.title}}</h2>
            <div>评分: {{list.rating.average}}</div>
            <button>在线选票</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        lists:{}
      }
    },
    methods:{
      getJosn(){
        this.$axios.get("/api/v2/movie/in_theaters").then(res=>{
          console.log(res)
          this.lists=res.data.subjects
        })
      },
      goDetail(id){
        this.$router.push({path:'./movieDetail/'+id+''})
      }
    },
    created() {
      this.getJosn()
    },
  }
</script>
<style scoped>
  .in_teacher{
    width: 1040px;
    margin: 0 auto;
  }
  .movies_list{
    width: 1040px;
    margin: 0 auto;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    flex-wrap:wrap;
  }
  .movie_list{
    width: 140px;
    margin-bottom: 30px;
  }
  .movie_list img{
    width:115px;
    height:161px;
  }
  .movie_list h2{
    font-size: 14px;
     width: 130px;
     overflow: hidden;
     text-overflow: ellipsis;
     white-space:nowrap;
  }
</style>

