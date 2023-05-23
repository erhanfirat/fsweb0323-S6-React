// external libraries
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

// internal components, functions, objects

// CSS importları

// import "./CreateProduct.css";

// component başlangıcı
const CreateProduct = () => {
  // 1 - Data Derfinition: state, local, prop
  // ************************************************

  const [isFormValid, setFormValid] = useState();
  const [product, setProduct] = useState({});

  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Ürün isim alanı zorunludur!")
      .min(6, "Ürün ismi en az 6 karakter olmalıdır."),
    img: Yup.string()
      .min(6, "Görsel URL linki en az 6 karakter olmalıdır.")
      .url("Lütfen geçerli bir URL bilgisi giriniz."),
    description: Yup.string(),
    price: Yup.number("Must be a number type") // Validates for numerical value
      .typeError("Lütfen numeric data giriniz.")
      .positive("Must be a positive value") // Validates against negative values
      .required("Please enter a duration. The field cannot be left blank.") // Sets it as a compulsory field
      .min(1, "Hey! Your duration must be greater than or equal to 1!"), // Sets a minimum value});,
    stock: Yup.number("Lütfen numeric data giriniz!").min(
      0,
      "Stok bilgisi 0 dan az olamaz!"
    ),
    type: Yup.string(),
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    img: "",
    description: "",
    price: "",
    stock: "",
    type: "",
  });

  const nav = useNavigate();

  // 2 - Methods, functions
  // ************************************************

  const inputChangeHandler = (e) => {
    // destructuring
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });

    // hata mesajhını yuptan alma
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", product)
      .then((res) => {
        console.log("Yeni product kayıt res > ", res);
        nav("/products");
      });
  };

  // 3 - Life cycle events: useEffect
  // ************************************************

  useEffect(() => {
    console.log("product > ", product);
    formSchema.isValid(product).then((valid) => {
      setFormValid(valid);
    });
  }, [product]);

  useEffect(() => {
    // console.warn("formErrors: ", formErrors);
  }, [formErrors]);

  // 4 - templating
  // ************************************************

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <FormGroup>
          <Label htmlFor="product-name">Name</Label>
          <Input
            id="product-name"
            name="name"
            type="text"
            onChange={inputChangeHandler}
            value={product.name}
            invalid={!!formErrors.name}
          />
          {formErrors.name && <FormFeedback> {formErrors.name} </FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-img">Image</Label>
          <Input
            id="product-img"
            name="img"
            type="text"
            onChange={inputChangeHandler}
            value={product.img}
            invalid={!!formErrors.img}
          />
          {formErrors.img && <FormFeedback> {formErrors.img} </FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-description">Description</Label>
          <Input
            id="product-description"
            name="description"
            type="textarea"
            onChange={inputChangeHandler}
            value={product.description}
            invalid={!!formErrors.description}
          />
          {formErrors.description && (
            <FormFeedback> {formErrors.description} </FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-price">Price</Label>
          <Input
            id="product-price"
            name="price"
            type="number"
            onChange={inputChangeHandler}
            value={product.price}
            invalid={!!formErrors.price}
          />
          {formErrors.price && (
            <FormFeedback> {formErrors.price} </FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-stock">Stock</Label>
          <Input
            id="product-stock"
            name="stock"
            type="number"
            onChange={inputChangeHandler}
            value={product.stock}
            invalid={!!formErrors.stock}
          />
          {formErrors.stock && (
            <FormFeedback> {formErrors.stock} </FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-type">Product Type</Label>
          <Input
            id="product-type"
            name="type"
            type="select"
            onChange={inputChangeHandler}
            value={product.type}
          >
            <option value="accesories">Aksesuar</option>
            <option value="home-furniture">Ev Mobilyası</option>
            <option value="tech">Teknoloji</option>
            <option value="clothes">Giyim</option>
          </Input>
        </FormGroup>

        <Button color="primary" type="submit" disabled={!isFormValid}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default CreateProduct;
