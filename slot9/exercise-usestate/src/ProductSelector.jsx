import React, { useState } from 'react';

function ProductSelector() {
  const [products] = useState([
    { id: 1, name: 'Sản phẩm A' },
    { id: 2, name: 'Sản phẩm B' },
    { id: 3, name: 'Sản phẩm C' },
  ]);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedProductId(parseInt(event.target.value, 10));
  };

  const selectedProduct = products.find(p => p.id === selectedProductId);

  return (
    <div>
      <h3>Chọn một sản phẩm:</h3>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="radio"
            name="product"
            value={product.id}
            id={`product-${product.id}`}
            checked={selectedProductId === product.id}
            onChange={handleRadioChange}
          />
          <label htmlFor={`product-${product.id}`}>{product.name}</label>
        </div>
      ))}

      {selectedProduct && (
        <p>Bạn đã chọn: {selectedProduct.name}</p>
      )}
    </div>
  );
}

export default ProductSelector;
 