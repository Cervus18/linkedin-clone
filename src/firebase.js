import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCQuyBJqVI8YT4MvTO_iem4ujnxHMM5HVU",
    authDomain: "linkedin-c8ee3.firebaseapp.com",
    projectId: "linkedin-c8ee3",
    storageBucket: "linkedin-c8ee3.appspot.com",
    messagingSenderId: "137028457757",
    appId: "1:137028457757:web:749ae102c592b107763df4"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth}