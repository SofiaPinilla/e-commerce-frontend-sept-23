import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Button, Card } from "antd";
import "./Products.scss"
import {ShoppingCartOutlined} from "@ant-design/icons"
const Products = () => {
  const { products, getProducts,addCart } = useContext(ProductsContext);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="products-container">
      {products.map((product) => {
        return (
            <Card
              title={product.name}
              bordered={false}
              style={{
                width: 300
              }}
              key={product._id}
            >
              <p>{product.price}</p>
              <Button onClick={()=>addCart(product)}>Add Cart  <ShoppingCartOutlined /></Button>
             
            </Card>
        );
      })}
    </div>
  );
};

export default Products;
