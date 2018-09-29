import firebase from "firebase";
import firestore from "firebase/firestore";

var config = {
  apiKey: "AIzaSyBwp9fNKHKfCz4S0kFesCWVso8JCIqIeoQ",
  authDomain: "ninja-chat-8cbdd.firebaseapp.com",
  databaseURL: "https://ninja-chat-8cbdd.firebaseio.com",
  projectId: "ninja-chat-8cbdd",
  storageBucket: "",
  messagingSenderId: "391407378260"
};

var firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
