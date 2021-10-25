<template>
  <div class="player">
    <div class="square">
      <div :class="{piece: true, 'dimmed': !myTurn, win: win}">
        Player:
        <i :class="fontAwesomeIcon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import fontAwesomeIconFn from '../services/fontAwesomeIcon';
import SquareValue from '../types/squareValue';

export default Vue.extend({

  props: {
    value: String as () => SquareValue,
    myTurn: Boolean,
    win: Boolean
  },

  computed: {
    fontAwesomeIcon(): string {
      return fontAwesomeIconFn(this.value, !this.myTurn, this.win);
    }
  }

});
</script>

<style scoped>
.square {
  width: 200px;
  height: 50px;
  padding: 2px;
}
.piece {
  height: 100%;
  width: 100%;
  border: 2px solid black;
  font-size: 26pt;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
}
.dimmed {
  color: #cccccc;
}
.win {
  color: #ff0000;
}
</style>
