import axios from "axios";
import { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    img: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const nav = useNavigate();
  /**
{
  id: "11"
  createdAt :  "2023-04-19T07:58:02.398Z"
  //
  name: "Violet Connelly"
  img: "https://loremflickr.com/640/480/abstract"
  description :  "Quasi delectus sint qui rerum optio. Iusto nobis omnis minus aliquid necessitatibu."
  price: "259.00"
  stock: "5"
}
 */
  return (
    <div>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(
              "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
              product
            )
            .then((res) => {
              console.log("Yeni product kayıt res > ", res);
              nav("/products");
            });
        }}
      >
        <FormGroup>
          <Label htmlFor="product-name">Name</Label>
          <Input
            id="product-name"
            name="name"
            type="text"
            onChange={(event) => {
              setProduct({ ...product, name: event.target.value });
            }}
            value={product.name}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-img">Image</Label>
          <Input
            id="product-img"
            name="img"
            type="text"
            onChange={(event) => {
              setProduct({ ...product, img: event.target.value });
            }}
            value={product.img}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-description">Description</Label>
          <Input
            id="product-description"
            name="description"
            type="textarea"
            onChange={(event) => {
              setProduct({ ...product, description: event.target.value });
            }}
            value={product.description}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-price">Price</Label>
          <Input
            id="product-price"
            name="price"
            type="number"
            onChange={(event) => {
              setProduct({ ...product, price: event.target.value });
            }}
            value={product.price}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-stock">Stock</Label>
          <Input
            id="product-stock"
            name="stock"
            type="number"
            onChange={(event) => {
              setProduct({ ...product, stock: event.target.value });
            }}
            value={product.stock}
          />
        </FormGroup>

        <Button type="submit">Save</Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
