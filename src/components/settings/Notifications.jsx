import React, { useState } from "react";
import SettingsSeciton from "./SettingsSeciton";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notification, setNotifications] = useState({
    push: true,
    email: false,
    sms: true,
  });

  return (
    <SettingsSeciton icon={Bell} title={"Notifications"}>
      <ToggleSwitch
        label={"Push Notification"}
        isOn={notification.push}
        onToggle={() =>
          setNotifications({ ...notification, push: !notification.push })
        }
      />
      <ToggleSwitch
        label={"Email Notification"}
        isOn={notification.email}
        onToggle={() =>
          setNotifications({ ...notification, email: !notification.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notification"}
        isOn={notification.sms}
        onToggle={() =>
          setNotifications({ ...notification, sms: !notification.sms })
        }
      />
    </SettingsSeciton>
  );
};

export default Notifications;
