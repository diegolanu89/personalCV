import firebase from "../firebase.js";
import { collection, getDoc, getDocs, setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
import { auth } from "../firebase";
import { ficha_default } from '../defaults/ficha'

class CVServices {

  async initUser(user) {
    await setDoc(doc(firebase, user, "datos"), {})
    //await setDoc(doc(firebase, user, "registros"), {})
    await setDoc(doc(firebase, user, 'ficha'), ficha_default)
  }

  async updateFicha(data) {
    try {
      return updateDoc(doc(firebase, auth.currentUser.email, 'ficha'), data);
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async getFicha() {
        try {
          const ficha_data = await getDoc(doc(firebase, auth.currentUser.email, 'ficha'))
          return ficha_data.data()
        } catch (err) {
          throw new Error("Error de acceso a la base de datos");
       }
     }

}

export default new CVServices();