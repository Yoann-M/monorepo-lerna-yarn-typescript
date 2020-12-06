<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <ui-helloworld name="Stencil" />
    <ui-button type="info" @btnClick="logBtnClick">SEND</ui-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  logBtnClick(e: MouseEvent): void {
    console.log("Emmited from Stencil Js Component", e);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
