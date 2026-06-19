import { FaLocationDot, FaPhone } from "react-icons/fa6";

const LocationCard = ({Outlet, Branch, Phone}) => {
  return (
    <div className="flex gap-6 items-center bg-[#f9fafb] rounded-2xl px-6 py-4 shadow-sm shadow-gray-200">
                <div>
                  <FaLocationDot className="text-[#9e1212] text-2xl" />
                </div>
                <div className="font-jarkata flex flex-col gap-3">
                  <h3 className="font-bold text-lg">{Outlet}</h3>
                  <small>{Branch}</small>
                  <p className="text-[#9e1212] flex gap-2 items-center">
                    <FaPhone />
                    {Phone}
                  </p>
                </div>
              </div>
  )
}

export default LocationCard