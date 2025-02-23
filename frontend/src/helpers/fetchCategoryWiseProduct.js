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


const { default: SumaryApi } = require("../common");

const fetchCategoryWiseProduct = async (category) => {
    try {
        // Log the API URL for debugging
        console.log("Fetching from:", SumaryApi.categoryWiseProduct.url);
        
        const response = await fetch(SumaryApi.categoryWiseProduct.url, {
            method: SumaryApi.categoryWiseProduct.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                category: category
            })
        });

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const dataResponse = await response.json();

        // If no data is found, throw an error
        if (!dataResponse || !dataResponse.data) {
            throw new Error("No data found in the response.");
        }

        return dataResponse;
    } catch (error) {
        // Log the error for debugging
        console.error('Error fetching category-wise product:', error);

        // Optionally, show an error message to the user or handle it differently
        throw error; // Propagate the error to be handled elsewhere (e.g., in the component)
    }
};

export default fetchCategoryWiseProduct;




