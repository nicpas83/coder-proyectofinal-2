import admin from 'firebase-admin'
import config from '../config'

var serviceAccount = config.firebase;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});



class ContenedorFirebase {

  constructor(nombreColeccion) {
    const db = admin.firestore();
    
    this.model = db.collection(nombreColeccion);


    console.log('asdasdasdasd', this.model)
  }

  async getAll() {
    const doc = await this.model.get();

    const data = doc.data();

    return { ...data, id };
  }

  async getById(id) {
    const doc = await this.coleccion.doc(id).get();

    const data = doc.data();

    return { ...data, id };
  }

  async create(data) {

    
    console.log('create')


  }

  async update(data, id) {

  }

  async deleteById(id) {

  }

}

export default ContenedorFirebase;