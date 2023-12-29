// Import necessary dependencies
import React from "react";
import { FaBed } from "react-icons/fa6";
import {
  FiWifi,
  FiMapPin,
  FiUsers,
  FiDollarSign,
  FiClock,
  FiAlertCircle,
  FiArrowRight,
} from "react-icons/fi";
import { MdOutlineBathroom } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const RestaurantBookingCard = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5">
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="https://placekitten.com/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="https://placekitten.com/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="https://placekitten.com/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="https://placekitten.com/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="https://placekitten.com/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[400px] w-[350px]  bg-[#151920] rounded-xl overflow-hidden md:max-w-2xl my-8 shadow-md">
        <img
          className="w-full h-48 object-cover"
          src="http://placekitten.com/g/800/400"
          alt="Hotel Room"
        />
        <div className="px-5">
          <h2 className="text-[20px] py-2">Standard Twin Room Ensuite</h2>
          <p className="flex items-center gap-1">
            <FiAlertCircle /> Reserve now, pay later
          </p>
          <p className="flex items-center gap-1">
            <FiWifi /> Free WiFi
          </p>
          <p className="flex items-center gap-1">
            <FiMapPin /> Free self parking
          </p>
          <p className="flex items-center gap-1">
            <FiUsers /> Sleeps 2
          </p>
          <p className="flex items-center gap-1">
            <MdOutlineBathroom />
            280 sq ft
          </p>
          <p className="flex items-center gap-1">
            <FaBed />2 Single Beds
          </p>
          <p className="flex items-center gap-1">
            <RiErrorWarningLine />
            Before Fri, 5 Jan
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign /> The price is ₹1,107
          </p>
          <p className="line-through flex items-center gap-1">
            <FiDollarSign />
            1,627
          </p>
          <p className="text-gray-400 flex items-center gap-1">
            <FiClock /> Fully refundable
          </p>

          <div className="flex items-center justify-between mt-5">
            <p className="flex items-center gap-1 bg-[#C59D5F] p-1 px-4 w-fit rounded">
              <FiArrowRight /> 32% off
            </p>
            <p className="flex items-center gap-1  bg-[#C59D5F] p-1  px-4 w-fit rounded">
              <FiDollarSign />
              1,388 total
            </p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-[13px] pt-3">includes taxes & fees</p>
            <p className="text-[13px] text-[red]">We have 1 left</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              Book Now
            </button>
            <button className="btn bg-amber-500 p-2 my-3 rounded hover:bg-transparent border border-amber-500 hover:border  text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBookingCard;
