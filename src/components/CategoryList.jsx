import { imgs, categories } from '../../data'
import CategoryCard from './CategoryCard'

const [ imgPelotaSilbato, imgMessiTriste, imgMessiFeliz , imgChampions, imgMessi, imgArgentina ] = imgs

const CategoryList = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-10'>
        {/* Category Link Champions */}
        <CategoryCard category={categories.champions} src={imgChampions} alt={categories.champions} gradientColor='from-blue-800 to-blue-500' />

        {/* Category Link Messi */}
        <CategoryCard category={categories.messi} src={imgMessi} alt={categories.messi} gradientColor='from-red-900 to-red-500' />

        {/* Category Link Argentina */}
        <CategoryCard category={categories.argentina} src={imgArgentina} alt={categories.argentina} gradientColor='from-sky-500 to-sky-200' />
    </div>
  )
}

export default CategoryList