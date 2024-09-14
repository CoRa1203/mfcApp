import { serviceCategories } from "../../data/serviceCategories"
import './Categories.scss'

export default function Categories(){
    return(
    
        <div className="CategoriesBody">
      {serviceCategories.map(category => <button className="categotyBtn"><p>{category.categoryTitle}</p></button>)}
        </div>
    )
}