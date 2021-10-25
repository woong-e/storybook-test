<template>
  <div class="square">
    <div class="piece">
      <button v-if="!confirming" @click="clicked" data-cy="newGame">
        New Game
      </button>
      <div v-if="confirming" class="confirming">
        <div>Give up?</div>
        <div class="row">
          <button @click="confirm" data-cy="yes">Yes</button>
          <button @click="reset" data-cy="no">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

  data() {
    return {
      confirming: false
    };
  },

  props: {
    gameOver: Boolean
  },

  methods: {

    clicked() {
      if (this.gameOver) {
        this.$emit('click');
      } else {
        this.confirming = true;
      }
    },

    confirm() {
      this.$emit('click');
      this.confirming = false;
    },

    reset() {
      this.confirming = false;
    }

  }

});
</script>

<style scoped>
.square {
  width: 300px;
  height: 100px;
  padding: 2px;
}
.piece {
  height: 100%;
  width: 100%;
  border: 2px solid black;
  font-size: 56pt;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
  font-size: 20pt;
  line-height: 30pt;
  text-align: center;
}
.piece > * {
  height: 100%;
  width: 100%;
}
button {
  border: 0;
  background-color: white;
  box-sizing: border-box;
  font-size: 20pt;
}
.confirming {
  display: flex;
  flex-direction: column;
}
.confirming button {
  border: 1px solid black;
  margin: 0;
}
</style>
