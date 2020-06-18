import { getExtension, getPathFromUrl, makeId } from '../utils';

class ApiService {
  constructor(firestore, firebase) {
    this._firestore = firestore;
    this._firebase = firebase;
  }

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

  createItem = async ({ title, text, price, available, image } = {}) => {
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
    });

    return resp;
  };

  updateItem = async (id = null, { title, text, price, available, image }) => {
    const doc = await this._firestore.collection('items').doc(id);

    let imgUrl, thumbUrl;

    if (image) {
      const fileName = `${makeId(10)}.${getExtension(image.name)}`;

      let resp = await this._firebase.uploadFile('/images', image, undefined, {
        name: fileName,
      });

      imgUrl = await resp.uploadTaskSnapshot.ref.getDownloadURL();

      thumbUrl = imgUrl.replace(fileName, `thumb-400-${fileName}`);
    }

    let resp = await doc.update({
      title,
      text,
      price,
      available,
      thumbUrl,
      imgUrl,
    });

    resp = resp.data();

    // await this._firebase.deleteFile(`panoramas/${resp.fileName}`);
    // await this._firebase.deleteFile(`panoramas/thumb-400-${resp.fileName}`);

    // resp = await doc.delete();

    return resp;
  };

  deleteItem = async (id = null) => {
    const doc = await this._firestore.collection('items').doc(id);

    let resp = await doc.get();

    resp = resp.data();

    await this._firebase.deleteFile(`panoramas/${resp.fileName}`);
    await this._firebase.deleteFile(`panoramas/thumb-400-${resp.fileName}`);

    resp = await doc.delete();

    return resp;
  };

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
