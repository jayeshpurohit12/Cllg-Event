import firebase from "firebase";
import "firebase/auth";

var config=({
  apiKey: "AIzaSyCu_-Rq44Pmqd-i3_C1wlYHj9iK33N6L5Q",
  authDomain: "event-site-885c6.firebaseapp.com",
  projectId: "event-site-885c6",
  storageBucket: "event-site-885c6.appspot.com",
  messagingSenderId: "619838610667",
  appId: "1:619838610667:web:ed9f008b2213eb777b32ae",
  measurementId: "G-40LP0E0MCV"
  });
var app=firebase.initializeApp(config);
const dbs= firebase.firestore(app);
const storage = firebase.storage();
export default app;
export const auth=firebase.auth();
export const provider=new firebase.auth.GoogleAuthProvider();
export{dbs,storage};