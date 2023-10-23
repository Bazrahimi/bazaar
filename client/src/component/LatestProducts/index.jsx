import { useQuery } from "@apollo/client";
import { GET_LATEST_PRODUCTS } from "../../graphql/queries";

const LatestProducts = () => {
  const { loading , error, data } = useQuery(GET_LATEST_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message};</p>;

  return (
    <div>
      {data.getLatestProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default LatestProducts;

