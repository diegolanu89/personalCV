import firebase from "../firebase.js";
import { collection, getDoc, getDocs, setDoc, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore/lite';
import { auth } from "../firebase";
//import { throwError } from "rxjs";


class DietServices {

  async addCalendarEventDiet(evento) {
    return setDoc(doc(doc(firebase, auth.currentUser.email, 'registros'), "dieta", evento['date']), evento);
  }

  async getEventCalendarPerMonth(loading, fecha) {
    if (loading !== null)
      loading(null, 50, 70, 5)
    var mes = ''
    if ((fecha.getMonth() + 1) < 10) {
      mes = '0' + (fecha.getMonth() + 1)
    } else mes = (fecha.getMonth() + 1)
    var anio = fecha.getFullYear().toString();
    try {
      const q = query(collection(doc(firebase, auth.currentUser.email, 'registros'), 'dieta'), where('año', '==', anio));
      const q2 = query(q, where('mes', '==', mes))
      const querySnapshot = await getDocs(q2);
      return querySnapshot.docs.map(doc => doc.data())
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }

  }

  async getEventComida(id) {
    try {
      const event = await getDoc(doc(doc(firebase, auth.currentUser.email, 'registros'), 'dieta', id))
      return event.data()
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async deleteComida(id) {
    try {
      return deleteDoc(doc(doc(firebase, auth.currentUser.email, 'registros'), "dieta", id));
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async updateComida(id, value) {
    try {
      return updateDoc(doc(doc(firebase, auth.currentUser.email, 'registros'), "dieta", id), value);
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }



}

export default new DietServices();