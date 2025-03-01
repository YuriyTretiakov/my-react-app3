import { useEffect, useRef } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function AnimeJs() {
    const targetRef = useRef(null);
    useEffect(() => {
        const animation = anime({
            targets: targetRef.current,
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#fff',
            duration: 2000,
            loop: true
        });
        return () => {
            animation.pause();
            animation.seek(0);
        };
    }, []);
return <div ref={targetRef}>Пример anime</div>
}