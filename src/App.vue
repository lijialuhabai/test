<!--
 * @Description:
 * @Author: your name
 * @version:
 * @Date: 2024-05-08 14:49:38
 * @LastEditors: your name
 * @LastEditTime: 2024-05-13 09:50:16
-->
<template>
  <v-scale-screen width="1920" height="1080" delay="200">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </v-scale-screen>
</template>

<script setup>
//import CesiumView from './views/CesiumView.vue';
//import HomePage from './views/HomePage.vue';
import VScaleScreen from 'v-scale-screen'
// import ToolBar from "@/tools/toolBar.vue";
</script>
<style></style>

