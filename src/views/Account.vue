<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Remark/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import NumberPad from '@/components/Account/NumberPad.vue';
import Types from '@/components/Account/Types.vue';
import Remark from '@/components/Account/Remark.vue';
import Tags from '@/components/Account/Tags.vue';

export default {
  name: 'Account',
  components: {Tags, Remark, Types, NumberPad},
};
</script>
<!--不带 scoped -->
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
