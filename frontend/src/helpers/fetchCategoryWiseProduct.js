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


const { default: SumaryApi } = require("../common")

const fetchCategoryWiseProduct = async(category)=>{
    const response = await fetch(SumaryApi.categoryWiseProduct.url,{
        method : SumaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })
    const dataResponse = await response.json()
    return dataResponse
}

export default fetchCategoryWiseProduct;



