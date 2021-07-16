import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const tempRecord: RecordItem = clone(record);
    tempRecord.createdAt = new Date();
    this.data.push(tempRecord);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.data));
  }
};
export default recordListModel;
