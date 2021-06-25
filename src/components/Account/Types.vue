<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({
  props: {
    propMessage: String
  }
})
export default class Types extends Vue {
  type = '-';
  @Prop(String) xxx: string | undefined;
  // 前面 String 告诉 Vue 运行时类型，后面 string 告诉 TS 编译时检查类型
  @Prop(Number) yyy: number | undefined;

  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('类型错误');
    }
    this.type = type;
  }

  mounted() {
    if (this.yyy !== undefined) {
      console.log(this.yyy.toString());
    } else {
      console.log('yyy 未定义');
    }
    console.log(this.xxx);
    console.log(typeof this.xxx);
    console.log(this.yyy);
    console.log(typeof this.yyy);
  }
}
</script>

<!--<script lang="js">-->
<!--export default {-->
<!--  name: 'Types',-->
<!--  props: ['xxx'],-->
<!--  data() {-->
<!--    return {-->
<!--      type: '-' // '-' 表示支出 '+' 表示收入-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    console.log(this.xxx)-->
<!--  },-->
<!--  methods: {-->
<!--    selectType(type) {-->
<!--      if (type !== '-' && type !== '+') {-->
<!--        throw new Error('类型错误');-->
<!--      }-->
<!--      this.type = type;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }

}
</style>
