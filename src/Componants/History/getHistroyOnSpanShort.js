import React, { useEffect, useState } from "react";
import { doc, onSnapshot, query, collection } from "firebase/firestore";
import { db } from "../../FireBase/firebase";



const getHistroyOnSpanShort = () => {
  const q = query(collection(db, `users/${user.uid}/transactions`));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const transactions = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      transactions.push(doc.data());
    });
    //  setTransitionData(transactions)
    console.log("Current cities in CA: ", transactions);
  });
};

export default getHistroyOnSpanShort;
