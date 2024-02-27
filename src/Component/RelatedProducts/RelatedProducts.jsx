import React from 'react';
import "./RelatedProducts.css"
import ProductCard from '../ProductCard/ProductCard.jsx'

const RelatedProducts = () => {
    return (
        <div className="related-products-container">
            <p>Related deals you might like for</p>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            
            <div className="signup-container">
                <span>Sign up and get exclusive special deals</span>

                <button className="btn-signup">
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default RelatedProducts