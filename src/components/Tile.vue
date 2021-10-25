<template>
  <div class="square" @click="clicked">
    <div class="piece">
      <i :class="fontAwesomeIcon"></i>
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
    gameOver: Boolean,
    win: Boolean
  },

  computed: {

    fontAwesomeIcon(): string {
      return fontAwesomeIconFn(this.value, this.gameOver, this.win);
    }

  },

  methods: {

    clicked() {
      if (!this.value && !this.gameOver) {
        this.$emit('click');
      }
    }

  }

});
</script>

<style scoped>
.square {
  width: 200px;
  height: 200px;
  padding: 2px;
}
.piece {
  height: 100%;
  width: 100%;
  border: 2px solid black;
  font-size: 56pt;
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
