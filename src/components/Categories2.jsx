import React from 'react'
import imgd1 from '../assets/imgd1.avif';
import imgd2 from '../assets/imgd2.avif';
import imgd3 from '../assets/imgd3.avif';
import imgd4 from '../assets/imgd4.avif';
import imgd5 from '../assets/imgd5.avif';


function Categories2() {
    return (
        <div>
            <div className='flex items-end gap-4'>
                <div className='flex flex-col w-full'>
                    <img src={imgd1} className='h-48 w-full object-cover'></img>
                    <p className='font-bold text-center'>Make Up Must have</p>
                    <p className='font-bold text-center'>MIN 40% OFF </p>
                </div>
                <div className='flex flex-col w-full'>
                    <img src={imgd2} className='h-48 w-full object-cover'></img>
                    <p className='font-bold text-center'>Prettiest Hand Bag</p>
                    <p className='font-bold text-center'>MIN 55% OFF </p>
                </div>
                <div className='flex flex-col w-full'>
                    <img src={imgd3} className='h-48 w-full object-cover'></img>
                    <p className='font-bold text-center'>Ethnic Wear Collection</p>
                    <p className='font-bold text-center'>MIN 38% OFF </p>
                </div>
                <div className='flex flex-col w-full'>
                    <img src={imgd4} className='h-48 w-full object-cover'></img>
                    <div>
                        <p className='font-bold text-center'>Indian Wear</p>
                        <p className='font-bold text-center'>MIN 45% OFF </p>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <img src={imgd5} className='h-48 w-full object-cover'></img>
                    <p className='font-bold text-center'>TimeLess Watches</p>
                    <p className='font-bold text-center'>MIN 30% OFF </p>
                </div>
            </div>

            <div className="bg-red-50 py-8">
                <div className="flex flex-col items-center text-center font-bold">
                    <div class="text-4xl md:text-[40px] text-[#142E8E] tracking-wide mb-2">
                        SHOP BY CATEGORY
                    </div>
                    <p className="text-4xl md:text-[40px] text-[#142E8E] tracking-wide">
                        MEDAL WORTHY BRAND TO BAG
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Categories2
