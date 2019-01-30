import React, {Component} from 'react';
//import firebase from 'https://www.gstatic.com/firebasejs/4.6.2/firebase.js'
import './Content.css';

class App extends Component {
  render() {
    return (<div>
      <div className="card" id="login">
        <h2>Login</h2>
        <input type="text" placeholder="ID" id="id"/>
        <button id="submit">Submit</button>
      </div>
      <div className="card" id="vertretung">
        <h2>Vertretungsplan</h2>
      </div>
      <div className="card" id="events">
        <h2>Events</h2>
        <iframe frameborder="0" style={{
            width: '100%',
            heigth: '100%'
          }} title="Vertretungsplan" src="https://docs.google.com/spreadsheet/pub?key=0Ahx1h1vcW-LCdFJONlUxbUpEN1o5NW40THBpRi16YkE&amp;output=html&amp;widget=true"></iframe>
      </div>
      <div className="card">
        <h2>Tasks</h2>
        <p id="tasks"></p>
      </div>
      <div id="form" className="card">
        <button onclick="send()" id="send" type="submit">+ Add</button>
        <input id="n" placeholder="Date" type="date"/>
        <input id="txt" maxlength="70" placeholder="Task" type="text"/>
      </div>
      <div className="toast">
        <p id="ttxt"></p>
      </div>
    </div>);
  }
}

var vertretungsplanView = {
  init: () => {
    var datum = new Date();
    var today = datum.getDay();
    var std = datum.getHours();
    if (std > 15) {
      today = today + 1
    };
    var thedayafter = today + 1;
    if (today < 1) {
      today = 1;
      thedayafter = 2;
    }
    if (today > 4) {
      thedayafter = 1;
    }
    if (today > 5) {
      today = 1;
      thedayafter = 2;
    }
    var v = document.getElementById('vertretung');
    v.innerHTML += '<iframe width="100%" height="465" frameborder="0" src="https://docs.google.com/spreadsheet/pub?hl=de&hl=de&key=0Ahx1h1vcW-LCdEJ2ZWdOWWhzdVBtazZ5RXdKVld5Zmc&single=true&gid=' + today + '&range=A2%3AAI26&output=html&gridlines=false&widget=false&chrome=false"></iframe>';
    v.innerHTML += '<iframe width="100%" height="480" frameborder="0" src="https://docs.google.com/spreadsheet/pub?hl=de&hl=de&key=0Ahx1h1vcW-LCdEJ2ZWdOWWhzdVBtazZ5RXdKVld5Zmc&single=true&gid=' + thedayafter + '&range=A2%3AAI26&output=html&gridlines=false&widget=false&chrome=false"></iframe>';

  }
};

var tasksView = {
  init: () => {
    let i = 0;
    document.getElementById('tasks').innerHTML = '';
    model.user.REF.on('child_added', data => {
      let chat = data.val();
      let tabl = document.getElementById('out');
      tabl.innerHTML += `<div id=${chat.task}><br>${chat.task} to ${chat.date}<hr><button onclick=octopus.remove(${chat.task})></button></div>`;
      i++;
    }, error => {
      alert(error.code);
    });
  }
}

var model = {
  config: {
    apiKey: 'AIzaSyD26NfyVG8pZLLPiHvbaRppXt9iVxb3eYE',
    authDomain: 'happybirthdaymylib.firebaseapp.com',
    databaseURL: 'https://happybirthdaymylib.firebaseio.com',
    projectId: 'happybirthdaymylib',
    storageBucket: 'happybirthdaymylib.appspot.com',
    messagingSenderId: '911055983258'
  },
  user: {}
}

var octopus = {
  init: () => {
    vertretungsplanView.init();
    document.getElementById('submit').addEventListener('click', () => {
      octopus.signin();
    })
  },
  remove: (i) => {
    var task = document.getElementById(i);
    model.user.REF.child(model.user.REF).remove(function(error) {});
  },
  save: () => {
    /*if (n.value !== '' && txt.value !== '') {
      let msg = txt.value;
      document.getElementById('txt').value = '';
      document.getElementById('n').value = '';
      /*firebase
        .database()
        .ref(model.user.REF)
        .push({task: msg})
        .key;
    }*/
  },
  toast: (user, msg = 'undefined') => {
    let obj = document.getElementsByClassName('toast')[0];
    let text = document.getElementById('ttxt');
    text.innerHTML = msg;
    obj.style.display = 'inline';
    setTimeout(() => {
      obj.style.display = 'none';
    }, 2000);
  },
  signin: () => {
    const ID = model.user.ID = document.getElementById('id').value;
    /*firebase.database().ref('/users/' + ID).on('value', function(snapshot) {
      if (snapshot.exists()) {
        console.log('Sign in succesfull');
        model.user.REF = firebase.database().ref('/users/' + ID + '/task/');
        tasksView.render();
        document.getElementById('login').style.display = 'none';
      } else {
        console.log('Sign in failed, unknown user');
      }
    });*/
  }
}

window.onload = () => {
  octopus.init();
  //firebase.initializeApp(model.config);
}
// ABwppHHStbsmaNtbMCk4FFjGquFRTe1v5Tvw6QSc4wrXIm4YZPgCiph2b9SJxGg0wEHxmfBv0MfdPRp-Sz9_L888
//
export default App;
