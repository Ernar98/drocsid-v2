<template>
  <transition name="fade">
    <div class="main__frame" @click="runProgram">
      <div class="context">
        <transition name="fade">
          <h1 v-if="fadeTitle">Welcome to Drocsid!</h1>
        </transition>
        <transition name="fade">
          <h4
            v-if="LoadingFinish"
            :style="Blinking ? 'animation: blinker 1s linear infinite' : ''"
          >
            Click on The Screen
          </h4>
        </transition>
      </div>

      <div class="area">
        <ul class="circles">
          <li>
            <img src="@/assets/discord.png" />
          </li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
          <li><img src="@/assets/discord.png" /></li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "LoadingPage",
  data() {
    return {
      fadeTitle: false,
      LoadingFinish: false,
      Blinking: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.fadeTitle = true;
    }, 2000);
    setTimeout(() => {
      this.LoadingFinish = true;
    }, 4000);
    setTimeout(() => {
      this.Blinking = true;
    }, 5000);
  },

  methods: {
    runProgram() {
      console.log("Clicked");
      if (this.LoadingFinish == true) {
        setTimeout(() => {
          this.$router.push("/main");
        }, 1500);
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/LoadingScreenAnimation.css";

.context:hover {
  background: red !important;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>