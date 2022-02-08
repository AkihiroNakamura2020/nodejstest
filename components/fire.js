import firebase from 'firebase'

// ☆各プロジェクトの設定を記述
const firebaseConfig = {
  apiKey: "AIzaSyDJrEF1CMG3_HEnb_UNDXR4_5kjKuDcVWI",
  authDomain: "my-first-react-project-7b432.firebaseapp.com",
  //databaseURL: "https://firebase.google.com/docs/web/setup#available-libraries", 
  projectId: "my-first-react-project-7b432",
  storageBucket: "my-first-react-project-7b432.appspot.com",
  messagingSenderId: "626368738203",
  appId: "1:626368738203:web:b6da43a852f821f5e1a73e"
}

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}
