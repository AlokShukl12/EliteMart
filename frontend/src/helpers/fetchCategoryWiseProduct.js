const { default: SummaryApi } = require("../common");

const fetchCategoryWiseProduct = async (category) => {
    try {
        const response = await fetch(SummaryApi.categoryWiseProduct.url, {
            method: SummaryApi.categoryWiseProduct.method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({category}),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const dataResponse = await response.json();
        return dataResponse;
    } catch (error) {
        console.error("Error fetching category-wise product:", error);
        throw error; 
    }
};

export default fetchCategoryWiseProduct;









