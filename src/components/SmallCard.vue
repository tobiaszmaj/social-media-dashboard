<template>
  <div class="container">
    <div class="firstSection">
      <p class="name">{{ name }}</p>
      <i class="brand">
        <img alt="brand icon" :src="require(`@/assets/icon-${brand}.svg`)" />
      </i>
    </div>
    <div class="secondSection">
      <h4 class="number">{{ followers }}</h4>
      <div class="percentaje" :class="isUp ? 'green' : 'red'">
        <i class="arrow" alt="arrow icon">
          <img alt="arrow icon" :src="require(`@/assets/icon-${isUp ? 'up' : 'down'}.svg`)" />
        </i>
        <span>{{ todayFollowers }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallCard',
  props: {
    name: String,
    followers: String,
    todayFollowers: String,
    brand: String,
    isUp: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.green {
  color: $lime-green !important;
  font-weight: bold;
}

.red {
  color: $bright-red !important;
}

.light .container {
  background: $light-grayish-blue;
  color: $dark-grayish-blue;

  .firstSection {
    .name {
      color: $dark-background;
    }
  }

  .secondSection {
    .number {
      color: $dark-background;
    }
  }
}

.container {
  padding: 2rem 1.7rem;
  background: $dark-desaturated-blue;
  border-radius: 10px;
  margin-top: 1rem;

  .firstSection {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .name {
      color: $desaturated-blue;
      font-weight: 700;
      font-size: 1.1rem;
    }

    .brand {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  .secondSection {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    .number {
      font-size: 2.5rem;
      flex-grow: 100; // LMAO //
    }

    .percentaje {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1rem;
      font-size: 1.1rem;
      font-weight: 700;

      .arrow {
        align-self: center;
        display: flex;
        width: 1rem;
        margin-left: 1rem;
        img {
          width: 8px;
          height: 8px;
        }
      }
    }
  }
}
</style>
