import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

interface TypeWriterProps {
  words: string[];
}

const TYPING_DELAY = 800;
const TYPING_INTERVAL_MIN = 100;
const TYPING_INTERVAL_MAX = 180;
const TYPING_INTERVAL_BACKSPACE = 80;

const className = {
  root: `relative inline-flex  items-center h-full mr-2`,
  cursor: `absolute w-1 h-12 -right-2 bg-blue-300 animate-blink`,
};

const TypeWriter: FunctionComponent<TypeWriterProps> = ({ words }) => {
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const forward = useRef(false);
  const [text, setText] = useState('');

  const getInterval = useCallback(() => {
    if (!forward.current) return TYPING_INTERVAL_BACKSPACE;

    const distance = TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN;
    return Math.floor(Math.random() * (distance + 1) + TYPING_INTERVAL_MIN);
  }, []);

  const increase = useCallback(() => {
    const word = words[wordIndex.current];
    setText((current) => current + word.charAt(charIndex.current));
    charIndex.current += 1;
  }, [words]);

  const decrease = useCallback(() => {
    setText((current) => current.slice(0, -1));
    charIndex.current -= 1;
  }, []);

  const typeWriter = useCallback(() => {
    const word = words[wordIndex.current];
    const end = forward.current && word.length === text.length;
    const start = !forward.current && text.length === 0;

    return setTimeout(
      () => {
        if (start) {
          forward.current = true;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        } else if (end) {
          forward.current = false;
        }

        if (forward.current) {
          increase();
        } else {
          decrease();
        }
      },
      start ? TYPING_DELAY : getInterval()
    );
  }, [words, text, increase, decrease, getInterval]);

  useEffect(() => {
    const timeout = typeWriter();
    return () => clearTimeout(timeout);
  }, [typeWriter]);

  return (
    <span className={className.root}>
      {text} <span className={className.cursor} />
    </span>
  );
};

export default TypeWriter;
