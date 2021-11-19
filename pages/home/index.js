import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import Card from "../../components/card";
import { firestore } from '../../firebase/firebase';
import { collection, getDocs, startAfter, limit, query } from "firebase/firestore";
import _ from "lodash";

const Home = () => {
    const [data, setState] = useState(undefined);

    const getData = async (lastVisible) => {
        try {
            let cquery;
            if (lastVisible)
                cquery = query(collection(firestore, "questions"), startAfter(lastVisible), limit(25));
            else
                cquery = query(collection(firestore, "questions"), limit(25));

            const { docs } = await getDocs(cquery)
            return docs;
        } catch (err) {
            console.error(err)
        }
    }
    const shuffle = async (lastVisible) => {
        const docs = await getData(lastVisible);
        const questions = docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
        setState(_.shuffle(questions))
    }

    useEffect(() => {
        shuffle()
    }, [])

    const onCardClick = () => {
        console.log(data && data[0])
        setState(_.drop(data));
    }
    if (!data) return (<Loader />)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="text-3xl">Truth or Drink</div>
            <Card onClick={onCardClick}>
                {data && data[0].question}
            </Card>
        </div>
    )
}

export default Home;