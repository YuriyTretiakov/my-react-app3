import { motion } from "framer-motion";
import { useState } from "react";
import './animation.css';


export default function AnimatedComponent() {
    const [count, setCount] = useState(0)
    const variants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
        hover: { scale: 1.2, transition: {duration: 0.5 } }
    };
    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.95 }
    };
    const arrow = {
        rest: { rotate: 0 },
        hover: { rotate: 360, transition: { duration: 0.4} },
    };
    return (
        <div className="wrapper">
            <motion.div animate={{ x: count}}>простая анимация</motion.div>
            <motion.div animate={{ x: count}}transition={{ ease: "easeOut", duration: 2}}>анимация с переходом</motion.div>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                >
                    анимация с опциями
            </motion.div>
            <div style={{fontSize: '56px'}}>
                <button onClick={() => setCount((state) => state +=20)}>+</button>
                <button onClick={() => setCount((state) => state -=20)}>-</button>
                <div>{count}</div>
            </div>
            <motion.div
            className="refresh"
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
            >
                <motion.svg
                width="16"
                height="16"
                xmlns="http:/www.w3.org/2000/svg"
                variants={arrow}
                >
                    <path 
                    // d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2."
                    fill="#fff"
                    fillRule="nonzero"
                    />
                </motion.svg>
                </motion.div>
                <motion.div
                className="box"
                animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
                />

        </div>
    );
}