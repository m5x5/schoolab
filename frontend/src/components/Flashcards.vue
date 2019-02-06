<template>
<div class="">
  <h2>Flashcards</h2>
  <div id="card">
    <button @click="remove">Remove</button>
    <p>Score: {{score}}</p>
    <h2 id="card-title">{{title}}</h2>
    <form>
      <input type="text" v-model="input">
      <button @click="check">Submit</button>
    </form>
  </div>
</div>
</template>

<script type="text/javascript">
// Simulated Mongodb flashcard object
let flashcards = {
  'animals': [
    ['tiger', 'Tiger'],
    ['lion', 'Löwe']
  ],
  'devices': [
    ['tablet', 'Tablet'],
    ['mobile', 'Handy']
  ]
}

const group = 'animals'

export default {
  name: 'Flashcards',
  data() {
    return {
      groups: Object.keys(flashcards),
      input: '',
      title: flashcards[group][0][0],
      coins: 0,
      score: 0,
      count: 0
    }
  },
  methods: {
    check(e) {
      e.preventDefault();
      if (this.input === flashcards[group][this.count][1]) {
        alert('true');
        this.input = '';
        this.count++;
        this.coins++;
      } else {
        this.input = '';
        alert('false');
        alert('the correct answer was: ' + flashcards[group][this.count][1]);
        this.coins--;
      }
      if (this.count === flashcards[group].length) {
        this.count = 0;
      }
      this.render();

    },
    remove() {
      flashcards[group].splice(this.count, 1);
      flashcards[group].splice(this.count, 1);
      this.count++;
      this.render();
    },
    init() {
      this.render();
    },

    render() {
      this.score = this.coins;
      this.title = flashcards[group][this.count][0]
    }
  }
}
</script>

<style media="screen">
#card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
  font-size: 36px;
  font-weight: 400;
}

p {
  margin: 0;
  text-align: right;
  font-size: 2vmin;
}

h2 {
  font-weight: 400;
}
</style>
