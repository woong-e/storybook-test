<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <div class="flex-spread board">
      <Player value="x" :myTurn="turn === 'x' && !gameOver" :win="winner === 'x'" />
      <Player value="o" :myTurn="turn === 'o' && !gameOver" :win="winner === 'o'" />
    </div>
    <div class="flex board">
      <div v-for="s in squares" :key="s.id">
        <Tile :value="s.value" :gameOver="gameOver" :win="s.win" @click="tileClick(s)" />
      </div>
    </div>
    <div class="newGame">
      <NewGame :gameOver="gameOver" @click="newGame" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Player from './components/Player.vue';
import Tile from './components/Tile.vue';
import NewGame from './components/NewGame.vue';
import checkWin from './services/checkWin';
import checkStalemate from './services/checkStalemate';
import SquareValue from './types/squareValue';
import Square from './types/square';
import { getSquareById } from './services/getSquareById';

interface AppData {
  turn: SquareValue;
  gameOver: boolean;
  winner: SquareValue;
  squares: Square[]
}

export default Vue.extend({
  name: 'App',
  components: {
    Player,
    Tile,
    NewGame
  },

  data() {
    const data: AppData = {
      turn: SquareValue.x,
      gameOver: false,
      winner: SquareValue.empty,
      squares: [
        { id: 0, value: SquareValue.empty, win: false },
        { id: 1, value: SquareValue.empty, win: false },
        { id: 2, value: SquareValue.empty, win: false },
        { id: 3, value: SquareValue.empty, win: false },
        { id: 4, value: SquareValue.empty, win: false },
        { id: 5, value: SquareValue.empty, win: false },
        { id: 6, value: SquareValue.empty, win: false },
        { id: 7, value: SquareValue.empty, win: false },
        { id: 8, value: SquareValue.empty, win: false }
      ]
    };
    return data;
  },

  mounted() {
    this.newGame();
  },

  methods: {

    tileClick(s: Square): void {
      s.value = this.turn;
      this.gameLoop();
      if (!this.gameOver) {
        this.nextTurn();
      }
    },

    gameLoop() {
      const won: number[] = checkWin(this.squares);
      if (won.length > 0) {
        this.winner = this.turn;
        this.gameOver = true;
        won.forEach(w => {
          const square = getSquareById(this.squares, w);
          if (square) {
            square.win = true;
          }
        });
      }
      const stalemate: boolean = checkStalemate(this.squares);
      if (stalemate) {
        this.gameOver = true;
      }
    },

    nextTurn() {
      this.turn = (this.turn === SquareValue.x) ? SquareValue.o : SquareValue.x;
    },

    newGame() {
      this.turn = SquareValue.x;
      this.gameOver = false;
      this.winner = SquareValue.empty;
      this.squares.forEach(s => {
        s.value = SquareValue.empty;
        s.win = false;
      });
    }

  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.board {
  width: 613px;
  margin: auto;
}
.flex-spread {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
}
.newGame > * {
  margin: auto;
}
</style>
