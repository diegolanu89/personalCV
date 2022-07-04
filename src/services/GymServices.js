import firebase from "../firebase.js";
import { collection, getDoc, getDocs, setDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore/lite';
import { auth } from "../firebase";

import { ejercicios_default } from '../defaults/ejercicios'
import { rutinas_default } from '../defaults/rutinas'
import { ficha_default } from '../defaults/ficha'

class GymServices {

  async initUser(user) {
    await setDoc(doc(firebase, user, "datos"), {})
    await setDoc(doc(firebase, user, "registros"), {})
    await setDoc(doc(firebase, user, 'ficha'), ficha_default)
  }

  async initEjercicios(user) {
    try {
      for (let i = 0; i < ejercicios_default.length; i++) {
        await setDoc(doc(doc(firebase, user, 'datos'), 'ejercicios', ejercicios_default[i].nombre), ejercicios_default[i])
      }
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async initRutinas(user) {
    try {
      for (let i = 0; i < rutinas_default.length; i++) {
        await setDoc(doc(doc(firebase, user, 'datos'), 'rutinas', rutinas_default[i].nombre), rutinas_default[i])
      }
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
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

  async getEjercicios() {
    try {
      const snapshot = await getDocs(collection(doc(firebase, auth.currentUser.email, 'datos'), 'ejercicios'));
      const list = snapshot.docs.map(doc => doc.data());
      return list;
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async getRutinas() {
    try {
      const snapshot = await getDocs(collection(doc(firebase, auth.currentUser.email, 'datos'), 'rutinas'));
      const list = snapshot.docs.map(doc => doc.data());
      return list;
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async getEjercicio(id) {
    try {
      const ejercicio_user = await getDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), 'ejercicios', id))
      return ejercicio_user.data()
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }



  async addEjercicio(ejercicio) {
    try {
      return setDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), "ejercicios", ejercicio['nombre']), ejercicio);
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async deleteEjercicio(id) {
    try {
      return deleteDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), "ejercicios", id));
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async updateEjercicio(id, value) {
    try {
      return updateDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), "ejercicios", id), value);
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async addRutina(rutina) {
    try {
      return setDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), "rutinas", rutina['nombre']), rutina);
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

  async deleteRutina(id) {
    try {
      return deleteDoc(doc(doc(firebase, auth.currentUser.email, 'datos'), "rutinas", id));
    } catch (err) {
      throw new Error("Error de acceso a la base de datos");
    }
  }

}

export default new GymServices();