<template>
  <div class="marquee">
    <div class="marquee-track">
      <div class="marquee-list w-dyn-list">
        <div role="list" class="marquee-flex w-dyn-items">
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/umbrella.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/leaf.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/greenish.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/umbrella.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/colab.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/product.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="marquee-list w-dyn-list">
        <div role="list" class="marquee-flex w-dyn-items">
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/umbrella.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/leaf.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/greenish.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/umbrella.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/colab.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
          <div role="listitem" class="marquee-item w-dyn-item">
            <div class="marquee-image-wrap">
              <img
                src="~/assets/large_img/product.png"
                loading="lazy"
                alt=""
                class="clients-brand-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.marquee {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.marquee-track {
  white-space: nowrap;
  will-change: transform;
  animation: marquee 30s linear infinite;
}
.marquee-track {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}
.marquee-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.marquee-item {
  margin-right: 2em;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
}

.marquee-image-wrap {
  opacity: 0.5;
  -webkit-transition: all 200ms ease;
  transition: all 200ms ease;
}
.marquee-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.marquee-image-wrap:hover {
  opacity: 1;
}
.marquee-track:hover {
  animation-play-state: paused;
}
</style>
