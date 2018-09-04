<template>
 <div id="nav">
    <div class="nav-items">
      <ul class="nav">
        <li>
          <router-link to="/">影讯&购票</router-link>
        </li>
        <li>
          <router-link to="javascript:;">选电影</router-link>
        </li>
        <li>
          <router-link to="javascript:;">电视剧</router-link>
        </li>
        <li>
          <router-link to="javascript:;">排行榜</router-link>
        </li>
        <li>
          <router-link to="javascript:;">分类</router-link>
        </li>
        <li>
          <router-link to="javascript:;">影评</router-link>
        </li>
        <li>
          <router-link to="javascript:;">2017年度榜单</router-link>
        </li>
        <li>
          <router-link to="javascript:;">2017观影报告</router-link>
        </li>
      </ul>
    <div>

    </div>
  </div>
   <router-view></router-view>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-secondary {
  width: 1040px;
  margin: 0 auto;
  padding-bottom: 0;
  overflow: hidden;
  zoom: 1;
}

 .nav-items {
  float: none;
  zoom: 1;
  font-size: 14px;
  background-color: #f0f3f5;
}

.nav-secondary:after {
  content: "\0020";
  display: block;
  clear: both;
}

.nav-items ul {
  margin: 9px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 1040px;
  margin: 0 auto;
}

.nav-items li {
  display: inline-block;
  margin-right: 25px;
}
.nav-items a:link,
.nav-items a:visited {
  color: #27a;
  text-decoration: none;
}
.nav-items a:active,
.nav-items a:hover {
  background-color: #27a;
  color: #fff;
}
.nav-items a.standbyme {
  height: 96px;
  width: 87px;
  position: absolute;
  top: 9px;
  left: 50%;
  margin-left: 220px;
  background: url(//img3.doubanio.com/dae/accounts/resources/19507ad/movie/assets/standbyme_nav.png?s=1)
    no-repeat;
  background-size: 100%;
  background-color: transparent;
}
.nav-items a.standbyme:hover,
.nav-items a.standbyme:visited,
.nav-items a.standbyme:active {
  background-color: transparent;
}
</style>

