import React from "react";
import Navbar from "./Navbar";
import bedroom from "/image/bedroom.jpg";
import bedroom2 from "/image/bedroom2.jpg";
import bedroom3 from "/image/bedroom3.jpg";
import bedroom4 from "/image/bedroom4.jpg";
import bedroom5 from "/image/bedroom5.jpg";
import superoyo from "/public/image/SuperOYO.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper/modules";
import {
  AirVent,
  BatteryCharging,
  CarTaxiFront,
  Check,
  Heart,
  Heater,
  Hotel,
  MonitorStop,
  Percent,
  Star,
  Wifi,
} from "lucide-react";
import "swiper/css";
const ViewDetails = () => {
  const images = [bedroom, bedroom2, bedroom3, bedroom4, bedroom5];
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex h-[450px] overflow-y-scroll">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
        >
          {images.map((item, idx) => (
            <SwiperSlide>
              <img src={item} alt="bedroom" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full justify-center gap-16 py-8">
        <div className="w-[700px]  flex flex-col gap-2">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-2 ">
              <p className="text-4xl  font-bold ">
                Super Hotel O Mn Residency Near <br /> Ragigudda Sri Prasanna{" "}
                <br /> Anjaneyaswamy Temple
              </p>
              <p className="text-[#BFBFBF]">
                Madiwala, South Zone, Bangalore South, Bangalore Urban, 560034,
                <br />
                Bangalore
              </p>
              <div className="flex flex-col  gap-4">
                <div className="flex border w-[90px] items-center justify-center py-1  bg-[#F5F5F5] gap-1">
                  <img className="w-[14px] h-[11px]" src={superoyo} alt="" />
                  <p className="text-xs font-medium ">Super OYO</p>
                </div>
                <div className="flex pl-6">
                  <p>5.0 · Check-in rating Delightful experience</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex gap-1 bg-[#58AC00]  rounded-t-sm text-white px-2 py-1 justify-center items-center ">
                <p className="font-bold text-2xl"> 4.3 </p>
                <Star className="size-5" />
              </div>
              <div className="bg-[#F4F4F4] rounded-b-sm text-xs flex justify-center items-center    ">
                <p>762 Ratings</p>
              </div>
            </div>
          </div>
          <div className="py-5">
            <div className="border w-fit px-2 py-1 items-center gap-1 bg-[#FFF6EE] text-[#F49242] font-semibold rounded-md flex">
              <Heart className="size-3" />
              <p>
                Located 5 Km From Ragigudda Sri Prasanna Anjaneyaswamy Temple
              </p>
            </div>
          </div>
          <div className="flex  pb-6">
            <h1 className="font-bold text-2xl">Amenities</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-28 ">
              <div className="flex flex-col gap-5">
                <div className="flex  gap-2 ">
                  <AirVent />
                  <p className="">AC</p>
                </div>
                <div className="flex gap-2">
                  <BatteryCharging />
                  <p>power backup</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex  gap-2">
                  <MonitorStop />
                  <p>TV</p>
                </div>
                <div className="flex gap-2">
                  <Heater />
                  <p>Heater</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <Wifi />
                  <p>Free Wifi</p>
                </div>
                <div className="flex gap-2">
                  <CarTaxiFront />
                  <p>Parking facility</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#F02E24] font-semibold">Show More</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <p className="text-2xl font-bold py-4">About this OYO</p>
            <p className="">Affordable hotel at prime location.</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold pt-4 pb-3">Choose your room</h1>
            <div className="bg-[#9295AE] rounded-t-md">
              <p className="pl-4 text-white font-semibold">Selected Category</p>
            </div>
            <div className="h-[230px] border rounded-md">
              <div className="flex justify-between border-b pb-5">
                <div className="flex flex-col pl-6 pt-3 gap-2">
                  <div className="flex gap-2 items-center">
                    <p className="text-xl font-semibold">Classic</p>
                    <div className=" items-center">
                      <Check className="text-white rounded-full size-4 bg-green-400" />
                    </div>
                  </div>
                  <p>Room size: 9 sqm</p>
                  <div className="flex  gap-6 pt-8 ">
                    <div className="flex  gap-2">
                      <AirVent />
                      <p>AC</p>
                    </div>
                    <div className="flex gap-2">
                      <MonitorStop />
                      <p>TV</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 pr-4">
                  <img
                    className="w-[195px] h-[120px] rounded-lg"
                    src={bedroom}
                    alt="room"
                  />
                </div>
              </div>
              <div className="flex justify-between px-4 py-3">
                <div className="flex flex-col">
                  <div className="flex justify-center items-center gap-2">
                    <p className="font-semibold text-xl text-black">₹ 800</p>
                    <p className="text-[#6D787D] text-sm">₹3718</p>
                  </div>
                  <p className="text-[#6D787D] text-sm">+ ₹188 taxes & fee</p>
                </div>
                <div className="flex items-center gap-1 border rounded-md px-12">
                  <Check className="size-4 rounded-full  text-white bg-green-400" />
                  <p className="font-semibold text-[#222222] text-sm">
                    SELECTED
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 flex flex-col gap-2 pb-4">
              <div>
                <p className="text-2xl font-semibold">Ratings and reviews</p>
              </div>
              <div className="flex  border-red-500 border rounded-md w-fit items-center gap-1 justify-center  px-2 py-1">
                <Check className="size-3 rounded-full bg-red-500 text-white" />
                <p className="text-sm font-bold text-red-500"> ISO </p>
                <p className="text-xs font-semibold ">CERTIFIED</p>
              </div>
            </div>
            <div className="border h-[130px]">
              <div className="flex ">
                <div className="flex w-[300px] flex-col items-center py-6 border-r">
                  <div className="flex items-center gap-1 w-fit px-2 py-1 rounded-md bg-[#58AC00]">
                    <p className="text-white text-2xl font-semibold">4.3</p>
                    <Star className="size-3 text-white " />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-black font-medium">Very Good</p>
                    <p className="text-xs">879 ratings</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className="">5</p>
                  <p>4</p>
                  <p>3</p>
                  <p>2</p>
                  <p>1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[400px] border h-[700px]">
          <div className="flex bg-red-500 items-center gap-4">
            <Percent className="text-red-500 size-4 rounded-full bg-white" />
            <p className="text-white">
              Login now to get upto 15% lower prices{" "}
            </p>
            <div className="flex"></div>
            <p>LOGIN</p>
          </div>
          <div className="border w-fit"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
