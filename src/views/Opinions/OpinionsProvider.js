import React from "react";
import { createContext, useState } from "react";
import { firebase } from "../../firebase";

export const opinionsContext = createContext();

const OpinionsProvider = ({ children }) => {
  const [commentsList, setCommentsList] = useState([]);

  const handleGetComments = async () => {
    try {
      const db = firebase.firestore();
      const data = await db.collection("opinions").get();
      const listResponse = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("asdas", listResponse);
      const listMapped = listResponse.map((item) => ({
        ...item,
        date: new Date(item.date),
      }));

      setCommentsList(listMapped);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const db = firebase.firestore();
      await db.collection("opinions").doc(id).delete();

      handleGetComments();
    } catch (error) {}
  };

  const handleAddComment = async (values) => {
    try {
      const db = firebase.firestore();
      const response = await db.collection("opinions").add(values);

      if (response) {
        handleGetComments();
      }
    } catch (error) {}
  };

  const contextValues = {
    handleGetComments,
    commentsList,
    handleDeleteComment,
    handleAddComment,
  };
  return (
    <opinionsContext.Provider value={contextValues}>
      {children}
    </opinionsContext.Provider>
  );
};

export { OpinionsProvider };
