<template>
  <div class="container">
    <div :class="'brand ' + brand"></div>
    <div class="social">
      <i alt="brand"
        ><img class="icon" alt="social-brand" :src="require(`@/assets/icon-${brand}.svg`)"
      /></i>
      <h5 class="user">@nathan</h5>
    </div>
    <div class="followers">
      <h1 class="number">{{ followers }}</h1>
      <h2 class="text">followers</h2>
    </div>
    <div class="date">
      <i alt="up-arrow" class="arrow"
        ><img :src="require(`@/assets/icon-${isUp ? 'up' : 'down'}.svg`)"
      /></i>
      <p :class="'text ' + color">{{ todayFollowers }} Today</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BigCard',
  props: {
    followers: String,
    todayFollowers: String,
    brand: String,
    isUp: {
      type: Boolean,
      default: false,
    },
    color: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.facebook {
  background: $facebook;
}
.twitter {
  background: $twitter;
}
.instagram {
  background: $instagram;
}
.youtube {
  background: $youtube;
}
.green {
  color: $lime-green;
  font-weight: bold;
}
.red {
  color: $bright-red;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;
  margin-top: 1.5rem;
  background: $dark-desaturated-blue;
  border-radius: 10px;
  color: $white;
  .brand {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 6.5rem;
    margin: 1rem 0;
    .icon {
      width: 20px;
      height: 20px;
    }
    .user {
      color: $desaturated-blue;
      font-size: 1rem;
      margin-bottom: 6px;
    }
  }
  .followers {
    text-align: center;
    .number {
      font-size: 5rem;
    }
    .text {
      font-size: 1rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 10px;
      color: $desaturated-blue;
    }
  }
  .date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    .arrow {
      align-self: center;
      display: flex;
      margin-right: 0.5rem;
      img {
        width: 8px;
        height: 8px;
      }
    }
    .text {
      font-weight: 700;
    }
  }
}
.light .container {
  background: $light-grayish-blue;
  color: $dark-grayish-blue;
  .text {
    color: $dark-background;
  }
  .followers {
    color: $dark-background;
  }
}
</style>
