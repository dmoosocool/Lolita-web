<template>
  <div class="container">
    <div v-show="!loaded">加载中...</div>
    <div v-show="loaded" class="main">
      <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  props: {
  },
  data() {
    return {
      text: '',
      loaded: false,
    };
  },

  beforeCreate() {
    setTimeout(() => {
    }, 1000);
  },

  mounted() {
    setTimeout(() => {
      this.text = '加载完成';
      this.loaded = true;
    }, 2000);
  },
};
</script>

<style lang="stylus">

</style>
