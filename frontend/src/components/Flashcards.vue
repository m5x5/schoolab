<template>
<div class="">
  <h2>Flashcards</h2>
  <div id="card">
    <button @click="remove">Remove</button>
    <p>Score: {{score}}</p>
    <h2 id="card-title">{{title}}</h2>
    <p id="card-text">{{input}}</p>
    <input type="text" v-model="input">
    <button @click="check">Submit</button>
  </div>
</div>
</template>

<script type="text/javascript">
let model = {
  spanishVocab: {
    spanish: ['die Lektion', "un", "l\'entrée", 'le texte', 'l\'atelier', 'sur place'],
    german: ['die Lektion', 'eins', 'der Eingang', 'der Text', 'die Werkstatt', 'vor Ort'],
  },
}
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

export default {
  name: 'Flashcards',
  data() {
    return {
      groups: Object.keys(flashcards),
      input: '',
      title: model.spanishVocab.german[0],
      coins: 0,
      score: 0,
      count: 0
    }
  },
  methods: {
    check() {
      console.log(this.input)
      if (this.input == model.spanishVocab.spanish[this.count]) {
        alert('true');
        this.input = '';
        this.count++;
        this.coins++;
      } else {
        this.input = '';
        alert('false');
        alert('the correct answer was: ' + model.spanishVocab.spanish[this.count]);
        this.coins--;
      }
      if (model.count > model.spanishVocab.german.length - 1) {
        model.count = 0;
      }
    },
    remove () {
      model.spanishVocab.spanish.splice(this.count, 1);
      model.spanishVocab.german.splice(this.count, 1);
      this.count++;
      this.render();
    },
    init () {
      this.render();
    },

    render() {
      this.score = this.coins;
      this.title = model.spanishVocab.german[model.count];
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
}

p {
  margin: 0;
  text-align: right;
  font-size: 2vmin;
}
</style>
