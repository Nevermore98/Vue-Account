<template>
  <div>
    <label class="remark">
      <span class="name">备注</span>
      <input placeholder="在这里添加备注" type="text">
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Remark'
};
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
