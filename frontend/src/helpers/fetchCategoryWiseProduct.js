// const { default: SumaryApi } = require("../common");

// const fetchCategoryWiseProduct = async (category) => {
//     try {
//         const response = await fetch(SumaryApi.categoryWiseProduct.url, {
//             method: SumaryApi.categoryWiseProduct.method,
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ category }),
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const dataResponse = await response.json();
//         return dataResponse;
//     } catch (error) {
//         console.error("Error fetching category-wise product:", error);
//         throw error; // Re-throw to propagate error to the caller
//     }
// };

// export default fetchCategoryWiseProduct;


import { useState, useEffect } from "react";
import SumaryApi from "../common/SumaryApi"; // Add this line to import SumaryApi

const fetchCategoryWiseProduct = async (category, controller) => {
    try {
        console.log("Fetching from:", SumaryApi.categoryWiseProduct.url);

        const response = await fetch(SumaryApi.categoryWiseProduct.url, {
            method: SumaryApi.categoryWiseProduct.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ category: category }),
            signal: controller.signal // Pass signal to handle cancellation
        });

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const dataResponse = await response.json();

        if (!dataResponse || !dataResponse.data) {
            throw new Error("No data found in the response.");
        }

        return dataResponse;
    } catch (error) {
        if (error.name !== "AbortError") {
            console.error("Error in fetching data:", error.message);
        }
    }
};

const YourComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const controller = new AbortController();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCategoryWiseProduct("category-name", controller);
                setData(result?.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error in fetching category data:", error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            controller.abort(); // Cancel the fetch request if the component unmounts
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    );
};

export default YourComponent;





