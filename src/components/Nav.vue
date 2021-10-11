<template>
  <div class="nav-wrapper">
    <router-link active-class="selected" class="item" to="/bill">
      <Icon name="bill"/>
      记账
    </router-link>
    <router-link active-class="selected" class="item" to="/labels">
      <Icon name="labels"/>
      标签
    </router-link>
    <router-link active-class="selected" class="item" to="/statistics">
      <Icon name="statistics-pie-chart"/>
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/helper.scss";

.nav-wrapper {
  @extend %outerShadow;
  display: flex;
  flex-direction: row;
  background-color: white;

  > .item {
    padding: 2px 0;
    width: 33.33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #909090;

    .icon {
      width: 24px;
      height: 24px;
      fill: #909090;
    }
  }

  > .item.selected {
    color: black;

    .icon {
      fill: black;
    }
  }
}
</style>
