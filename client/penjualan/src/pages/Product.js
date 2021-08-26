import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Product(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(products => {
                console.log(products);
                setProducts(products)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            {/* {
                JSON.stringify(products.data.products)
            } */}
            <h1>sdasdsa</h1>
        </>
    )
}