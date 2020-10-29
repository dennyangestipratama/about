import firebase from 'firebase/app';
import 'firebase/database'
const firebaseConfig = {
   apiKey: "AIzaSyCm0Jf1SCbnL0nb6fl_QWXu6VcvM-Rirwc",
   authDomain: "dennyangestipratama.firebaseapp.com",
   databaseURL: "https://dennyangestipratama.firebaseio.com",
   projectId: "dennyangestipratama",
   storageBucket: "dennyangestipratama.appspot.com",
   messagingSenderId: "846412495398",
   appId: "1:846412495398:web:79b51b002415c9eadcc4e7",
   measurementId: "G-H3D4E8XVQL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const Database = firebase.database()
export default firebase;