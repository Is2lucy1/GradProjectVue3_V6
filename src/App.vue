<template>
  <div id="nav">
  <h1><span>Subscriptions</span>App</h1>
    <router-link to="/">Subscriptions</router-link> |
    <router-link to="/create">Add Subscription</router-link>
  </div>
  <router-view class="modify"/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin: 0;
  padding: 0;
  font-family: 'Fira Sans', san-serif;

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

#nav {
  padding: 30px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #FFF;
    font-size: 28px;
    font-weight: bolder;

    span {
      color: #42B883;
    }
  }

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}



header {
  display: flex;
  align-item: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #FFF;
    font-size: 28px;

    span {
      color: #42B883;
    }
  }
}

h3 {
  padding-top: 10px;
}

.modify {
  padding: 10px;
}

</style>
