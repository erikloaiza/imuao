import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDX3XfOXAfEbLOyXY-khxYBlcMD3996XE0",
    authDomain: "imuao-administrador.firebaseapp.com",
    databaseURL: "https://imuao-administrador.firebaseio.com",
    projectId: "imuao-administrador",
    storageBucket: "imuao-administrador.appspot.com",
    messagingSenderId: "1000065554199"
  };
  
  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.database = app.database();
      this.data = '';
    }
      // *** Auth API ***

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doFetchData = (ref) => 
      this.database.ref(ref).once('value').then(snapshot => this.data = snapshot.val()
    );

    /*Data management logic*/ 

    getData(){
      return this.data;
    }

  }
  
  export default Firebase;