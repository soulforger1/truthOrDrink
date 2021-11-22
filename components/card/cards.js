import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const Cards = ({ questions }) => {
    const x = useMotionValue(0);
    const [index, setIndex] = useState(0);
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

    const onDragEnds = () => {
        if (x.current < 0) {
            console.log('uu sda mine');
        } else {
            setIndex(index + 1);
        }
    };
    return (
        <motion.div>
            <motion.div
                drag
                onDragEnd={onDragEnds}
                style={{ x }}
                dragConstraints={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
                className={`flex items-center justify-center h-610 w-300 rounded-lg select-none text-3xl text-white bg-black border-2 border-white text-center`}
            >
                <motion.div
                    style={{
                        background: leftBackground,
                        width: '100px',
                        height: '100%',
                    }}
                />
                {questions[index].question}
                <motion.div
                    style={{
                        background: rightBackground,
                        width: '100px',
                        height: '100%',
                    }}
                />
            </motion.div>
        </motion.div>
    );
};
