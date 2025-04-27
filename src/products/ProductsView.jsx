// ProductsView.js
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useProducts } from "./ProductsData";  // Usamos el hook para obtener los productos

const ProductsView = () => {
    const { productList } = useProducts();  // Obtener los productos actualizados desde localStorage

    return (
        <div className="p-4">
            <h2>Gestión de Productos</h2>

            <DataTable value={productList}>
                <Column field="nombreProds" header="Producto" />
                <Column field="precioProds" header="Precio" />
                <Column field="stockProds" header="Stock" />
                <Column field="descriptionProds" header="Descripcion" />
            </DataTable>
        </div>
    );
};

export default ProductsView;
