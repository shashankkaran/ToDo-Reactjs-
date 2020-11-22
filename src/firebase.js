// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from 'firebase';
  var firebaseApp = firebase.initializeApp({ 

            apiKey: "AIzaSyCmqWpInPdvfJBcuS6Cl1pz8EWvzFXozDE",
        authDomain: "todoo-app-99.firebaseapp.com",
        databaseURL: "https://todoo-app-99.firebaseio.com",
        projectId: "todoo-app-99",
        storageBucket: "todoo-app-99.appspot.com",
        messagingSenderId: "609566403562",
        appId: "1:609566403562:web:9ca7107fb93c26ed94a093",
        measurementId: "G-VV6QWYRWTM"
      

   });

   const db = firebaseApp.firestore();
   export default db;



