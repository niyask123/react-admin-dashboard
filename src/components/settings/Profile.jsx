import React from "react";
import SettingsSeciton from "./SettingsSeciton";
import { User } from "lucide-react";

const Profile = () => {
  return (
    <SettingsSeciton icon={User} title={"profile"}>
      <div className="flex flex-col  sm:flex-row items-center mb-6">
        <img
          src="https://niyaskknr.vercel.app/image/personal/personal.jpg"
          alt="img"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />
        <div className="">
          <h3 className="text-lg font-semibold text-gray-100">Niyas</h3>
          <p className="text-gray-400 text-sm">Niyaskknr@gmail.com</p>
        </div>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit profile
      </button>
    </SettingsSeciton>
  );
};

export default Profile;
