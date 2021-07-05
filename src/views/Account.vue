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
import Vue from 'vue';
import NumberPad from '@/components/Account/NumberPad.vue';
import Types from '@/components/Account/Types.vue';
import Remark from '@/components/Account/Remark.vue';
import Tags from '@/components/Account/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';

// 声明类型，类似 C 语言结构体？
type Record = {
  tags: string[]
  remarks: string
  type: string
  amount: number
  createdAt: Date | undefined
}

@Component({
  components: {Tags, Remark, Types, NumberPad},
})
export default class Account extends Vue {
  tags = ['衣', '食', '住', '行'];
  // 初始值
  record: Record = {
    tags: [], remarks: '', type: '+', amount: 0, createdAt: new Date(0)
  };
  recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');


  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateRemark(value: string) {
    this.record.remarks = value;
  }

  // onUpdateType(value: string) {
  //   this.record.type = value;
  // }
  //
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    const tempRecord: Record = JSON.parse(JSON.stringify(this.record));
    tempRecord.createdAt = new Date();
    this.recordList.push(tempRecord);
    console.log(this.recordList);

  }

  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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
