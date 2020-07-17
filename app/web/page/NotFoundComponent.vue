<template>
  <div class="notfound" :class="full?'full':''">404</div>
</template>

<script>
export default {
  data() {
    return {
      full: true
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>
