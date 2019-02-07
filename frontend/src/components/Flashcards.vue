<template>
<div class="">
  <h2>Flashcards</h2>
  <div v-if="manager">
    <list :items="this.flashcards" @ondelete="deleteItem" @manager="manager = !manager"></list>
  </div>
  <div v-else>
    <div>Flashcards: {{flashcards.length}}</div>
    <button @click="manager = !manager">Manage Groups</button>
    <select v-model="selected" @change="change">
      <option value="" selected disabled hidden>Select a group</option>
      <option v-for="g in groups">{{g.name}}</option>
    </select>
    <div class="card">
      <p>Score: {{score}}</p>
      <h2 id="card-title">{{title}}</h2>
      <form>
        <input type="text" v-model="input">
        <button @click="check">Submit</button>
      </form>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
import List from './main/List.vue';
// Simulated Mongodb flashcard object
let flashcards = {
  'animals': [
    ['tiger', 'Tiger'],
    ['lion', 'Löwe']
  ],
  'devices': [
    ['tablet', 'Tablet'],
    ['mobile', 'Handy']
  ],
}
let finalFlashcards = [{
    'id': 1,
    'front': 'tiger',
    'group': 'animals'
  },
  {
    'id': 2,
    'front': 'tiger',
    'group': 'animals'
  },
];

let groups = [{
  'id': 1,
  'name': 'animals'
}]

let group = flashcards[Object.keys(flashcards)[0]];
const setGroup = name => group = flashcards[name];
export default {
  name: 'Flashcards',
  data() {
    return {
      groups: [{
        'id': 1,
        'name': 'animals'
      }, {
        'id': 2,
        'name': 'devices'
      }, {
        'id': 3,
        'name': 'school'
      }, {
        'id': 4,
        'name': 'shopping'
      }, {
        'id': 5,
        'name': 'freetime'
      }],
      input: '',
      title: '',
      coins: 0,
      score: 0,
      count: 0,
      selected: '',
      manager: false,
      flashcards: [{
          'id': 1,
          'front': 'tiger',
          'group': 'animals'
        },
        {
          'id': 2,
          'front': 'tiger',
          'group': 'animals'
        }
      ]
    }
  },
  components: {
    'list': List
  },
  methods: {
    check(e) {
      e.preventDefault();
      if (this.input === group[this.count][1]) {
        alert('true');
        this.input = '';
        this.count++;
        this.coins++;
      } else {
        this.input = '';
        alert('false');
        alert('the correct answer was: ' + group[this.count][1]);
        this.coins--;
      }
      if (this.count === group.length) {
        this.count = 0;
      }
      this.render();

    },

    render() {
      this.score = this.coins;
      this.title = group[this.count][0]
    },
    change() {
      setGroup(this.selected)
      this.render()
    },
    deleteItem(id) {
      this.flashcards = this.flashcards.filter(obj => obj.id != id)
    }
  },
  mounted() {
    this.score = this.coins;
    this.title = group[this.count][0]
  }
}
</script>

<style media="screen">
.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 10px;
  border-radius: 10px;
  font-size: 36px;
  font-weight: 400;
}

p {
  margin: 0;
  font-size: 2vmin;
}

h2 {
  font-weight: 400;
}
</style>
