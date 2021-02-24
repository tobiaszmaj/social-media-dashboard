<template>
  <div class="app" :class="theme">
    <Header :theme="theme" @toggle="toggle" />
    <div class="layout">
      <main>
        <div :key="card.key" v-for="card in cards">
          <BigCard
            :followers="card.followers"
            :todayFollowers="card.todayFollowers"
            :brand="card.brand"
            :isUp="card.isUp"
            :color="card.color"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import './styles/global.scss';
import Header from './components/Header.vue';
import BigCard from './components/BigCard.vue';

export default {
  name: 'App',
  components: {
    Header,
    BigCard,
  },
  data() {
    return {
      theme: 'dark',
      cards: [
        {
          key: 0,
          brand: 'facebook',
          followers: '1987',
          todayFollowers: '12',
          isUp: true,
        },
        {
          key: 1,
          brand: 'twitter',
          followers: '1044',
          todayFollowers: '99',
          isUp: true,
          color: 'green',
        },
        {
          key: 2,
          brand: 'instagram',
          followers: '11k',
          todayFollowers: '1099',
          isUp: true,
          color: 'green',
        },
        {
          key: 3,
          brand: 'youtube',
          followers: '11k',
          todayFollowers: '8239',
          isUp: false,
          color: 'red',
        },
      ],
    };
  },
  methods: {
    toggle() {
      if (this.theme === 'dark') {
        this.theme = 'light';
      } else {
        this.theme = 'dark';
      }
    },
  },
};
</script>

<style lang="scss">
@import './styles/_colors.scss';
.dark {
  background: $dark-background;
  color: $white;
}
.light {
  background: $white;
  color: $dark-blue;
}
.layout {
  max-width: 375px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top: -4rem;
}
</style>
