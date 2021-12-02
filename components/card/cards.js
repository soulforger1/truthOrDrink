import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Cards = ({ questions }) => {
    const x = useMotionValue(0);
    const [index, setIndex] = useState(0);
    const [cardSwitch, setCardSwitch] = useState(true);
    const [timer, setTimer] = useState(30);
    const [canDrag, setCanDrag] = useState(true);
    const [start, setStart] = useState(true);
    const xLeftInput = [-100, 0];
    const xRightInput = [0, 100];
    const leftBackground = useTransform(x, xLeftInput, [
        'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
        'linear-gradient(180deg, #000 0%, rgb(0, 0, 0) 100%)',
    ]);
    const rightBackground = useTransform(x, xRightInput, [
        'linear-gradient(180deg, #0000 0%, rgb(0, 0, 0) 100%)',
        'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)',
    ]);

    // Timer

    const countDown = (time) => {
        if (time >= 0) {
            console.log(time);
            setTimer(time);
            if (start) setTimeout(() => countDown(--time), 1000);
            console.log(start);
        } else {
            setTimer(30);
            setCardSwitch(true);
            setCanDrag(true);
            return;
        }
    };

    //Drager

    const onDragEnds = () => {
        if (x.current <= 0) {
            // console.log(timer);
            setCanDrag(false);
            setCardSwitch(false);
            setStart(true);
            countDown(30);
        } else {
            setIndex(index + 1);
            setCardSwitch(true);
        }
    };

    // Next buttons onClick functions

    const nextButton = () => {
        setCanDrag(true);
        setCardSwitch(true);
        setTimer(30);
        setIndex(index + 1);
        setStart(false);
    };

    // Dare contents

    const Dare = () => {
        return (
            <div className="flex-col">
                <p>{timer}</p>
                <p className='mb-24'>{questions[index].dare}</p>
                <button
                    onClick={nextButton}
                    className="bg-white hover:bg-gray text-black font-extrabold rounded w-full h-66 text-xl mb-24"
                >
                    Next question
                </button>
            </div>
        );
    };

    return (
            <motion.div
                drag={canDrag}
                onDragEnd={onDragEnds}
                style={{ x }}
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                className={`flex items-center justify-center h-550 w-270 rounded-lg select-none text-3xl text-white bg-black border-2 border-white text-center px-05`}
            >
                <motion.div
                    style={{
                        background: leftBackground,
                        width: '100px',
                        height: '100%',
                    }}
                />
                {cardSwitch ? questions[index].question : <Dare />}
                <motion.div
                    style={{
                        background: rightBackground,
                        width: '100px',
                        height: '100%',
                    }}
                />
            </motion.div>
    );
};
