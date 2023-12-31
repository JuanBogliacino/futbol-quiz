import React, { useEffect, useState } from 'react'
import Results from './Results'

const Question = ({ filteredQuestion, setIndexQuestion, indexQuestion, questionFiltered, setActiveQuiz }) => {

    const [score, setScore] = useState(0)
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null)
    const [answered, setAnswered] = useState(false)
    const [answersRandom, setAnswersRandom] = useState([])
    const [activeResults, setActiveResults] = useState(false)

    useEffect(() => {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer
        ]

        setAnswersRandom(answers.sort(() => Math.random() - 0.5))

    }, [filteredQuestion])

    const checkAnswer = (answerText, index) => {
        if (answerText === filteredQuestion.correct_answer) {
            setScore(score + 1)
        }
        setSelectAnswerIndex(index)
        setAnswered(true)
    }

    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
        setSelectAnswerIndex(null)
        setAnswered(false)
    }

    const onReset = () => {
        setScore(0)
        setActiveQuiz(false)
        setIndexQuestion(0)
    }

  return (
    <>
    {activeResults ? (
        <Results questionFiltered={questionFiltered} score={score} onReset={onReset} />
    ) : (
        <div className='flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg div-question'>
        <div className="flexljustify-between">
            <span className="text-xl font-bold">
                {/* Numero de pregunta actual y Numero de preguntas totales */}
                {indexQuestion + 1} / {questionFiltered.length}
            </span>
        </div>

        <button className='border-2 border-gray-900 px-5 py-2 rounded-lg font-bold transition-all hover:bg-yellow-500 hover:text-gray-900 hover:border-yellow-500' onClick={onReset}>
            Reiniciar
        </button>
        <div>
            <h1 className="font-bold h1-question">{filteredQuestion.question}</h1>
        </div>

        {/* las respuestas aqui */}
        <div className="grid grid-cols-2 gap-5">
            {/* Mapeamos un arreglo de respuesta correcto y respuestas incorrectas */}
            {
                answersRandom.map((answer, index) => (
                    <button
                     style={{padding:'5px'}}
                     className={`border rounded-lg flex justify-center items-center hover:scale-105 ${
                        selectAnswerIndex !== null && index === selectAnswerIndex
                        ? answer === filteredQuestion.correct_answer
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                        : ''
                     }`} 
                     key={index}
                     onClick={() => checkAnswer(answer, index)}
                     disabled={answered}
                    >
                     <p className="font-medium text-center text-sm">
                      {answer}
                     </p>
                    </button>
                ))
            }
        </div>
        
        {/* Condicional para mostrar el boton de siguiente pregunta o el de finalizar */}
        {
            indexQuestion + 1 === questionFiltered.length ? (
                <button className='border-2 border-gray-900 bg-gray-900 rounded-md px-5 py-2 text-white font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500'
                 onClick={() => {
                    setAnswered(false)
                    setActiveResults(true)
                 }}
                 disabled={!answered}>
                 Finalizar
                </button>
            ) : (
                <button className='border-2 border-gray-900 bg-gray-900 rounded-md px-5 py-2 text-white font-medium hover:bg-yellow-500 hover:text-black hover:border-yellow-500' onClick={onNextQuestion} disabled={!answered}>
                Siguiente Pregunta
                </button>
            )
        }
     </div>
    )}
    </>
  )
}

export default Question