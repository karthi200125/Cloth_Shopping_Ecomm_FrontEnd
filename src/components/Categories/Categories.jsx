import { categories } from "../../data";
import CategoryItem from "../Categoryitem/CategoryItem";
import './Categories.css'

const Categories = () => {
  return (
    <div className="cat-item-container" >
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
