import React, { useState } from "react";
import SettingsSeciton from "./SettingsSeciton";
import { HelpCircle, PlusCircle } from "lucide-react";
import { CONNECTEDICONS } from "../../data/data";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState(CONNECTEDICONS);

  return (
    <SettingsSeciton icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          className="flex items-center justify-between py-3"
          key={account.id}
        >
          <div className="flex gap-2 items-center">
            <img src={account.icon} alt={account.name} className="w-6 h-6" />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) =>
                  acc.id === account.id
                    ? { ...acc, connected: !acc.connected }
                    : acc
                )
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}

      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 ">
        <PlusCircle size={18} className="mr-2" /> Add Account
      </button>
    </SettingsSeciton>
  );
};

export default ConnectedAccounts;
