<template>
  <div>
    <label class="remark">
      <span class="name">备注</span>
      <input type="text" v-model="value"
             placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Remark extends Vue {
  value = '';
}
</script>

<style lang="scss" scoped>
.remark {
  font-size: 14px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  padding-left: 16px;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
