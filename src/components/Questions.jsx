import React, {useState} from 'react';

const Questions = ({ question, options, selected }) => {

  const [answer, setAnswer] = useState(options);
  
  return (
    <div className='questionBox'>
      <div className='question'> {question}</div>
      {answer.map((guess, index) => (
        <button
          key={index}
          className='answerBtn'
          onClick={() => {
            setAnswer([guess]);
            selected(guess);
          }}
        >
          {guess}
        </button>
      ))}
    </div>
  );
};
    export default Questions;
