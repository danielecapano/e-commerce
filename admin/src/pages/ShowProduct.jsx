/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAdminContext } from "../hook/useAdminContext";

const ShowProduct = () => {
  const { productId } = useParams();
  const { getProductById } = useAdminContext();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(productId);
        console.log(response);
        setProduct(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);
  return <div>{product.name}</div>;
};

export default ShowProduct;
