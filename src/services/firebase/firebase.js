import app from "firebase/app";
import "firebase/firestore";
import { firebaseConfig } from "./config";

const getDocWithId = queryDocumentSnapshot => {
  if (!queryDocumentSnapshot.exists) {
    return;
  }

  return {
    id: queryDocumentSnapshot.id,
    ...queryDocumentSnapshot.data(),
  };
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  onCollection = (path, { callback, errorCallback }) => {
    this.db.collection(path).onSnapshot(callback, errorCallback);
  };

  onDocument = (path, document, { callback, errorCallback }) => {
    this.db
      .collection(path)
      .doc(document)
      .onSnapshot(doc => callback(getDocWithId(doc)), errorCallback);
  };

  set = async ({ path, doc, data, replace }) =>
    this.db
      .collection(path)
      .doc(doc)
      .set(data, { merge: !replace });

  get = async (path, { include }) => {
    const querySnapshot = await this.db
      .collection(path)
      .orderBy("order")
      .get();

    const entities = await Promise.all(
      querySnapshot.docs.map(async doc => ({
        ...getDocWithId(doc),
        ...(await this.getSubcollections(doc, include)),
      })),
    );

    return entities;
  };

  getSubcollections = async (queryDocumentSnapshot, include) => {
    const subcollections = {};

    if (include) {
      await Promise.all(
        include.map(async detailLevelEntityPair => {
          // TODO take detailLevel into account
          const [detailLevel, entity] = detailLevelEntityPair.split("-");
          const entities = await this.get(
            `${queryDocumentSnapshot.ref.path}/${entity}`,
            include,
          );

          subcollections[entity] = entities;
        }),
      );
    }

    return subcollections;
  };
}

export default Firebase;
