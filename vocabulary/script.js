var storyView = {
  init: () => {
    txt = document.getElementById('story');
    document.getElementById('nextbtn').style.display = 'block';
    for (stp = 0; stp < 2; stp++) {
      document.getElementsByClassName('start')[stp].style.display = 'none';
    }
    txt.innerHTML = `Its been two weeks after 'those' thing show up and cause my whole live ruined , my whole family .... die one by one ..... and all i can do is just stand beside them helplessly ,seing them been eaten and become one of them ....... 'Run for your live' this selfish action make me regret leaving them behind without trying to protect them ..... Now i wonder why i didn't stay there and die with all of them as i will not suffer this much and strugle to live in a world with those who suppose to lay down in a hard wodden box burried underground ...`;
  }
};

var homeView = {
  init: () => {
    document.getElementsByClassName('forest')[0].style.display = 'none';
    document.getElementsByClassName('home')[0].style.display = 'none';
    document.getElementsByClassName('resident')[0].style.display = 'home';
    for (stp = 0; stp < 4; stp++) {
      document.getElementsByClassName('home')[stp].style.display = 'block';
    }
    document.getElementsByClassName('navbar')[0].style.display = 'flex';
    document.getElementById('fences').style.display = 'block';
    document.getElementById('campfire').style.display = 'block';
    document.getElementById('trapup').style.display = 'block';
    document.getElementById('watercollectorbtn').style.display = 'block';
  }
};

var infoView = {
  init: () => {
    swal({
      title: 'Credits',
      text: 'I created the project with ValentinHacker and LeonLit \n The images are from Evolve Wallpapers',
      type: 'info',
      confirmButtonText: 'CLOSE'
    });
  }
};

var signinView = {
  init: () => {
    // Andere Szenen aublenden
    document.getElementsByClassName('forest')[0].style.display = 'none';
    document.getElementsByClassName('resident')[0].style.display = 'none';
    document.getElementsByClassName('home')[0].style.display = 'none';

    for (stp = 0; stp < 3; stp++) {
      document.getElementsByClassName('signin')[stp].style.display = 'inline-block';
    }
  },
};

var createUser = {
  init: () => {
    swal({
      title: 'In work',
      text: 'Sorry this feature isn\'t avaible now please stay turned on!',
      type: 'info',
      confirmButtonText: 'Okay'
    });
  }
};

