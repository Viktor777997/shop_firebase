import { getExtension, getPathFromUrl, makeId } from '../utils';

class ApiService {
  constructor(firestore, firebase) {
    this._firestore = firestore;
    this._firebase = firebase;
  }

  // items
  getItems = async (query = [], limit = '', startItemId = '', queryText = '') => {
    let resp = this._firestore.collection('items');
    let startAtItem;
    if (startItemId) {
      startAtItem = await resp.doc(startItemId).get();
    }

    if (queryText) {
      let query = queryText.trim().toLowerCase()
      resp = resp.where('keyWords', 'array-contains', query);
    }
    query.forEach(value => {
      resp = resp.where(...value);
    });

    resp = resp.orderBy('createDate', 'desc');

    if (startAtItem) {
      resp = resp.startAfter(startAtItem);
    }
    if (limit) {
      resp = resp.limit(limit);
    }

    resp = await resp.get();

    return resp.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  };

  getSearchedItems = async (queryText = '') => {
    let resp = this._firestore.collection('items').where('keyWords', 'array-contains', queryText.toLowerCase()).orderBy('createDate', 'desc')
    resp = await resp.get();

    return resp.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  };

  getItem = async (id = null) => {
    const resp = await this._firestore.collection('items').doc(id).get();

    return { id, ...resp.data() };
  };

  createItem = async ({ title, text, categoryId, bigPrice, smallPrice, available, slideItem, image } = {}) => {
    const fileName = `${makeId(10)}.${getExtension(image.name)}`;

    let resp = await this._firebase.uploadFile('/images', image, undefined, {
      name: fileName,
    });
    const arrName = [];
    let curName = '';
    title.split('').forEach((letter) => {
      curName += letter;
      arrName.push(curName)
    })
    const imgUrl = await resp.uploadTaskSnapshot.ref.getDownloadURL();

    const thumbUrl = imgUrl.replace(fileName, `thumb-400-${fileName}`);

    resp = await this._firestore.collection('items').add({
      createDate: new Date(),
      image: `${getPathFromUrl(imgUrl)}?alt=media`,
      thumb: `${getPathFromUrl(thumbUrl)}?alt=media`,
      keyWords: arrName,
      title,
      text,
      bigPrice,
      smallPrice,
      slideItem,
      available,
      categoryId,
    });

    return resp;
  };

  updateItem = async (id = null, { title, text, bigPrice, smallPrice, available, slideItem, categoryId, image }) => {
    const doc = await this._firestore.collection('items').doc(id);
    const arrName = [];
    let curName = '';
    title.split('').forEach((letter) => {
      curName += letter;
      arrName.push(curName)
    })
    const data = {
      title,
      text,
      bigPrice,
      smallPrice,
      slideItem,
      available,
      categoryId,
      keyWords: arrName,
    };
    if (image) {
      const fileName = `${makeId(10)}.${getExtension(image.name)}`;

      let resp = await this._firebase.uploadFile('/images', image, undefined, {
        name: fileName,
      });

      const imgUrl = await resp.uploadTaskSnapshot.ref.getDownloadURL();
      const thumbUrl = imgUrl.replace(fileName, `thumb-400-${fileName}`);

      data.image = `${getPathFromUrl(imgUrl)}?alt=media`;
      data.thumb = `${getPathFromUrl(thumbUrl)}?alt=media`;
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
    const resp = await this._firestore.collection('categories').doc(id).get();

    return { id, ...resp.data() };
  };
  createCategory = async ({ title, available, categoryMother } = {}) => {
    const resp = await this._firestore.collection('categories').add({
      createDate: new Date(),
      categoryMother,
      title,
      available,
    });
    return resp;
  };
  updateCategory = async (id = null, { title, available, categoryMother }) => {
    const doc = await this._firestore.collection('categories').doc(id);
    const data = {
      title,
      available,
      categoryMother,
    };

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
    const resp = await this._firestore.collection('users').doc(id).get();
    return resp.data();
  };

  createUser = async ({ email, password, firstName, lastName } = {}) => {
    let resp = await this._firebase.auth().createUserWithEmailAndPassword(email, password);

    resp = await this._firestore.collection('users').doc(resp.user.uid).set({ firstName, lastName });
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
