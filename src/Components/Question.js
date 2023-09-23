import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, dispatch, answer, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4> {question.question} </h4>
      <Options dispatch={dispatch} question={question} answer={answer} />
    </div>
  );
}

export default Question;
