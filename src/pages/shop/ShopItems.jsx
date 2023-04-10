import React from 'react';
import { Heart } from 'phosphor-react';
import firstImage from '../../assets/6.jpg';

export default function ShopItems() {
  return (
    <div className="max-w-[260px] min-w-[240px] sm:w-2/3 md:w-2/3 large:w-1/3 xl:w-1/5 rounded-xl shadow-md bg-secondary-bg pb-4 pt-4">
      {/* cards */}
        <img
          className="h-[160px] mx-auto py-3 px-3"
          src={firstImage}
          alt="Sunset in the mountains"
        />
        <div className="px-4 py-2">
          <div className="font-semibold text-sm mb-2 truncate">
            The Coldest Sunset
          </div>
          <p className="max-h-[50px] text-gray-700 text-[14px] truncate-2-lines">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            $199
          </span>
          {/* favorites and cart items */}
          <div className="flex justify-around items-center py-3 px-5">
            <div>
              <Heart size={26} className=' hover:fill-red mr-5' weight='fill' color='#f28482'/>
            </div>
            <div>
              <button className="text-sm bg-primary px-10 py-[12px] rounded-3xl text-white">Buy</button>
            </div>
          </div>
        </div>
    </div>
  );
}
