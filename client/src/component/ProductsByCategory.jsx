import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../graphql/queries";
import { useParams } from "react-router-dom";

const ProductsByCategory = () => {  // Added a category prop to the component
  const { category } =useParams(); 
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category: category }   // Passed category variable to the query
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.getProductsByCategory.map(product => (  // Fixed the mapping
        <div key={product.id}>   // Added a key prop
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <img src={product.imageURLs[0]} alt={product.name}/>   // Displaying the first image URL as an example
          <p>ID: {product.id}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsByCategory;
