import { createContext, useState, useEffect } from "react";

export const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
    const [unicorns, setUnicorns] = useState([]);
    const API_URL = "https://crudcrud.com/api/2e2f5c7d5f0d4d8d91d18ccb61296259/unicorns";

    const getUnicorns = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUnicorns(data);
        } catch (error) {
            console.error("Error al obtener unicornios", error);
            alert("Error al obtener los unicornios.");
        }
    };

    const handleAddUnicorn = async ({ name, color, age, power }) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    data: { color, age: Number(age), power },
                }),
            });
            const newUnicorn = await response.json();
            setUnicorns((prevUnicorns) => [...prevUnicorns, newUnicorn]);
        } catch (error) {
            console.error("Error al añadir el unicornio", error);
            alert("Error al añadir el unicornio.");
        }
    };

    const handleEditUnicorn = async ({ id, name, color, age, power }) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    data: { color, age: Number(age), power },
                }),
            });
            setUnicorns((prevUnicorns) =>
                prevUnicorns.map((unic) =>
                    unic._id === id ? { ...unic, name, data: { color, age, power } } : unic
                )
            );
        } catch (error) {
            console.error("Error al editar el unicornio", error);
            alert("Error al editar el unicornio.");
        }
    };

    const handleDeleteUnicorn = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
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
                handleAddUnicorn,
                handleEditUnicorn,
                handleDeleteUnicorn,
            }}
        >
            {children}
        </UnicornContext.Provider>
    );
};
