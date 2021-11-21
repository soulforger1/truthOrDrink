import { useEffect, useState } from 'react';
import Loader from '../../components/loader';
import { Cards } from '../../components/card/cards';
import { firestore } from '../../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';
import _ from 'lodash';

const getData = async () => {
    try {
        const docData = await getDoc(doc(firestore, 'modes', 'simple'))
        return docData.data();
    } catch (err) {
        console.error(err);
    }
};

const Home = () => {
    const [data, setState] = useState(undefined);

    const shuffle = async (lastVisible) => {
        const { questions } = await getData(lastVisible);
        setState(_.shuffle(questions));
    };

    useEffect(() => {
        shuffle();
    }, []);
    if (!data) return <Loader />;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
            <div className="text-3xl text-white font-montserrat">
                Truth or Drink
            </div>
            <Cards questions={data} />
        </div>
    );
};

export default Home;
