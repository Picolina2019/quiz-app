import React, {useState, useEffect} from 'react';
import './assets/style.css';
import quizStore from './quizStore/index'
import Score from './components/Score';
import Questions from './components/Questions';



const App = () => {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState(0);
  const [error, setError] = useState(false)
 

  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    quizStore().then((question) => {
      setQuestions(question)
      
    })
    .catch(function(error){
        setError(true)
      })
  };

  const getAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }

    let newResponses = responses < 5 ? responses + 1 : 5;
    setResponses(newResponses);
  };

  const restart = () => {
    setData();
    setScore(0);
    setResponses(0);
  };

  return (

    <div className='container'>
      {error ? <p>Something went wrong</p> :
      <>
      <div className='title'>Quiz You Up!</div>
      {questions.length > 0 && responses < 5 &&
        questions.map(({ question, answers, correct, questionId }) => (
          <h4>
            <Questions
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => getAnswer(answer, correct)}
            />
          </h4>
        ))}
      {responses === 5 ? <Score score={score} restart={restart} /> : " "}
      </>}
    </div>
  );
};
export default App;