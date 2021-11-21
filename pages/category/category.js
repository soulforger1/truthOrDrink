import { useEffect, useState } from 'react';
import Loader from '../../components/loader';
import _ from 'lodash';
import Link from 'next/link';

const Category = () => {
    return (
        <div className="flex flex-col items-center justify-around min-h-screen py-2 bg-black">
            <div className="text-3xl text-white font-montserrat">
                Choose Mode:
            </div>
            <div className="flex flex-col items-center justify-around">
                <Link href="/home">
                    <button className="bg-white hover:bg-gray text-black font-extrabold rounded w-300 h-66 text-xl mb-24">
                        Simple
                    </button>
                </Link>
                <Link href="/home">
                    <button className="bg-white hover:bg-gray text-black font-extrabold rounded w-300 h-66 text-xl">
                        Adult
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Category;
