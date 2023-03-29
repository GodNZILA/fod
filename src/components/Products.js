import '../styles/Products.css';

const Products = ({cartItems, categories , productItems, handleAddProduct}) => {
  return (
      <div className="section" >
        {productItems.map((productItem) => (
          <div className='card' key={productItem.id}>
            <div className='product-image'>
              <img src={productItem.image}
              alt={productItem.name}
              />
            </div>

            <div className='card-text'>
            <div className='product-name'>
              <h4>{productItem.name}</h4>
              <span>{productItem.category}</span>
            </div>
            <div className='product-buttom'>
              <h3>{productItem.price} MAD</h3>
              <div className='buttons'>
                <button style={{backgroundColor:'#ecf4fe', color:'black'}} className='product-add-button'>
                <i class="fa-solid fa-link"></i>
                </button>
                <button style={{backgroundColor:'#0a5551', color:'white'}} className='product-add-button'
                onClick = { () => handleAddProduct(productItem)}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
            </div>


          </div>
        ))}
      </div>
  )
}

export default Products
