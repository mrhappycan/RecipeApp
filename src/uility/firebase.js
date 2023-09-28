import firebase, {initializeApp} from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLxlFBo2oSDLLBNk5LA9gIgFB9jRN5WTI",
    authDomain: "recipeapprn-98343.firebaseapp.com",
    projectId: "recipeapprn-98343",
    storageBucket: "recipeapprn-98343.appspot.com",
    messagingSenderId: "685443758860",
    appId: "1:685443758860:web:6794390a0718e1a486e729",
    measurementId: "G-C1CH1ZGW58"
  };

if(firebase.apps.length == 0){
    const app = initializeApp(firebaseConfig)
}

export {auth}