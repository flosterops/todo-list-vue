<template>
  <div class="flex container p-8">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "src/assets/styles/_variables.scss";
#app {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $default;
}

a,
p,
h1,
h2,
h3,
h4,
h5,
h6,
p,
body,
div {
  padding: 0;
  margin: 0;
  color: $default;
}

.container {
  max-width: 1070px;
}

.flex {
  width: 100%;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
  justify-content: stretch;
  position: relative;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.jc {
  &-center {
    justify-content: center;
  }
  &-between {
    justify-content: space-between;
  }
  &-around {
    justify-content: space-around;
  }
  &-end {
    justify-content: flex-end;
  }
  &-start {
    justify-content: flex-start;
  }
  &-stertch {
    justify-content: stretch;
  }
}

.ai {
  &-center {
    align-items: center;
  }
  &-end {
    align-items: flex-end;
  }
  &-start {
    align-items: flex-start;
  }
  &-stretch {
    align-items: stretch;
  }
}

.p {
  &-1 {
    padding: 5px;
  }
  &-2 {
    padding: 10px;
  }
  &-3 {
    padding: 15px;
  }
  &-4 {
    padding: 20px;
  }
  &-5 {
    padding: 25px;
  }
  &-6 {
    padding: 30px;
  }
  &-7 {
    padding: 35px;
  }
  &-8 {
    padding: 40px;
  }
}

.m {
  &-1 {
    margin: 5px;
  }
  &-2 {
    margin: 10px;
  }
  &-3 {
    margin: 15px;
  }
  &-4 {
    margin: 20px;
  }
  &-5 {
    margin: 25px;
  }
  &-6 {
    margin: 30px;
  }
  &-7 {
    margin: 35px;
  }
  &-8 {
    margin: 40px;
  }
}

.flex-d-row {
  flex-direction: row;
}
</style>
