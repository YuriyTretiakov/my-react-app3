import { motion } from "framer-motion";
import Button from "../Button/Button";

const AnimatedButton = ({onClick}:{onClick: () => void}) => {
    const rotation = {
        rest: { rotate: 0 },
        hover: { rotate: 360, transition: { duration: 0.4 }}
    };
    return (
    <motion.div  variants={rotation}>
        <Button label="Зарегистрироваться" onClick={onClick} />
    </motion.div>)
}
export default AnimatedButton