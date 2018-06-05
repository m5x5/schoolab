var octopus = {
  init: () => {
    this.cardInputElem = document.getElementById('card-input');
    cardView.init();
  },
  render: () => {},
  check: () => {
    if(this.cardInputElem.value == model.spanishVocab.spanish[model.count]){
      alert('true');
      model.count++;
    } else {
      alert('false');
      alert('the correct answer was: ' + model.spanishVocab.spanish[model.count]);
    }
  },
  getCurrent: () => {}
}

var model = {
  count: 0,
  history: [
    'Sozialdarwinismus', 'Menscheit weißt unterschiedlich wertvolle Rassen auf', 
  ],
  spanishVocab: {
    spanish: ["hablar", "correr", "ir"],
    german: ['sprechen', 'laufen', 'gehen'],
  },
}

var cardView = {
  init: () => {
    this.cardElem = document.getElementById('card');
    this.cardScoreElem = document.getElementById('card-score');
    this.cardTitleElem = document.getElementById('card-title');
    this.cardButtonElem = document.getElementById('card-next');
    cardView.render();
    this.cardButtonElem.addEventListener('click', () => {
      octopus.check();
      if(model.count > model.spanishVocab.german.length - 1){
        model.count = 0; 
      }
      cardView.render();
    });
  },

  render: () => {
    this.cardScoreElem.innerHTML = model.count;
    this.cardTitleElem.innerHTML = model.spanishVocab.german[model.count];
  }
}
  
onload = () => {
  octopus.init();
}