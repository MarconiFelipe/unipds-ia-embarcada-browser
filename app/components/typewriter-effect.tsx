'use client';
import { useEffect, useState } from 'react';

//gera o efeito de digitacao
export default function TypewriterEffect({ text, speed = 20 }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return <span>{displayText}</span>;
}

// Como usar: <Typewriter text="Efeito de digitação!" speed={100} />
