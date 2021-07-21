<template>
  <Layout>
    <Tabs :data-source="recordTypeList" :value.sync="type" class-prefix="type"/>
    <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"/>
    <div>
      type: {{ type }}
      <br/>
      interval: {{ interval }}
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;

  &.selected {
    background: #C4C4C4;

    &::after {
      display: none;
    }
  }
}

::v-deep .interval-tabs-item {
  height: 48px;
}
</style>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/consts/intervalList';
import recordTypeList from '@/consts/recordTypeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
