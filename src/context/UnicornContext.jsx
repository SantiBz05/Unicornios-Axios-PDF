import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
    const [unicorns, setUnicorns] = useState([]);
    const API_URL = "https://crudcrud.com/api/4df8fd1bc8704eaebedec60ae8ac7d6d/unicorns";

    const getUnicorns = async () => {
        try {
            const { data } = await axios.get(API_URL);
            setUnicorns(data);
        } catch (error) {
            console.error("Error al obtener unicornios", error);
            alert("Error al obtener los unicornios.");
        }
    };

    const handleAddUnicorn = async ({ name, color, age, power }) => {
        try {
            const { data : created } = await axios.post(API_URL, {
                name,
                data: { color, age: Number(age), power },
              });
            setUnicorns((prevUnicorns) => [...prevUnicorns, created]);
        } catch (error) {
            console.error("Error al añadir el unicornio", error);
            alert("Error al añadir el unicornio.");
        }
    };

    const handleEditUnicorn = async ({ _id, name, color, age, power }) => {
        try {
          await axios.put(`${API_URL}/${_id}`, {
            name,
            data: { color, age: Number(age), power, status },
          });
          setUnicorns((prev) =>
            prev.map((u) =>
              u._id === _id ? { ...u, name, data: { color, age, power } } : u
            )
          );
        } catch (error) {
          alert("Error al editar unicornio");
          console.error(error);
        }
      }; 

    const handleDeleteUnicorn = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setUnicorns((prevUnicorns) => prevUnicorns.filter((unic) => unic._id !== id));
        } catch (error) {
            console.error("Error al eliminar el unicornio", error);
            alert("Error al eliminar el unicornio.");
        }
    };

    useEffect(() => {
        getUnicorns();
    }, []);

    return (
        <UnicornContext.Provider
            value={{
                unicorns,
                getUnicorns,
                handleAddUnicorn,
                handleEditUnicorn,
                handleDeleteUnicorn,
            }}
        >
            {children}
        </UnicornContext.Provider>
    );
};
export const useUnicornContext = () => {
    return useContext(UnicornContext);
};