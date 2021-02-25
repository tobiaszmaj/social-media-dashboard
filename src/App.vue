<template>
  <div class="app" :class="theme">
    <Header :theme="theme" @toggle="toggle" />
    <div class="layout">
      <main class="bigCards">
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
      <main class="secondSection">
        <h1>Overview - Today</h1>
        <div class="smallCards">
          <div :key="card.key" v-for="card in smallCards">
            <SmallCard
              :name="card.name"
              :followers="card.followers"
              :todayFollowers="card.todayFollowers"
              :brand="card.brand"
              :isUp="card.isUp"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import './styles/global.scss';
import Header from './components/Header.vue';
import BigCard from './components/BigCard.vue';
import SmallCard from './components/SmallCard.vue';

export default {
  name: 'App',
  components: {
    Header,
    BigCard,
    SmallCard,
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
      smallCards: [
        {
          key: 0,
          brand: 'facebook',
          name: 'Page Views',
          followers: '87',
          todayFollowers: '3',
          isUp: true,
        },
        {
          key: 1,
          brand: 'facebook',
          name: 'Likes',
          followers: '52',
          todayFollowers: '2',
          isUp: false,
        },
        {
          key: 2,
          brand: 'instagram',
          name: 'Likes',
          followers: '5462',
          todayFollowers: '2257',
          isUp: true,
        },
        {
          key: 3,
          brand: 'instagram',
          name: 'Profile Views',
          followers: '52K',
          todayFollowers: '1375',
          isUp: true,
        },
        {
          key: 4,
          brand: 'twitter',
          name: 'Retweets',
          followers: '117',
          todayFollowers: '303',
          isUp: true,
        },
        {
          key: 5,
          brand: 'twitter',
          name: 'Likes',
          followers: '507',
          todayFollowers: '553',
          isUp: true,
        },
        {
          key: 6,
          brand: 'youtube',
          name: 'Likes',
          followers: '107',
          todayFollowers: '19',
          isUp: false,
        },
        {
          key: 7,
          brand: 'youtube',
          name: 'Total Views',
          followers: '1407',
          todayFollowers: '12',
          isUp: false,
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
  padding-bottom: 2rem;
}

.secondSection {
  margin-top: 5rem;
}

@media (min-width: 1220px) {
  .layout {
    max-width: 1220px;

    .bigCards {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      gap: 3rem;
      margin-top: 1rem;
      div {
        flex-grow: 1;
      }
    }

    .smallCards {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      gap: 3rem;
      div {
        flex: 1 0 20%;
      }
    }
  }
}

@media (min-width: 1440px) {
  .layout {
    max-width: 1440px;
  }
}
</style>
