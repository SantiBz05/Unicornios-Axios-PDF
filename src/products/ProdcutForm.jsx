// ProductsForm.js
import React from "react";
import { Button } from 'primereact/button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useProducts } from "./ProductsData";  // Usamos el hook para gestionar productos

const ProductsForm = () => {
    const { addProduct } = useProducts();  // Obtener la función addProduct

    // Valores iniciales del formulario
    const initialValues = {
        nombreProds: "",
        precioProds: "",
        stockProds: "",
        descriptionProds: ""
    };

    // Validación con Yup
    const validationSchema = Yup.object({
        nombreProds: Yup.string().required("El nombre del producto es obligatorio"),
        precioProds: Yup.number().required("El precio es obligatorio").positive("El precio debe ser positivo"),
        stockProds: Yup.number().required("El stock es obligatorio").integer("El stock debe ser un número entero").min(0, "El stock no puede ser negativo"),
        descriptionProds: Yup.string().required("La descripción es obligatoria")
    });

    // Función para manejar el envío del formulario
    const onSubmit = (values, { resetForm }) => {
        // Llamamos a la función addProduct para agregar el nuevo producto
        addProduct(values);

        // Limpiar el formulario después de agregar el producto
        resetForm();
    };

    return (
        <div className="p-4">
            <h2>Agregar Producto</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="p-field">
                            <label htmlFor="nombreProds">Nombre del Producto</label>
                            <Field id="nombreProds" name="nombreProds" placeholder="Nombre del producto" />
                            <ErrorMessage name="nombreProds" component="div" className="p-error" />
                        </div>
                        <div className="p-field">
                            <label htmlFor="precioProds">Precio</label>
                            <Field id="precioProds" name="precioProds" type="number" placeholder="Precio" />
                            <ErrorMessage name="precioProds" component="div" className="p-error" />
                        </div>
                        <div className="p-field">
                            <label htmlFor="stockProds">Stock</label>
                            <Field id="stockProds" name="stockProds" type="number" placeholder="Stock" />
                            <ErrorMessage name="stockProds" component="div" className="p-error" />
                        </div>
                        <div className="p-field">
                            <label htmlFor="descriptionProds">Descripción</label>
                            <Field id="descriptionProds" name="descriptionProds" placeholder="Descripción" />
                            <ErrorMessage name="descriptionProds" component="div" className="p-error" />
                        </div>

                        <Button type="submit" label="Agregar Producto" disabled={isSubmitting} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProductsForm;
