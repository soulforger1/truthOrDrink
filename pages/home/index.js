import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from '../../firebase/firebase';


const Home = () => {
    const [data, setState] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const res = await getDocs(collection(firestore, "questions"))
            const questions = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setState(questions)
        }
        getData()
    }, [])

    console.log(data)
    return (
        <div>
            <Loader />
        </div>
    )
}

export default Home;