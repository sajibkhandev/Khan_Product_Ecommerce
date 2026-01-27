import React from 'react'
import ProductsCencel from './ProductsCencel'

const ProductPrice = ({src,alt,price,subtotal}) => {
  return (
    <div>
      <div className='flex justify-between items-center py-6 px-10 shadow-[0_1px_13px_rgba(0,0,0,0.05)] mb-10'>
          <ProductsCencel src={src} alt={alt}/>
          <p>${price}</p>
          <input type="number" min="1" name="" className='border border-[#00000066] outline-0 w-[72px] h-[44px] rounded-sm py-1.5 px-3'/>
          <p>${subtotal}</p>
        </div>
    </div>
  )
}

export default ProductPrice
