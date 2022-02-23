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
const TYPING_SPEED = 280;

const className = {
  root: `relative inline-flex  items-center h-full mr-2`,
  cursor: `absolute w-1 h-16 -right-2 bg-white animate-blink`,
};

const TypeWriter: FunctionComponent<TypeWriterProps> = ({ words }) => {
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const forward = useRef(false);
  const [text, setText] = useState('');

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
      start ? TYPING_DELAY : TYPING_SPEED
    );
  }, [words, text, increase, decrease]);

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
