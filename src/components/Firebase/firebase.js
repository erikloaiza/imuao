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

      this.profiles= '';
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

    /*Get Methods*/
      getTotalProfiles(){
        return this.totalProfiles;
      }
      getSkillTags(){
        return this.skillTags;
      }
      getLastViews(){
        return this.lastViews;
      }
      getProfiles(){
        return this.profiles;
      }
    /*End of Get Methods*/

    /*Data management logic*/ 
    /*transformData is called after the data is retrieved by the server*/
    transformData(){
      this.setTotalProfiles();
      this.setSkillsTagsAndGroupedData();
      this.setLastViews(3);
    }

    /*Data Transformations*/
    setTotalProfiles(){
      this.totalProfiles = Object.keys(this.data).length;
    }
    setSkillsTagsAndGroupedData(){
      console.log('setSkillsTags not finished yet: prom not implemented');
      
      var skills = {}
      var groupedData = {A:{},B:{},C:{},D:{},E:{},F:{},G:{},H:{},I:{},J:{},K:{},L:{},M:{},N:{},O:{},P:{},Q:{},R:{},S:{},T:{},U:{},V:{},X:{},Y:{},Z:{},'-':{}};
      
      for (var key in this.data) {
        if (this.data.hasOwnProperty(key)) { //We look for every skills in every profile
          var firstCharacter = this.data[key].name.toUpperCase().charAt(0);
          groupedData[firstCharacter][key] = this.data[key];
          if(this.data[key].hasOwnProperty('skills')){
            for (var skill in this.data[key].skills) {
              skills[skill] = {prom:this.data[key].skills[skill],color:this.randomColor()}; //Then we concatenate those ones /Here we can do the prom/
             }
          }
        }
      }
      this.profiles = groupedData;
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
    
    /*Utilities*/
    randomColor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
    /*End of Utilites*/
  }
  
  export default Firebase;