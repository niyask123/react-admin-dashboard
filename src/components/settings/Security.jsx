import React, { useState } from "react";
import SettingsSeciton from "./SettingsSeciton";
import { Lock } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingsSeciton icon={Lock} title={"Secrutity"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200">
          Change Password
        </button>
      </div>
    </SettingsSeciton>
  );
};

export default Security;
