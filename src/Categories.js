import './styles/categories.style.scss'
// import { Outlet } from 'react-router-dom';
const Categories = () => {
        const categories= [
            {
              "id": 1,
              "title": "interior",
              "imageUrl": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rp-bentley-continental-gt-v8-20-2-1570633139.jpg"
            },
            {
              "id": 2,
              "title": "Exterior",
              "imageUrl": "https://www.automotiveplastics.com/wp-content/uploads/Plastics-Exterior-3.png"
            },
            {
              "id": 3,
              "title": "Accessories",
              "imageUrl": "https://5.imimg.com/data5/SD/GO/MY-37501971/car-accessories-500x500.jpg"
            },
            {
              "id": 4,
              "title": "Mechanical",
              "imageUrl": "https://accessriviera.files.wordpress.com/2014/05/cardiagram-20120529t231113-lhcyb52.jpg"
            },
            {
              "id": 5,
              "title": "Rims",
              "imageUrl": "https://autojosh.com/wp-content/uploads/2018/10/rim-spinner-car.png"
            }
          ]

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


// import './categories.styles.scss';
 
// const Categories = () => {
//   const categories = [
//     {
//       id: 1,
//       title: 'hats',
//       imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
//     },
//     {
//       id: 2,
//       title: 'jackets',
//       imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
//     },
//     {
//       id: 3,
//       title: 'sneakers',
//       imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
//     },
//     {
//       id: 4,
//       title: 'womens',
//       imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
//     },
//     {
//       id: 5,
//       title: 'mens',
//       imageUrl: 'https://i.ibb.co/R70vBrQ/men.png'
//     }
//   ];
 
//   return (
//     <div className="categories-container">
//       {categories.map(({ title, id, imageUrl }) => (
//         <div key={id} className="category-container">
//           <div
//             className="backgound-image"
//             style={{
//               backgroundImage: `url(${imageUrl})`
//             }}
//           />
//           <div className="category-body-container">
//             <h2>{title}</h2>
//             <p>Shop Now</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
 
// export default Categories;