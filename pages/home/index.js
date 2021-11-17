import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import Card from "../../components/card";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';
import _ from "lodash";

const Home = () => {
    const [data, setState] = useState(undefined);

    const getData = async () => {
        const res = await getDocs(collection(firestore, "questions"))
        const questions = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        setState(_.shuffle(questions))
    }
    useEffect(() => {
        getData()
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