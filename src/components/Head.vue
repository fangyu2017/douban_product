<template>
  <div id="head">
    <div class="nav-wrap">
      <div class="nav-primary">
        <div class="nav-logo">
          <a href="javascript:;">豆瓣电影</a>
        </div>
        <div class="nav-search">
          <form>
            <fieldset>
              <legend>搜索：</legend>
              <label for="inp-query">
              </label>
              <div class="inp"><input id="inp-query" name="search_text" size="22" maxlength="60" placeholder="搜索电影、电视剧、综艺、影人" value=""></div>
              <div class="inp-btn"><input type="submit" value="搜索"></div>
              <input type="hidden" name="cat" value="1002" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {};
    },
    compontents:{
    }
  };
</script>

<style scoped>
  .nav {
    width: 100%;
    min-width: 1040px;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 40px;
  }

  .nav .nav-wrap {
    border-bottom: 1px solid #e5ebe4;
    border-color: #e3ebec;
  }

  .nav .nav-primary {
    width: 1040px;
    margin: 0 auto;
    overflow: visible !important;
    position: relative;
    padding: 10px 0 5px;
    zoom: 1;
  }

  .nav .nav-logo {
    float: left;
    height: 56px;
    width: 145px;
    margin: 0 13px 0 0;
  }

  .nav .nav-logo a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-size: 30px;
    color: #27a;
    text-decoration: none;
  }

  .nav .nav-logo a:hover,
  .nav .nav-logo a:active {
    background: none !important;
  }

  legend {
    color: #000;
  }

  label {
    font-family: Tahoma;
    vertical-align: middle;
  }

  fieldset {
    border: 1px solid #ddd;
    padding: 0 10px;
    margin-bottom: 15px;
  }

  fieldset img {
    border: 0;
  }

  fieldset legend {
    color: #666;
    padding: 0 5px;
  }

  .nav-search {
    margin-left: 145px;
    overflow: visible !important;
    position: relative;
    zoom: 1;
    padding: 10px 0 15px 0;
  }

  .nav-search fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: static;
  }

  .nav-search legend {
    display: none;
  }

  .nav-search label {
    position: absolute;
    left: 11px;
    top: 10px;
    line-height: 30px;
    cursor: text;
    color: #bbb;
    width: auto;
  }

  .nav-search .inp {
    float: left;
    width: 470px;
    height: 34px;
    text-align: center;
    margin-right: -3px;
    cursor: text;
    background-image: url(//img3.doubanio.com/dae/accounts/resources/19507ad/movie/assets/nav_mv_bg.png?s=1);
  }

  .nav-search .inp input {
    background: #fff;
    width: 96%;
    margin: 0;
    text-align: left;
    height: 30px;
    padding-left: 10px;
    height: 28px\9;
    line-height: 28px\9;
    outline: none;

  }

  .nav-search input {
    -webkit-appearance: none;
    border: none;
    background: transparent;
  }

  .nav-search .inp-btn {
    position: relative;
    left: -1px;
    width: 37px;
    height: 34px;
    zoom: 1;
    overflow: hidden;
  }

  .nav-search .inp-btn input {
    width: 100%;
    height: 100%;
    font-size: 0;
    padding: 35px 0 0 0;
    overflow: hidden;
    color: transparent;
    cursor: pointer;
     background: url(//img3.doubanio.com/dae/accounts/resources/19507ad/movie/assets/nav_mv_bg.png?s=1) no-repeat 0 -40px;
  }

  form {
    margin: 0;
    padding: 0;
    border: 0px;
  }

  .nav-secondary {
    width: 1040px;
    margin: 0 auto;
    padding-bottom: 0;
    overflow: hidden;
    zoom: 1;
  }

  .nav-secondary .nav-items {
    float: none;
    zoom: 1;
    font-size: 14px;
  }

  .nav-secondary:after {
    content: '\0020';
    display: block;
    clear: both;
  }

  .nav-secondary ul {
    margin: 9px 0;
  }

  .nav-secondary li {
    display: inline;
    margin-right: 25px;
  }

  @media (max-width: 1024px) {
    .nav {
      min-width: 1024px;
    }
    .nav .nav-primary,
    .nav .nav-secondary {
      width: 1000px;
    }
  }

  .nav-srh .inp {
    position: relative;
    z-index: 40;
  }

  #search_suggest {
    background: #fff;
    border: 1px solid #ddd;
    position: absolute;
    z-index: 99;
    top: 32px;
    width: 302px;
    border-top: 0 none;
  }

  #search_suggest li {
    border-bottom: 1px solid #eee;
    overflow: hidden;
  }

  #search_suggest li:last-child {
    border-bottom: 0 none;
  }

  #search_suggest li.curr_item {
    background: #efefef;
  }

  #search_suggest li a {
    color: #999;
    display: block;
    overflow: hidden;
    padding: 6px;
    zoom: 1;
  }

  #search_suggest li a:link,
  #search_suggest li a:visited {
    text-decoration: none;
  }

  #search_suggest li a:hover {
    background: #f9f9f9;
    color: #999;
  }

  #search_suggest li a em {
    font-style: normal;
    color: #369;
  }

  #search_suggest li p {
    margin: 0;
    zoom: 1;
    overflow: hidden;
  }

  #search_suggest li img {
    float: left;
    margin-right: 8px;
    margin-top: 3px;
  }

  #search_suggest li.over {
    background: #fbfbfb;
  }

  #search_suggest {
    width: 468px;
    margin-left: -5px;
    margin-top: 2px;
  }
</style>
