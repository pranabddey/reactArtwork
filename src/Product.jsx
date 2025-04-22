import React, { useEffect, useState } from 'react'



function Product() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

     function getProducts() {
          fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setData(data))
    }
    return (
        // <div className='text-3xl underline'>Product</div>
        <>
            <div className='pa'>
                {
                    data.map((el) => (
                            <li key={el.id}>{el.title}</li>

                    ))
                }
            </div>
        </>
    )
}

export default Product