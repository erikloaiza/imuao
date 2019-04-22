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

      /*data handlers*/
      this.data = '';

      this.totalProfiles=0;
      this.skillTags='';
      this.lastViews='';
    }
      // *** Auth API ***

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doFetchData = (ref) => 
      this.database.ref(ref).once('value').then(snapshot => this.data = snapshot.val()
    );

    /*Data management logic*/ 
    /*transformData is called after the data is retrieved by the server*/
    transformData(){
      this.setTotalProfiles();
      this.setSkillsTags();
      this.setLastViews(3);
      return this.data;
    }

    /*Data Transformations*/
    setTotalProfiles(){
      this.totalProfiles = Object.keys(this.data).length;
    }
    setSkillsTags(){
      console.log('setSkillsTags not finished yet: prom not implemented');
      var skills = {}
      for (var key in this.data) {
        if (this.data.hasOwnProperty(key) & this.data[key].hasOwnProperty('skills')) { //We look for every skills in every profile
          for (var skill in this.data[key].skills) {
            skills[skill] = this.data[key].skills[skill]; //Then we concatenate those ones /Here we can do the prom/
           }
        }
      }
      this.skillTags= skills;
    }
    setLastViews(total){
      console.log('Las views are retrieved randomically set by looking at data');
      var ac = 0;
      var views = {}
      for (var key in this.data) {
        views[key] = this.data[key];
        ac++
        if(ac>views)break;
      }
      this.lastViews = views;
    }
    /*End of Data Transformations*/
    
  }
  
  export default Firebase;