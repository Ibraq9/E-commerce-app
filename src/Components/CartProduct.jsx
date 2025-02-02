import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'

const CartProduct = ({countProduct,Size1, Image1, Name1, Price1 ,ID}) => {

    const { currency,updateQuantity} = useContext(shopContext);

    return (
        <div className='flex justify-between gap-10 mt-5'>

            <div className='flex gap-10'>
                <img className='w-20 rounded-lg' src={Image1} />

                <div className='flex flex-col gap-4'>
                    <p>{Name1}</p>
                    <div className='flex gap-16'>
                        <b>{currency} {Price1}</b>
                        <b>{Size1}</b>
                    </div>

                </div>
            </div>

            <div>
                <input onChange={(e)=>e.target.value===''||e.target.value==='0'?null:updateQuantity(ID,Size1,Number(e.target.value))} className='w-10' type='number'  min={1} defaultValue={countProduct}/>
            </div>

            <div className='cursor-pointer  flex items-center justify-center'>
                <img onClick={()=>updateQuantity(ID,Size1,0)} className='w-6 hover:scale-125 hover:rotate-12 transition-all' src='src\assets\My_assets\trash.png' alt='Trash_delete_item' />
            </div>

        </div>
    )
}

export default CartProduct
