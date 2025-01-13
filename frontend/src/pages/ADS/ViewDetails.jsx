import React from "react";
import Navbar from "./Navbar";
import bedroom from "/image/bedroom.jpg";
import bedroom2 from "/image/bedroom2.jpg";
import bedroom3 from "/image/bedroom3.jpg";
import superoyo from "/public/image/SuperOYO.png";
import {
  AirVent,
  BatteryCharging,
  CarTaxiFront,
  Check,
  Heart,
  Heater,
  Hotel,
  MonitorStop,
  Star,
  Wifi,
} from "lucide-react";
const ViewDetails = () => {
  const images = [bedroom, bedroom2, bedroom3];
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex h-[450px] overflow-y-scroll">
        {images.map((item, idx) => (
          <img src={item} alt="bedroom" />
        ))}
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
            <div className="h-[200px] border rounded-md">
              <div className="flex flex-col pl-6 pt-3 gap-2">
                <div className="flex gap-4 items-center">
                  <p className="text-xl font-semibold">Classic</p>
                  <div className="bg-green-400 rounded-full size-6 ">
                    <Check className="text-white" />
                  </div>
                </div>
                <p>Room size: 9 sqm</p>
                <div className="flex  gap-6 pt-8">
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
            </div>
          </div>
        </div>
        <div className="w-[400px] bg-slate-600 border h-50vh">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
