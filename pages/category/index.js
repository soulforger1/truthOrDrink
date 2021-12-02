import _ from 'lodash';
import Link from 'next/link';
import { useContext } from 'react';
import { CategoryContext } from '../../context/';

const Category = () => {
    const { setCategory } = useContext(CategoryContext);

    return (
        <div className="flex flex-col items-center justify-around min-h-screen p-10 bg-black">
            <div className="text-4xl font-semibold text-center text-white font-montserrat m-10">
                Select mode to play
            </div>
            <div className="illus"></div>
            <div className="flex flex-col items-center justify-around mb-66">
                <Link href="/home">
                    <button
                        onClick={() => setCategory('simple')}
                        className="bg-white hover:bg-gray text-black font-extrabold rounded w-270 h-66 text-xl mb-24"
                    >
                        Simple
                    </button>
                </Link>
                <Link href="/home">
                    <button
                        onClick={() => setCategory('adult')}
                        className="bg-white hover:bg-gray text-black font-extrabold rounded w-270 h-66 text-xl"
                    >
                        Adult
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Category;
