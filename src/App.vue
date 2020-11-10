<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
$(document).ready(function () {

})
export default {

}
</script>

<style lang="scss">
html
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
#app {
  font-family: 'Quicksand';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:link,
.btn-primary:visited,
.btn-primary {
  background-color: #28a745 !important;
    border-color: #28a745 !important;
    -webkit-box-shadow: none !important;
   box-shadow: none !important;
   outline: 0;
  outline-offset: -2px;
}
.btn-secondary:hover,
.btn-secondary:focus,
.btn-secondary:active,
.btn-secondary:link,
.btn-secondary:visited,
.btn-secondary {

    background-color: #B6AD15 !important;
    border-color: #B6AD15 !important;
     -webkit-box-shadow: none !important;
   box-shadow: none !important;
   outline: 0;
  outline-offset: -2px;
}
</style>
