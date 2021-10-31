<template>
  <div class="topbar">
    <span>Drocsid</span>
    <div>
      <img @click="hide" src="@/assets/paper.png" />
      <img @click="toSize" src="@/assets/full-screen.png" />
      <img @click="close" src="@/assets/close.png" />
    </div>
  </div>
</template>

<script>
const { remote } = window.require("electron");

export default {
  name: "TopBar",
  methods: {
    hide() {
      remote.getCurrentWindow().minimize();
    },
    toSize() {
      remote.getCurrentWindow().isMaximized()
        ? remote.getCurrentWindow().unmaximize()
        : remote.getCurrentWindow().maximize();
    },
    close() {
      remote.getCurrentWindow().close();
    },
  },
};
</script>

<style>
.topbar img:hover {
  background: #7289da;
}

.topbar img:last-child:hover {
  background: rgb(255, 45, 45);
}
</style>