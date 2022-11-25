import 'styles/categories.style.scss'
import categoriesData from 'data/categories.json'

const Categories = () => {
    const categories= categoriesData

    return ( 
      <div>
           
        <div className="categories-container">
            {categories.map(({ title,id,imageUrl})=>(
                <div key={id} className='category-container'>
                    <div className='background-image' style={{
                        backgroundImage: `url(${imageUrl})`
                    }}/>
                 
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                    </div>
                </div>

            ))}

        </div>
        {/* <Outlet/> */}
        </div>

      );
}
 
export default Categories;