var gamestart = {
  init: () => {
    for (stp = 0; stp < 2; stp++) {
      document.getElementsByClassName('story')[stp].style.display = 'none';
    }

    document.getElementsByTagName('a')[1].style.display = 'none';
    document.getElementsByTagName('a')[2].style.display = 'none';
    home();

    swal({
      title: 'INTRODUCTION',
      text: 'Well here I am in a dark lonely house.',
      showCancelButton: true,
      confirmButtonText: 'NEXT',
      closeOnConfirm: false,
      allowOutsideClick: false,
    },
      () => {
        swal('INTODUCTION', 'What can I do to continue live in this terrible world');
      });
    watercltup = document.getElementById('watercollectorbtn');
    campfire = document.getElementById('campfire');
    crafttxt = document.getElementById('craft');
    fencesup = document.getElementById('fences');
    trapup = document.getElementById('trapup');
    woodsnum = document.getElementById('woods');
    foodsnum = document.getElementById('foods');
    waternum = document.getElementById('water');
    verteidigungtext = document.getElementById('verteidigung');
    trapnum = document.getElementById('trap');
    clothnum = document.getElementById('cloth');
    torch = document.getElementById('torch');
    watercltnum = document.getElementById('watercollecter');

    setInterval(() => {
      woodsnum.innerHTML = 'Woods : ' + woods;

      woods++;
    }, 5500); // 5.5 seconds

    setInterval(function () {
      foodsnum.innerHTML = 'Foods : ' + --food;

      waternum.innerHTML = 'Water : ' + --water;
    }, 120000);

    setInterval(() => {
      woodsnum.innerHTML = 'Woods : ' + woods;
      verteidigungtext.innerHTML = 'Defences : ' + model.defense;
      clothnum.innerHTML = 'Cloth : ' + cloth;
      foodsnum.innerHTML = 'Foods : ' + food;
      waternum.innerHTML = 'Water : ' + water;
      watercltnum.innerHTML = 'Water Collector : ' + waterclt;
      trapnum.innerHTML = 'Trap : ' + trap;
      torch.innerHTML = 'Torch : ' + torchnum;
    }, 1000);
    // make a food generator with trap
    setInterval(() => {
      if (trap > 0) {
        food = food + (trap * 1);
        foodsnum.innerHTML = 'Foods : ' + food;
      }

      if (waterclt > 0) {
        water = water + (waterclt * 1);
        waternum.innerHTML = 'Water : ' + water;
      }
    }, 20000); // 2 minute

    // make the trap broke once a while
    setInterval(() => {
      var num = Math.floor(Math.random() * 2);
      if (trap > 0 && num > 0) {
        trap--;
        swal({
          title: 'DESTROYED',
          text: 'One of your trap is broken.',
          type: 'warning',
          confirmButtonText: 'Okay'
        });
        comfort -= 10;
      }
    }, 40000); // 4 Minutes

    // Wald freischalten
    setTimeout(() => {

      swal({
        title: 'FOREST',
        text: 'While you`re wandering near your window you found out that there`s a forest near your safe house',
        showCancelButton: true,
        confirmButtonText: 'NEXT',
        closeOnConfirm: false,
        allowOutsideClick: false,
      },
        () => {
          swal('FOREST', 'Hmm... I think I can find many woods there');
        });
      document.getElementsByTagName('a')[1].style.display = 'inline';
    }, 30000); // 30 Seconds

    // Resident freischalten
    setTimeout(() => {
      swal({
        title: 'RESIDENT',
        text: 'While you`re collecting some woods you saw some abandoned house near your safe house ',
        showCancelButton: true,
        confirmButtonText: 'NEXT',
        closeOnConfirm: false,
        allowOutsideClick: false,
      },
        () => {
          swal('RESIDENT', 'ME : Maybe i can find some food and water there .....oh and some cloth i guess');
        });
      document.getElementsByTagName('a')[2].style.display = 'inline';
    }, 100000); // 1 Minute
  }
};
var forestView = {
  init: () => {
    document.getElementsByClassName('home')[0].style.display = 'none';
    document.getElementById('forestlist').style.display = 'block';

    for (stp = 0; stp < 3; stp++) {
      document.getElementsByClassName('forest')[stp].style.display = 'block';
    }

    crafttxt = document.getElementById('craft');
    crafttxt.style.display = 'none';

    for (stp = 0; stp < 2; stp++) {
      document.getElementsByClassName('home')[stp].style.display = 'none';
    }
    for (stp = 0; stp < document.getElementsByClassName('upgrade').length; stp++) {
      document.getElementsByClassName('upgrade')[stp].style.display = 'none';
    }

    for (stp = 0; stp < 4; stp++) {
      document.getElementsByClassName('resident')[stp].style.display = 'none';
    }
  }
}
/**********************
Wald suche 
**********************/
var forestsearchView = {
  init: () => {
    if (document.getElementsByTagName('progress')[0].value == 0) {
      var woodstxt = document.getElementById('woods');
      var residenttext = document.getElementById('residenttxt');
      var collectwoodbtn = document.getElementById('forestsearchbtn');
      collectwoodbtn.style.opacity = '0.5';

      var collectthing = setInterval(function () {
        if (document.getElementsByTagName('progress')[0].value <= 100) {

          document.getElementsByTagName('progress')[0].value++;
        }

        if (document.getElementsByTagName('progress')[0].value == 100) {

          collectwoodbtn.style.opacity = '1';
          swal({
            title: 'Finished',
            text: 'You finished searching in the forest',
            type: 'success',
            confirmButtonText: 'Okay!'
          })

          if (woodstxt.style.display == 'none' && residenttext.style.display == 'none') {
            collectwoodbtn.style.display = 'block';
          }

          document.getElementsByTagName('progress')[0].value = 0;
          clearInterval(collectthing);

          var ranfood = Math.round(Math.random() * (5 - 1) + 1);
          var ranwoods = Math.round(Math.random() * (20 - 10) + 10);
          var ranwater = Math.round(Math.random() * (5 - 1) + 1);
          var rancloth = Math.round(Math.random() * (6 - 2) + 2);

          food += ranfood;
          water += ranwater;
          woods += ranwoods;
          cloth += rancloth;

        }
      }, 500);
    }
  }
}
/**********************
Resident 
**********************/
var resident = {
  init: () => {
    document.getElementsByClassName('home')[0].style.display = 'none';
    var searchbtn = document.getElementById('residentsearchbtn');
    document.getElementById('residentlist').style.display = 'block';
    crafttxt = document.getElementById('craft');
    crafttxt.style.display = 'none';

    for (stp = 0; stp < 2; stp++) {
      document.getElementsByClassName('home')[stp].style.display = 'none';
    }

    for (stp = 0; stp < 4; stp++) {
      document.getElementsByClassName('forest')[stp].style.display = 'none';
    }

    for (stp = 0; stp < 4; stp++) {
      document.getElementsByClassName('resident')[stp].style.display = 'block';
    }

  }
}

