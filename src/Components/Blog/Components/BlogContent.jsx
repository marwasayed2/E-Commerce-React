import axios from 'axios';
import { useEffect, useState } from 'react'

export default function BlogContent() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProduct(response.data.products[0]);
            })
            .catch(error => {
                console.error("هناك خطأ في جلب البيانات:", error);
            });
    }, []);
    return (
        <div><section className="blog-content mb-4">
            {product ? (
                <>
                    <div>
                        <p className="ContentBlog">
                            {product.description}
                        </p>
                    </div>

                    <div className="responsive-blockquote">
                        <blockquote className="blockquote">
                            {product.title}
                        </blockquote>
                    </div>

                    <div>
                        <p className="ContentBlog">
                            Brand: {product.brand}
                        </p>
                    </div>

                    <div>
                        <p className="ContentBlog">
                            Price: ${product.price}
                        </p>
                    </div>

                    <hr className="breakline" />
                </>
            ) : (
                <p>Loading product data...</p>
            )}
        </section></div>
    )
}
