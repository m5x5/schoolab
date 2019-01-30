let model = {
  config: {
    apiKey: 'AIzaSyD26NfyVG8pZLLPiHvbaRppXt9iVxb3eYE',
    authDomain: 'happybirthdaymylib.firebaseapp.com',
    databaseURL: 'https://happybirthdaymylib.firebaseio.com',
    projectId: 'happybirthdaymylib',
    storageBucket: 'happybirthdaymylib.appspot.com',
    messagingSenderId: '911055983258'
  },
  user: {},
};

let mainView = {
  add: () => {
    let i = 0;
    document.getElementById('out').innerHTML = '';
    model.user.REF.on('child_added', data => {
      let chat = data.val();
      let tabl = document.getElementById('out');
      tabl.innerHTML += task.notmaked;
      i++;
    },
      error => {
        alert(error.code);
      }
    );
  },
};

let octopus = {
  init: () => {

  },
  saveTask: () => {
    if (n.value !== '' && txt.value !== '') {
      let msg = txt.value;
      document.getElementById('txt').value = '';
      document.getElementById('n').value = '';
      firebase.database().ref(user.REF).update({
        task: msg
      }).key;
    }
  },
  getStudentId: (url) => {
    let name = 'id';
    url = url || window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return 0;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ''));
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
  signinTeacher: () => {
    const ID = model.teacher.ID = document.getElementById('id').value;
    firebase.database().ref('/users/' + ID + '/teacher').on('value', function (snapshot) {
      if (snapshot.exists()) {
        console.log('Sign in succesfull');
        model.user.REF = firebase.database().ref('/users/' + ID + '/task/');
        octopus.add();
        document.getElementById('login').style.display = 'none';
      } else {
        console.log('Sign in failed, unknown user');
      }
    });
  },
  signinStudent: () => {
    const ID = model.student.ID = octopus.getStudentId();
    firebase.database().ref('/users/' + ID).on('value', function (snapshot) {
      if (snapshot.exists()) {
        console.log('Sign in succesfull');
        model.user.REF = firebase.database().ref('/users/' + ID + '/task/');
        octopus.add();
        document.getElementById('login').style.display = 'none';
      } else {
        console.log('Sign in failed, unknown user');
      }
    });
  },
};

onload = () => {
  octopus.init();
  firebase.initializeApp(model.config);
};
// ABwppHHStbsmaNtbMCk4FFjGquFRTe1v5Tvw6QSc4wrXIm4YZPgCiph2b9SJxGg0wEHxmfBv0MfdPRp-Sz9_L888
