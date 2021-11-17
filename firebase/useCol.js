import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { firestore } from './firebase';

export const useCol = async () => {
    const [data, setData] = useState([]);
    // const querySnapshot = await getDocs(collection(firestore, "questions"));

    getDocs(collection(firestore, "questions")).then((res) => {
        const questions = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(questions)
    })
    return { data };
}