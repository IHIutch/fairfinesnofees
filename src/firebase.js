import firebase from "firebase";

export const db = firebase
  .initializeApp({ projectId: "fairfinesnofees" })
  .firestore();
