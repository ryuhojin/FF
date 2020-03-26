<template>
  <div id="app">
    <LeftNav/>
    <div class="container">
    <TopNav/>
    <router-view/>
    </div>
    <notification-list/>
  </div>
</template>

<script>
import LeftNav from './components/common/LeftNav'
import TopNav from './components/common/TopNav'
import NotificationList from './components/common/NotificationList'
export default {
  name: 'App',
  components:{
    LeftNav,
    TopNav,
    NotificationList
  }

}
</script>

<style>
#app {
  width:100vw;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:0;
  padding:0;
  border:0;
}
body{
  width:100vw;
  height:100vh;
  display:flex;
  margin:0;
  padding:0;
  border:0;
}
.nav_left{
  width:15vw;
  height:100vh;
  display:flex;
  flex-direction:column;
}
.container{
  width:85vw;
  height:100vh;
  display:flex;
  flex-direction:column;
}
.nav_top{
  width:85vw;
  height:10vh;
}
.container_signin
{
  width:85vw;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
}
.container_common{
  width:85vw;
  height:90vh;
  display:flex;
}
.panel_signin{
  width:50vw;
  height:40vh;
  border:1px solid black;
}
</style>

