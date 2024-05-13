import React,{createContext} from "react";
import { useState } from "react";
import Cart from "./Components/Cart";

export const mycontext = createContext('');
function App() {
  const  Products=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://www.thesun.co.uk/wp-content/uploads/2018/05/nintchdbpict0004083573263.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.ldlc.com%2Fld%2Fproducts%2F00%2F05%2F02%2F16%2FLD0005021674_2_0005021737.jpg&f=1&nofb=1&ipt=c47855fd9f5aabc2e0e89850035699ff9829f0f32c3afcd55613fbbf23b68fb9&ipo=images",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.ldlc.com%2Fld%2Fproducts%2F00%2F04%2F78%2F98%2FLD0004789875_2.jpg&f=1&nofb=1&ipt=78aecf4a931134603be8c7d2fcb252afe815ae1196c8800557fa5d7cceaa7527&ipo=images"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.priceoye.pk%2Foppo-f19-pakistan-priceoye-93g68.jpg&f=1&nofb=1&ipt=a07e16f8784ac2b6852a762c3106de7f403444794ad1d3bbd3c8e411a66a844d&ipo=images",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "quantity":1,
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hartware.de%2Fwp-content%2Fuploads%2F2019%2F03%2FHuawei-P30.jpg&f=1&nofb=1&ipt=08116b68032016e12e012d071dbe637306c00979469a149a2a82ba7baecd68fc&ipo=images",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }
]
const [list,setList] = useState(Products);
  return(<>
  <mycontext.Provider value={[list,setList]}>
  <Cart />
  </mycontext.Provider>
  </>);
}

export default App
