import { useContext, useEffect, useState } from 'react';
import Loader from '../../components/loader';
import { Cards } from '../../components/card/cards';
import { firestore } from '../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import _ from 'lodash';
import { CategoryContext } from '../../context/';

const getData = async (category) => {
    try {
        const docData = await getDoc(doc(firestore, 'modes', category));
        return docData.data();
    } catch (err) {
        console.error(err);
    }
};

const Home = () => {
    const [data, setState] = useState(undefined);
    const { category } = useContext(CategoryContext);

    const shuffle = async (category) => {
        const { questions } = await getData(category);
        setState(_.shuffle(questions));
    };

    useEffect(() => {
        shuffle(category);
    }, []);
    if (!data) return <Loader />;
    return (
        <div className="flex flex-col overflow-hidden items-center justify-center min-h-screen py-2 bg-black">
            <div className="text-3xl text-white font-montserrat">
                Truth or Drink
            </div>
            <Cards questions={data} />
        </div>
    );
};

export default Home;
