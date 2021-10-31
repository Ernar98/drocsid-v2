<template>
  <div>
    <div class="main__wrapper">
      <h4>Settings Panel</h4>

      <div class="container">
        <p class="ghost" style="text-align: Center; color: white">
          Loading in process..
        </p>

        <img
          class="ghost"
          version="1.1"
          id="Layer_1"
          src="@/assets/discord.png"
          alt=""
        />
        <p class="shadowFrame">
          <svg
            version="1.1"
            class="shadow"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="61px"
            y="20px"
            width="122.436px"
            height="39.744px"
            viewBox="0 0 122.436 39.744"
            enable-background="new 0 0 122.436 39.744"
            xml:space="preserve"
          >
            <ellipse
              fill="#010f2c"
              cx="61.128"
              cy="19.872"
              rx="49.25"
              ry="8.916"
            />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  components: {},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -64.5px;
  margin-top: -85.5px;
}

.ghost {
  animation: float 3s ease-out infinite;
}

@keyframes float {
  50% {
    transform: translate(0, 20px);
  }
}
.shadowFrame {
  width: 130px;
  margin-top: 0px;
}
.shadow {
  animation: shrink 3s ease-out infinite;
  transform-origin: center center;
  ellipse {
    transform-origin: center center;
  }
}

@keyframes shrink {
  0% {
    width: 90%;
    margin: 0 5%;
  }
  50% {
    width: 60%;
    margin: 0 18%;
  }
  100% {
    width: 90%;
    margin: 0 5%;
  }
}

.container img {
  width: 127.433px;
  height: 132.743px;
}
</style>