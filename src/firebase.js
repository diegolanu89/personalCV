import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyBtMejMt4xmfdIILHzMeBLpzG_MESSGD7o",
    authDomain: "apet-b9ef9.firebaseapp.com",
    databaseURL: "https://apet-b9ef9-default-rtdb.firebaseio.com",
    projectId: "apet-b9ef9",
    storageBucket: "apet-b9ef9.appspot.com",
    messagingSenderId: "1047907139265",
    appId: "1:1047907139265:web:fa2666354afa6d09c51e40"
  };

  const app = initializeApp(config);

  

  export default getFirestore(app)
  export const auth = getAuth(app);
  export const firebaseConfig = config;