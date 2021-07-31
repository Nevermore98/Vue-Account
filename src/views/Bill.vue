<template>
  <Layout class-prefix="layout">
    <NumberPad @submit="saveRecord" @update:value="onUpdateAmount"/>
    <Tabs :data-source="recordTypeList"
          :value.sync="record.type"/>
    <div class="notes">
      <FormItem
          :value.sync="record.notes"
          field-name="备注"
          placeholder="在这里输入备注"/>
    </div>
    <Tags @update:value="record.tags = $event"/>
  </Layout>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import Vue from 'vue';
import NumberPad from '@/components/Bill/NumberPad.vue';
import Tags from '@/components/Bill/Tags.vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/Bill/FormItem.vue';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/consts/recordTypeList';


@Component({
  components: {Tabs, Tags, FormItem, NumberPad},
})

export default class Bill extends Vue {
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };

  get recordList() {
    return this.$store.state.recordList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  // onUpdateTags(value: Tag[]) {
  //   this.record.tags = value;
  // }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签');
    }
    this.$store.commit('createRecord', this.record);
    window.alert('已保存');
    this.record.notes = '';
  }

  // h = document.body.clientHeight;
}

</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}

.notes {
  padding: 12px 0;
}
</style>
