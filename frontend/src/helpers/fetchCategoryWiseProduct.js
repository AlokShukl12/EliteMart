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
        // Make the fetch request
        const response = await fetch(SumaryApi.categoryWiseProduct.url, {
            method: SumaryApi.categoryWiseProduct.method, // POST or GET method based on your API
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: category, // The category you want to fetch the products for
            }),
        });

        // Check if response status is OK (200)
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        // Parse the response JSON
        const dataResponse = await response.json();
        
        // Return the fetched data
        return dataResponse;
        
    } catch (error) {
        // Log the error to the console for debugging purposes
        console.error("Error in fetchCategoryWiseProduct:", error);

        // Optionally, alert the user or show an error message
        alert("There was an issue fetching category data. Please try again later.");
        return null; // You could also return an empty object/array based on the expected result
    }
};

export default fetchCategoryWiseProduct;






