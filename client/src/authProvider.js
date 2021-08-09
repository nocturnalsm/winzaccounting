import firebase from 'firebase';
import { FirebaseAuthProvider } from 'react-admin-firebase';

const config = {
    apiKey: "AIzaSyA5AKpRAeLHNf5OJj29D-fO8V_JwZhAJLY",
    authDomain: "winz-accounting.firebaseapp.com",
    projectId: "winz-accounting",
    storageBucket: "winz-accounting.appspot.com",
    messagingSenderId: "907042986836",
    appId: "1:907042986836:web:37608328ce064856fa86c1",
    measurementId: "G-N17W4FELQE"
};

firebase.initializeApp(config);

const authProvider = FirebaseAuthProvider(config);

export default authProvider;
