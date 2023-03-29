import { categories } from "../data/data_beta";
import "../styles/CategoriesNav.css";

const CategoriesNav = () => {
  return (
    <div className="categories-nav">
      {categories.map((category) => (
        <a href={`#${category.id}`}>
          <div className="category" key={category.id}>
            <div className="category-image">
              <img src={category.image} alt={category.name} width={100} />
            </div>
            <span>{category.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoriesNav;
