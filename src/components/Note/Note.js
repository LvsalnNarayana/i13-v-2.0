import React from 'react';
import '../../Canvas.css';
import { motion, easeIn } from "framer-motion";

const Note = (props) => {
    const { contents, classes,name } = props;
    return (
        <div className={`${classes}`}>
            <div className="quote-container h-full">
                <i className="pin"></i>
                <blockquote className="note yellow">
                    <h3 className='text-lg font-semibold mb-2 underline text-center'>{name}</h3>
                    {contents?.length > 0 ? (
                        <motion.ul
                            initial="initial"
                            className='list-disc text-md pl-6'
                            animate="animate"
                            variants={{
                                initial: {},
                                animate: {
                                    transition: { staggerChildren: 0.2 },
                                },
                            }}
                        >
                            {contents?.slice(0, 4)?.map((content) => (
                                <motion.li
                                    key={content?.id}
                                    initial={{ x: 60, opacity: 0, filter: "blur(5px)" }}
                                    animate={{ x: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.2, ease: easeIn } }}
                                >
                                    {content?.data}
                                </motion.li>
                            ))}
                        </motion.ul>
                    ) : (<></>)}
                </blockquote>
            </div>
        </div>
    );
}

export default Note;
