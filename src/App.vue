<template>
  <div>
    <TopBar />
    <SidePanel v-if="this.$route.name !== 'LoadingPage'" />
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import SidePanel from "@/components/SidePanel";

export default {
  name: "App",
  components: {
    TopBar,
    SidePanel,
  },
};
</script>

<style>
@import "./assets/styles/commonStyles.css";
</style>
