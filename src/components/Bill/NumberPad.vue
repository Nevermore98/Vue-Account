<template>
  <div class="numberPad">
    <!--使用空格占位-->

    <div class="output">
      <span class="dollar">￥</span>
      {{ output || '&nbsp;' }}
    </div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button class="remove" @click="remove">删除</button>

      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>

      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button class="ok" @click="ok">完成</button>

      <button @click="inputContent">.</button>
      <button class="zero" @click="inputContent">0</button>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  // @Prop() readonly value!: number;
  // output = this.value.toString();
  // // output = '' + this.value;
  output = '0';

  inputContent(event: MouseEvent) {
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent!;
    // 8位长度
    if (this.output.length === 8) {
      return;
    } else if (this.output === '0') {
      if ('0123456789'.indexOf(input) >= 0) {
        // 0~9 ：直接输入赋值给输出
        this.output = input;
      } else {
        // 其余（点）：输出加点
        this.output += input;
      }
      return;
    } else {
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;
    }
  }

  remove() {
    if (this.output.length === 1) {
      this.output = '0';
    } else {
      this.output = this.output.slice(0, -1);
    }
  }

  clear() {
    this.output = '0';
  }

  ok() {
    this.$emit('update:value', this.output);
    this.$emit('submit', this.output);
    this.output = '0';
  }
}

</script>

<style lang="scss" scoped>
.numberPad {
  @import "~@/assets/styles/helper.scss";

  .output {
    display: flex;
    align-items: center;
    background: white;
    font-size: 40px;
    font-weight: bolder;
    text-align: left;
    padding: 10px 16px;

    .dollar {
      font-size: 28px;
    }

    @media (max-height: 570px) {
      & {
        line-height: 68px;
      }
    }
  }


  .buttons {

    @extend %clearFix;
    height: 100%;
    padding: 4px;

    //> button {
    //  flex-basis: 25%;
    //  height: 60px;
    //  border: 1px solid #F5F5F5;
    //  font-size: 20px;
    //
    //  //box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.5);
    //  //border-radius: 10px;
    //  //margin: 1px 1px;
    //
    //  &.remove {
    //    font-size: 16px;
    //  }
    //
    //  &.ok {
    //    float: right;
    //    height: 128px;
    //    opacity: 1;
    //  }
    //
    //  &.createdAt {
    //    font-size: 16px;
    //  }
    //
    //  $bg: #f2f2f2;
    //
    //  &:active {
    //    background: #C4C4C4;
    //  }
    //}

    > button {
      font-size: 20px;
      font-weight: bold;
      height: 64px;
      float: left;
      width: 25%;
      border: 4px solid #f5f5f5;
      border-radius: 8px;
      background: white;

      &.ok {
        float: right;
        height: 128px;
      }

      &.zero {
        width: 50%;
      }

      &:active {
        background: #F5F5F5;
      }
    }

    @media (max-height: 570px) {
      > button {
        height: 56px;

        &.ok {
          height: 112px;
        }
      }
    }

  }
}
</style>
