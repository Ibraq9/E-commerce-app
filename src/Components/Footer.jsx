import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='mt-20 m-5'>
            <div className='flex flex-col gap-10 sm:grid sm:grid-cols-2 items-center'>
                <div className='flex flex-col items-center '>
                    <div className='flex items-center'>
                        <p>Who are we?</p>
                        <img src={assets.logo} className='w-32' />
                    </div>

                    <p className='p-4'>
                        Welcome to our store! We’re passionate about offering high-quality products that combine style, comfort, and affordability. Our mission is to provide a seamless shopping experience with exceptional customer service. We curate the latest trends and timeless essentials to elevate your lifestyle. Thank you for choosing us as your go-to destination!
                    </p>
                </div>

                <div className='flex flex-col gap-5 items-center '>
                    <div className='flex items-center gap-5'>
                        <p>Contact us</p>
                        <img src={assets.contact_img} className='w-10' />
                    </div>

                    <div>

                        <div className='flex items-center gap-3'>
                            <img className='w-6' src={assets.email}/>
                            <p>IbraContact99@Contact.com</p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <img className='w-6' src={assets.phone}/>
                            <p>+1 (123) 456-7890</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center pt-16 my-5'>
                <p>CopyRight 2025@ shopping.com - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer
