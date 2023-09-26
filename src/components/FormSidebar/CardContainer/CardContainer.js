import React from 'react';
import Card from '../Card/Card';
import { motion, easeIn, easeOut } from "framer-motion";

const CardContainer = (props) => {
    const { contents } = props;
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={{
                initial: {},
                animate: {
                    transition: { staggerChildren: 0.2 },
                },
            }}
        >
            {contents?.length > 0 ? (
                contents.map((content, index) => (
                    <motion.div
                        key={content?.id}
                        initial={{ x: 60, opacity: 0, filter: "blur(5px)" }}
                        animate={{ x: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.2, ease: easeIn } }}
                        exit={{scale: 0, transition: { duration: 1, ease: easeOut } }}
                    >
                        <Card content={content} />
                    </motion.div>
                ))
            ) : (
                <p className='text-xl my-3 text-center'>No Entries Found</p>
            )}
        </motion.div>
    );
}

export default CardContainer;
