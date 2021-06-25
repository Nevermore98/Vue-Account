<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Remark/>
    <Tags :data-source.sync="tags"/>
  </Layout>
</template>

// 使用 JS
<script lang="js">
import NumberPad from '@/components/Account/NumberPad.vue'
import Types from '@/components/Account/Types.vue'
import Remark from '@/components/Account/Remark.vue'
import Tags from '@/components/Account/Tags.vue'

export default {
  name: 'Account',
  components: {Tags, Remark, Types, NumberPad},
  data() {
    return {
      tags: ['衣', '食', '住', '行']
    }
  }
}


</script>
<!--不带 scoped -->
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
