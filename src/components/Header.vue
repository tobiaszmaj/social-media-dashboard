<template>
  <header class="container">
    <div class="header">
      <h2 class="header__title">Social Media Dashboard</h2>
      <h4 class="header__subtitle">Total Followers: 24,004</h4>
    </div>
    <nav class="toggle">
      <p class="toggle__text">{{ theme === 'dark' ? 'light' : 'dark' }} Mode</p>
      <label class="switch">
        <input
          type="checkbox"
          :class="theme === 'dark' ? 'checked' : false"
          @change="$emit('toggle')"
        />
        <span class="slider round"></span>
      </label>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['theme'],
};
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.light .container {
  background: $pale-blue;
}
.container {
  max-width: 375px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: $dark-bg-pattern;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 1rem;
  .header__title {
    font-size: 1.7rem;
  }
  .header__subtitle {
    color: $desaturated-blue;
    margin-top: 0.5rem;
  }
}
.light .header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .header__subtitle {
    color: $dark-grayish-blue;
  }
}
.toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
  .toggle__text {
    color: $desaturated-blue;
    font-weight: 700;
    text-transform: capitalize;
  }
}
.light .toggle {
  .toggle__text {
    color: $dark-grayish-blue;
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $dark-toggle;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: $dark-blue;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.light .slider:before {
  background-color: white;
}
input:checked + .slider {
  background: $light-toggle;
}
input:focus + .slider {
  box-shadow: 0 0 1px white;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
