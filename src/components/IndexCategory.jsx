import { Link } from 'react-router-dom'

const IndexCategory = () => {
  return (
    <div className="indexCategory">
        <Link to='/futbol-quiz'>
        <button>Categorias</button>
    </Link>
    </div>
  )
}

export default IndexCategory