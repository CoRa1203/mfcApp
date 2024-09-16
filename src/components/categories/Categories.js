import { serviceCategories } from "../../data/serviceCategories"
import './Categories.scss'

const Categories = function(){
    return(
    
        <div className="CategoriesBody">
      {serviceCategories.map(category => <button className="categotyBtn"><p>{category.categoryTitle}</p></button>)}
        </div>
    )
}

export default Categories;