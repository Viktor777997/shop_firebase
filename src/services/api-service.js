import { getExtension, getPathFromUrl, makeId } from '../utils';

class ApiService {
  constructor(firestore, firebase) {
    this._firestore = firestore;
    this._firebase = firebase;
  }


  // items
  getItems = async (query = []) => {
    let resp = this._firestore.collection('items').orderBy('createDate', 'desc');
    query.forEach(value => {
      resp = resp.where(...value);
    });

    resp = await resp.get();

    return resp.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  };

  getItem = async (id = null) => {
    const resp = await this._firestore
      .collection('items')
      .doc(id)
      .get();

    return { id, ...resp.data() };
  };

  createItem = async ({ title, text, categoryId, price, available, image } = {}) => {
    const fileName = `${makeId(10)}.${getExtension(image.name)}`;

    let resp = await this._firebase.uploadFile('/images', image, undefined, {
      name: fileName,
    });

    const imgUrl = await resp.uploadTaskSnapshot.ref.getDownloadURL();

    const thumbUrl = imgUrl.replace(fileName, `thumb-400-${fileName}`);

    resp = await this._firestore.collection('items').add({
      createDate: new Date(),
      image: `${getPathFromUrl(imgUrl)}?alt=media`,
      thumb: `${getPathFromUrl(thumbUrl)}?alt=media`,
      title,
      text,
      price,
      available,
      categoryId,
    });

    return resp;
  };

  updateItem = async (id = null, { title, text, price, available, categoryId, image }) => {
    const doc = await this._firestore.collection('items').doc(id);
    console.log(id)
    const data = {
      title,
      text,
      price,
      available,
      categoryId
    }
    console.log(image)
    if (image) {
      const fileName = `${makeId(10)}.${getExtension(image.name)}`;
      console.log('data')

      let resp = await this._firebase.uploadFile('/images', image, undefined, {
        name: fileName,
      });

      data.imgUrl = await resp.uploadTaskSnapshot.ref.getDownloadURL();
      data.thumbUrl = imgUrl.replace(fileName, `thumb-400-${fileName}`);
    }


    let resp = await doc.update(data);

    return resp;
  };

  deleteItem = async (id = null) => {
    const doc = await this._firestore.collection('items').doc(id);

    let resp = await doc.get();

    resp = resp.data();

    // await this._firebase.deleteFile(`panoramas/${resp.fileName}`);
    // await this._firebase.deleteFile(`panoramas/thumb-400-${resp.fileName}`);

    resp = await doc.delete();

    return resp;
  };




  // categories


  getCategories = async (query = []) => {
    let resp = this._firestore.collection('categories').orderBy('createDate', 'desc');
    query.forEach(value => {
      resp = resp.where(...value);
    });

    resp = await resp.get();

    return resp.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  };

  getCategory = async (id = null) => {
    const resp = await this._firestore
      .collection('categories')
      .doc(id)
      .get();

    return { id, ...resp.data() };
  };
  createCategory = async ({ title, available, categoryMother } = {}) => {
    const resp = await this._firestore.collection('categories').add({
      createDate: new Date(),
      categoryMother,
      title,
      available,
    });

    console.log("resp: ", resp)

    return resp
  };
  updateCategory = async (id = null, { title, available, categoryMother }) => {
    const doc = await this._firestore.collection('categories').doc(id);
    const data = {
      title,
      available,
      categoryMother,
    }



    let resp = await doc.update(data);

    return resp;
  };
  deleteCategory = async (id = null) => {
    const doc = await this._firestore.collection('categories').doc(id);

    let resp = await doc.get();

    resp = resp.data();

    // await this._firebase.deleteFile(`panoramas/${resp.fileName}`);
    // await this._firebase.deleteFile(`panoramas/thumb-400-${resp.fileName}`);

    resp = await doc.delete();

    return resp;
  };



  // user


  getUser = async (id = null) => {
    const resp = await this._firestore
      .collection('users')
      .doc(id)
      .get();
    return resp.data();
  };

  createUser = async ({ email, password, firstName, lastName } = {}) => {
    let resp = await this._firebase.auth().createUserWithEmailAndPassword(email, password);

    resp = await this._firestore
      .collection('users')
      .doc(resp.user.uid)
      .set({ firstName, lastName });
    return resp;
  };

  authenticateUser = async (data = {}) => {
    return this._firebase.auth().signInWithEmailAndPassword(data.email, data.password);
  };

  unAuthenticateUser = async () => {
    return this._firebase.auth().signOut();
  };
}

export default ApiService;
