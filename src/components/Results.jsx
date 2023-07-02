import { useNavigate } from 'react-router-dom'
import { imgs } from '../../data'

const [ imgPelotaSilbato, imgMessiTriste, imgMessiFeliz ] = imgs

const Results = ({ questionFiltered, score, onReset }) => {
    const navigate = useNavigate()

    const returnInicio = () => {
        navigate('/futbol-quiz')
    }


  return (
        <div className='flex flex-col justify-evenly items-center shadow-x1 rounded-lg w-[600px] h-[600px] gap-5'>
            <h1 className='text-4xl font-bold h1-results'>Resultados</h1>

            <div className='flex flex-col gap-5 text-center text-lg font-bold'>
                <span>Acertaste</span>
                <span className='font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
                    {((score / questionFiltered.length) * 100).toFixed(0)}%
                </span>
                de las preguntas ({score} de {questionFiltered.length})
            </div>

            {
                score >= 6
                ? <img src={imgMessiFeliz} alt="img-ganaste" className='img-result' />
                : <img src={imgMessiTriste} alt="img-perdiste" className='img-result' />
            }

            <button style={{padding: '5px 10px'}} className='text-white bg-gray-900 py-2 rounded-1g font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900' onClick={onReset}>
                Volver a jugar
            </button>

            <button style={{padding: '5px 10px'}} className='text-white bg-gray-900 py-2 rounded-1g font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900' onClick={returnInicio}>
                Inicio
            </button>
        </div>
  )
}

export default Results