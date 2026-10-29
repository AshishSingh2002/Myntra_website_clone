import React from 'react'
import google from '../assets/google.jpg';
import apple from '../assets/apple.jpg';
import facebook from '../assets/facebook.svg';
import insta from '../assets/insta.svg';
import twitter from '../assets/twitter.svg'
import original from '../assets/original.webp'
import R from '../assets/R.webp';

function Footer() {
    return (

        <div>
            <div className='flex bg-[#fafbfc] mt-[10px] pt-[20px]'>
                <div className='basis-1/6 pl-[10px]'>
                    <div>
                        <div>
                            <p className='mb-[40px]'>Online Shopping</p>
                            <ul className='mb-[40px]'>
                                <li>
                                    Men
                                </li>
                                <li>
                                    Women
                                </li>
                                <li>
                                    Kids
                                </li>
                                <li>
                                    Home & Living
                                </li>
                                <li>
                                    Beauty
                                </li>
                                <li>
                                    Gift Card
                                </li>
                                <li>
                                    Myntra Insider
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='mb-[40px]'>USEFUL LINK</p>
                            <ul className='mb-[40px]'>
                                <li>
                                    BLOG
                                </li>
                                <li>
                                    CAREER
                                </li>
                                <li>
                                    SITE MAP
                                </li>
                                <li>
                                    CORPORATE INFORMATION
                                </li>
                                <li>
                                    WHITE HAT
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className='basis-1/6'>
                    <div>
                        <div>
                            <p className='mb-[40px]'>CUSTOMER POLICIES</p>
                            <ul className='mb-[40px]'>
                                <li>
                                    Contact Us
                                </li>
                                <li>
                                    FAQ
                                </li>
                                <li>
                                    T & C
                                </li>
                                <li>
                                    Terms of Use
                                </li>
                                <li>
                                    Track Order
                                </li>
                                <li>
                                    Cancellation
                                </li>
                                <li>
                                    Returns
                                </li>
                                <li>
                                    Privacy Policy
                                </li>
                                <li>
                                    Grievanance Officer
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3">
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold tracking-wide">
                            EXPERIENCE MYNTRA APP ON MOBILE
                        </p>

                        <div className="flex items-center gap-3">
                            <img
                                src={google}
                                alt="Get it on Google Play"
                                className="w-32 h-auto object-contain"
                            />

                            <img
                                src={apple}
                                alt="Download on the App Store"
                                className="w-32 h-auto object-contain"
                            />
                        </div>


                        <div className="flex flex-col gap-4">
                            <p className="text-xs font-bold tracking-wide">
                                Keep In Touch
                            </p>

                            <div className="flex items-center gap-3">
                                <img src={facebook} alt="Logo" className="w-10 h-10" />
                                <img src={insta} alt="Logo" className="w-10 h-10" />
                                <img src={twitter} alt="Logo" className="w-10 h-10" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="basis-1/3">
                    <div className="flex flex-col gap-3">
                        <div className="w-full">
                            <img src={original} alt="Original" className="w-20 h-auto" />
                            <p className='font-bold'>100% Original </p>
                            <p>Guarantee for all products at myntra.com</p>
                        </div>

                        <div className="w-full">
                            <img src={R} alt="App" className="w-20 h-auto" />
                            <p className='font-bold'>Return within 14 Days</p>
                            <p>receiving your order</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer