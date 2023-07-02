import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imgs, questions } from '../../data'
import Question from '../components/Question'

const [ imgPelotaSilbato ] = imgs

// Funcion para barajar las preguntas de cada categoria y también reducirla al numero de 5
const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.5)
  return newArray.slice(0, 10)
}

const CategoryPage = () => {

  // Leer el parametro de la  URL
  const { category } = useParams()

  // const imgCategory = imgs.filter(img => img === `/src/assets/${category.toLocaleLowerCase()}.png`)
  
  const [questionFiltered, setQuestionFiltered] = useState(questions.filter(question => question.category === category))
  const [indexQuestion, setIndexQuestion] = useState(0)
  const [activeQuiz, setActiveQuiz] = useState(false)

  useEffect(() => {
    const newQuestions = shuffleArray(questionFiltered)
    setQuestionFiltered(newQuestions)
  }, [])

  return (
    <div className='container flex flex-col items-center justify-center gap-10' style={{height: 'calc(100vh - 5rem)'}}>
      {activeQuiz ? (<Question
       filteredQuestion={questionFiltered[indexQuestion]} 
       setIndexQuestion={setIndexQuestion} 
       indexQuestion={indexQuestion} 
       questionFiltered={questionFiltered}
       setActiveQuiz={setActiveQuiz} />)
      : (
        <>
         <div className="flex flex-col gap-5">
          <h1 style={{fontSize: '30px'}} className='text-3x1 text-white text-center font-bold'>
            {category}
          </h1>

          <div className="flex justify-center items-center">
            <img src={imgPelotaSilbato} alt={category} className='w-72' style={{borderRadius: '10px'}} />
          </div>
         </div>

         <button className="text-white bg-gray-900 py-2 rounded-1g font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900" onClick={() => setActiveQuiz(true)}>
          Iniciar Quiz
         </button>
        </>
      )}
    </div>
  )
}

export default CategoryPage