/**********************
Resident suche 
**********************/
var searchresidentView = {
  init: () => {
    if (document.getElementsByTagName('progress')[1].value == 0) {
      var woodstxt = document.getElementById('woods');
      resourcetxt = document.getElementById('forestlist');
      var searchbtn = document.getElementById('residentsearchbtn');
      searchbtn.style.opacity = '0.5';
      var collectthing = setInterval(() => {
        if (document.getElementsByTagName('progress')[1].value <= 100) {
          document.getElementsByTagName('progress')[1].value++;
        }

        if (document.getElementsByTagName('progress')[1].value == 100) {
          searchbtn.style.opacity = '1';
          swal({
            title: 'Finished',
            text: 'You finish searching the resident near your safe house.',
            type: 'success',
            confirmButtonText: 'Okay!'
          });

          if (woodstxt.style.visibility == 'hidden' && resourcetxt.style.visibility == 'hidden') {
            searchbtn.style.display = 'block';
          }
          document.getElementsByTagName('progress')[1].value = 0;
          clearInterval(collectthing);

          var ranfood = Math.round(Math.random() * (8 - 3) + 3);

          var ranwoods = Math.round(Math.random() * (20 - 10) + 10);

          var ranwater = Math.round(Math.random() * (10 - 5) + 5);

          var rancloth = Math.round(Math.random() * (15 - 5) + 5);

          food += ranfood;
          water += ranwater;
          woods += ranwoods;
          cloth += rancloth;

        }
      }, 500);
    }
  }
}

var model = {
  defense: 10,
  woods: 20,
  food: 10,
  water: 10,
  cloth: 30,
  comfort: 0,
  trap: 0,
  waterclt: 0,
  torchnum: 0,
  ID: ['story'],
};

var octopus = {
  money: () => {
    swal({
      title: 'FAILED',
      text: 'You haven\'t enough requierments',
      type: 'error',
      confirmButtonText: 'Okay'
    });
  },
  repfences: () => {
    if (model.woods >= 5) {
      model.woods -= 5;
      model.defense += 1;
      comfort += 2;
    } else {
      money();
    }
  },

  crafttorch: () => {
    if (woods >= 10) {
      model.woods -= 10;
      model.defense += 2;
      comfort += 10;
      torchnum++;
    } else {
      money();
    }
  },


  maketrap: () => {
    if (woods >= 20) {
      woods -= 20;
      model.defense += 5;
      comfort += 10;
      trap += 1;
    } else {
      money();
    }
  },

  //make a water collector for generating the water
  makewaterclt: () => {
    if (woods >= 50 && cloth >= 20) {
      woods -= 50;
      cloth -= 20;
      waterclt++;
      comfort += 10;
    } else {
      money();
    }
  },
};