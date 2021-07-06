<template>
  <Layout class-prefix="layout">
    {{ recordList }}
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>
    <Remark @update:value="onUpdateRemark"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import Vue from 'vue';
import NumberPad from '@/components/Account/NumberPad.vue';
import Types from '@/components/Account/Types.vue';
import Remark from '@/components/Account/Remark.vue';
import Tags from '@/components/Account/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tagList = tagListModel.fetch;

@Component({
  components: {Tags, Remark, Types, NumberPad},
})
export default class Account extends Vue {

  tags = tagList;
  record: RecordItem = {
    tags: [], remarks: '', type: '-', amount: 0, createdAt: new Date(0)
  };
  recordList: RecordItem[] = recordList;


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateRemark(value: string) {
    this.record.remarks = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const tempRecord: RecordItem = recordListModel.clone(this.record);
    tempRecord.createdAt = new Date();
    this.recordList.push(tempRecord);
    console.log(this.recordList);

  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
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
