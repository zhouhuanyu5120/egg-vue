<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  VueRouter,
  computed: {},
  methods: {},
  mounted() {
  }
};
</script>
<style>
.el-main{
  width: 100%;
}
.el-header{
  padding: 0 !important;
  height: auto !important;
}
</style>