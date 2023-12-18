<template>
  <nav>
    <router-link to="/home">На главную страницу</router-link> 
    <br>
    <router-link to="/add">Добавить новое резюме</router-link>
    <br>
    Ролан Закиров специальный выпуск для ДПО
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7a89ff;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #8692fd;
}

nav a.router-link-exact-active {
  color: #4260b9;
}
</style>
