import { useSpring, animated } from 'react-spring';
export default function Spring() {
    const shakeProps = useSpring({
        y: 50,
        from: { y: 0 },
        config: {
            mass: 5,
            friction: 120,
            tension: 120,
        },
    });
    return (
        <animated.div style={shakeProps}>
            Пример Spring
        </animated.div>
    );
}