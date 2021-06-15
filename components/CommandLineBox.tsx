import { sample } from 'lodash';
import { useState } from 'react';
import Typist from 'react-typist';

const stuffImGoodAt = [
  'DevOps',
  'Ansible and the like',
  'using Arch Linux',
  'Vim AND Emacs',
  'winging it through React',
  'enjoying nature occasionally',
  'putting off working out',
  'REST-based microservices',
  'systematic automation of life',
  'basic machine learning',
  'debating about literally anything',
  'fixing bugs I made',
  'waiting for programs to compile',
  'educational programming courses',
  'blowing up transistors',
  'tinkering with new devices',
  'every language but JavaScript',
  'TypeScript',
  'making you laugh, I hope',
  'min-maxing everything',
  'writing articles about anything',
  'talking all the time',
  'side-project marathons',
  'system administration',
  'reading stuff off Reddit',
  'editing videos',
  'cooking and baking',
  'skiing',
  'HTML?',
  'using Stack Overflow',
];

const CommandLineBox = () => {
  const [content, setContent] = useState('');
  const [previousContent, setPreviousContent] = useState('');

  const shuffleContent = () => {
    setPreviousContent(content);
    let newContent = sample(stuffImGoodAt);
    while (newContent === previousContent) {
      newContent = sample(stuffImGoodAt);
    }
    setContent(newContent);
  };

  const InfiniteTyping = () => (
    <Typist
      cursor={{ element: '_' }}
      avgTypingDelay={40}
      stdTypingDelay={10}
      onTypingDone={() => {
        shuffleContent();
      }}
    >
      {content}
      <Typist.Backspace count={content.length} delay={600} />
      <Typist.Delay ms={200} />
    </Typist>
  );

  return (
    <span className="bg-white w-80 py-2 px-2 inline-block text-black">
      <InfiniteTyping />
    </span>
  );
};

export default CommandLineBox;
