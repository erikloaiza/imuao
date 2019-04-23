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
      this.setGroupedDataAndAcumulateSkills();
      this.setLastViews(3);
    }

    /*Data Transformations*/
    setTotalProfiles(){
      this.totalProfiles = Object.keys(this.data).length;
    }
    setGroupedDataAndAcumulateSkills(){
      console.log('setSkillsTags not finished yet: prom not implemented');
      
      var skills = {}
      var groupedData = {A:{},B:{},C:{},D:{},E:{},F:{},G:{},H:{},I:{},J:{},K:{},L:{},M:{},N:{},O:{},P:{},Q:{},R:{},S:{},T:{},U:{},V:{},X:{},Y:{},Z:{},'-':{}};
      
      for (var key in this.data) {
        if (this.data.hasOwnProperty(key)) { //We look for every skills in every profile
          var firstCharacter = this.data[key].name.toUpperCase().charAt(0);
          groupedData[firstCharacter][key] = this.data[key];
          if(this.data[key].hasOwnProperty('skills')){
            for (var skill in this.data[key].skills) {
              skills[skill] = this.data[key].skills[skill]; //Then we accumulate to calculate the prom latter/
             }
          }
        }
      }
      this.profiles = groupedData;
      this.skillTags= skills;
      this.setSkillsPromAndColors();
    }
    setSkillsPromAndColors(){
      for (var key in this.skillTags){
        if (this.skillTags.hasOwnProperty(key)) { //We look for every skills if exist
          this.skillTags[key] = {prom:this.skillTags[key]/this.totalProfiles,color:this.randomColor()}; //Then we calculate the prom around all users and set the color/
        }
      }
    }
    setLastViews(total){
      console.log('Las views are retrieved randomically set by looking at data');
      var ac = 1;
      var views = {}
      const shuffledArray = Object.keys(this.data).sort(() => Math.random() - 0.5);
      for (var key in shuffledArray) {
        console.log(shuffledArray[key])
        views[shuffledArray[key]] = this.data[shuffledArray[key]];
        ac++
        if(ac>total)break;
      }
      this.lastViews = views;
    }
    /*End of Data Transformations*/
    
    /*Utilities*/
    randomColor(){
      //return '#'+Math.floor(Math.random()*16777215).toString(16);
      var h = 1 + Math.random()*(1, 360);
      var s = 100;
      var l = 50;
      return 'hsl(' + h + ',' + s + '%,' + l + '%)';
    }
    /*End of Utilites*/
  }
  
  export default Firebase;