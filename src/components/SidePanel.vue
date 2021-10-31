<template>
  <div class="sidepanel">
    <div class="panel__btns">
      <router-link to="/main">
        <img src="@/assets/discord.png" />
      </router-link>
      <hr>
      <router-link to="/settings">
        <img src="@/assets/settings.png" />
      </router-link>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidePanel",
};
</script>

<style>
</style>