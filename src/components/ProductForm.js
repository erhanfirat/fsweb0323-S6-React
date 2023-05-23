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
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

// component başlangıcı
const ProductForm = () => {
  // 1 - Data Derfinition: state, local, prop
  // ************************************************

  const formErrors = {};

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      img: "",
      description: "",
      price: 0,
      stock: 0,
      type: "",
    },
    mode: "all",
  });

  const { ref: refName, ...registerName } = register("name", {
    required: `İsim alanı boş bırakılamaz!`,
    minLength: {
      value: 3,
      message: `İsim alanı minimum 3 karakter olmalıdır.`,
    },
  });

  const { ref: refImg, ...registerImg } = register("img");

  const textValidations = (fieldName) => ({
    required: `${fieldName} alanı boş bırakılamaz!`,
    minLength: {
      value: 3,
      message: `${fieldName} minimum 3 karakter olmalıdır.`,
    },
  });

  const nav = useNavigate();

  // 2 - Methods, functions
  // ************************************************

  const formSubmit = (formData) => {
    console.log("formSubmit > formData: ", formData);

    toast.info("Form bilgisi iletildi!");
    setTimeout(() => {
      toast.success("Form bilgisi iletildi!");
    }, 500);
    setTimeout(() => {
      toast.warn("Form bilgisi iletildi!");
    }, 1000);
    setTimeout(() => {
      toast.error("Form bilgisi iletildi!");
    }, 2000);

    // axios
    //   .post(
    //     "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products",
    //     formData
    //   )
    //   .then((res) => {
    //     console.log("Yeni product kayıt res > ", res);
    //     nav("/products");
    //   });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(formSubmit)}>
        <FormGroup>
          <Label htmlFor="product-name">Name</Label>
          <Input
            id="product-name"
            type="text"
            innerRef={refName}
            {...registerName}
            invalid={errors.name}
          />
          {/* {formErrors.name && <FormFeedback> {formErrors.name} </FormFeedback>} */}
          {errors.name && <FormFeedback> {errors.name.message} </FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-img">Image</Label>
          <Input
            id="product-img"
            type="text"
            innerRef={refImg}
            {...registerImg}
          />
          {errors.img && <FormFeedback> {errors.img} </FormFeedback>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-description">Description</Label>
          <input
            id="product-description"
            type="textarea"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            {...register("description", {
              required: "bu alan zorunludur!",
            })}
          />
          {errors.description && (
            <FormFeedback> {errors.description.message} </FormFeedback>
          )}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-price">Price</Label>
          <input
            id="product-price"
            type="number"
            className="form-control"
            {...register("price", { required: "Fiyat alanı boş bırakılamaz!" })}
          />
          {/* {formErrors.price && (
            <FormFeedback> {formErrors.price} </FormFeedback>
          )} */}
          {errors.price && <div> {errors.price.message} </div>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-stock">Stock</Label>
          <input
            id="product-stock"
            type="number"
            className="form-control"
            {...register("stock", {
              required: "Stok alanı boş bırakılamaz!",
              min: {
                value: 0,
                message: "Stok değeri sıfırdan küçük olamaz!",
              },
            })}
          />
          {/* {formErrors.stock && (
            <FormFeedback> {formErrors.stock} </FormFeedback>
          )} */}
          {errors.stock && <div> {errors.stock.message} </div>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="product-type">Product Type</Label>
          <select id="product-type" type="select" {...register("type")}>
            <option value="accesories">Aksesuar</option>
            <option value="home-furniture">Ev Mobilyası</option>
            <option value="tech">Teknoloji</option>
            <option value="clothes">Giyim</option>
          </select>
        </FormGroup>

        <Button color="primary" type="submit" disabled={!isValid}>
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
