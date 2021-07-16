<template>
  <Layout class-prefix="layout">
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
    <Types :value.sync="record.type"/>
    <div class="remark">
      <FormItem
          field-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateRemark"/>
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import Vue from 'vue';
import NumberPad from '@/components/Account/NumberPad.vue';
import Types from '@/components/Account/Types.vue';
import Tags from '@/components/Account/Tags.vue';
import {Component} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';
import FormItem from '@/components/Account/FormItem.vue';

const recordList = recordListModel.fetch();

@Component({
  components: {Tags, FormItem, Types, NumberPad},
})

export default class Account extends Vue {
  tags = window.tagList;
  record: RecordItem = {
    tags: [], remarks: '', type: '-', amount: 0, createdAt: new Date(0)
  };
  recordList = window.recordList;


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
    window.createRecord(this.record);
  }
}

</script>
<!--不带 scoped -->
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.remark {
  padding: 12px 0;
}
</style>
