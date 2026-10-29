import React from 'react'
import imgp1 from '../assets/imgp1.avif';
import imgp2 from '../assets/imgp2.avif';
import imgp3 from '../assets/imgp3.avif';
import imgp4 from '../assets/imgp4.avif';
import imgp5 from '../assets/imgp5.avif';
import imgp6 from '../assets/imgp6.avif';

function Categories() {
  return (
    <div>
        <div className='flex flex-row'>

            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                
                <img src={imgp1} class="h-full w-full object-cover object-bottom" alt="Category 1" />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={imgp2} class="h-full w-full object-cover object-bottom" alt="Category 2" />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={imgp3} class="h-full w-full object-cover object-bottom" alt="Category 3" />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={imgp4} class="h-full w-full object-cover object-bottom" alt="Category 4" />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={imgp5} class="h-full w-full object-cover object-bottom" alt="Category 5" />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={imgp6} class="h-full w-full object-cover object-bottom" alt="Category 6" />
            </div>
        </div>
   
            <div className="bg-red-50 py-8">
                <div class="flex flex-col items-center text-center font-bold">
                    <div className="text-4xl md:text-[40px] text-[#142E8E] tracking-wide mb-2">
                        FOR THE LOVE OF SIBLING
                    </div>
                    <p className="text-4xl md:text-[40px] text-[#142E8E] tracking-wide">
                        DIWALI GIFT THIS WAY
                    </p>
                </div>
            </div>



    </div>
  )
}

export default Categories
