import Products from './Products';
import '../styles/Categories.css';

const Categories = ({ cartItems, categories , handleAddProduct }) => {
    return <div className='category-group'>
        {
            categories.map( category => (
                <div key = {category.id} id={category.id}>
                  <div className='category-info'>
                    <h3 className='category-group-name'>{category.name} </h3>
                    <span className='category-group-length'>{category.products.length}</span>
                  </div>
                  <div>
                      <Products cartItems={cartItems}  productItems={category.products} handleAddProduct={handleAddProduct} />
                  </div>
                </div>
            ) )
        }
    </div>
}

export default Categories;
