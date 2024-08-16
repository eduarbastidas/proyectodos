import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const [data, setData] = useState(null);

useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/66ae78f2acd3cb34a86f748f')
        .then(response => response.json())
        .then(data => {
            setData(data.record);
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}, []);

const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
export default index;