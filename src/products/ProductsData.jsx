import { useState } from "react";
const baseProducts = [
    { id: 1, nombreProds: "Monitor", precioProds: 250, stockProds: 10, descriptionProds: "curvo" },
    { id: 2, nombreProds: "Teclado", precioProds: 50, stockProds: 25, descriptionProds: "mecanico" },
    { id: 3, nombreProds: "Mouse", precioProds: 30, stockProds: 40, descriptionProds: "inalambrico" },
];

// Función para obtener los productos combinando el array base con los almacenados en localStorage
const getStoredProducts = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? [...baseProducts, ...JSON.parse(storedProducts)] : baseProducts;  // Combina los productos base con los de localStorage
};

// Hook para gestionar productos
export const useProducts = () => {
    const [productList, setProductList] = useState(getStoredProducts());

    // Función para agregar un nuevo producto
    const addProduct = (newProduct) => {
        // Asignar un nuevo ID
        newProduct.id = productList.length + 1;
        const updatedProducts = [...productList, newProduct];
        setProductList(updatedProducts);

        // Guardar los productos actualizados en localStorage
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    };

    return { productList, addProduct };
};
