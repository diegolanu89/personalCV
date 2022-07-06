import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBZPwx4XXfBLKpP5N06-e-e2BgMT_y60xs",
  authDomain: "cvap-a4421.firebaseapp.com",
  databaseURL: "https://cvap-a4421.firebaseio.com",
  projectId: "cvap-a4421",
  storageBucket: "cvap-a4421.appspot.com",
  messagingSenderId: "181743011112",
  appId: "1:181743011112:web:4272f0486efa192d45bc1d"
  };

  const app = initializeApp(config);

  

  export default getFirestore(app)
  export const auth = getAuth(app);
  export const firebaseConfig = config;