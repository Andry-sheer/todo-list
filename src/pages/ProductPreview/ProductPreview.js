
// import { useParams } from "react-router-dom";

// const ProductPreview = () => {
//   const { productId } = useParams();

//   return (
//     <div>ProductPreview {productId}</div>
//   )
// };

// export default ProductPreview;

import { Outlet } from "react-router-dom";

const ProductPreview = () => {
  return (
    <div>ProductPreview <Outlet /></div>
  )
};

export default ProductPreview;