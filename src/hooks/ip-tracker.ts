import { useState, useEffect, FormEvent } from "react";
// apis
import ipAdressApi from "../services/ipAddressApi";

const useIpTracker = () => {
  // It's the ip that will be tracker
  const [ip, setIp] = useState("");

  // dashboard data
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setISP] = useState("");

  // location
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  // erros
  const [ipErrorStatus, setIpErrorStatus] = useState(false);

  // tracking the ip adress
  const handleSubmitIp = async (e: FormEvent) => {
    e.preventDefault();
    const data = await ipAdressApi
      .get(`&ipAddress=${ip}`)
      .then((r) => r.data)
      .catch((err) => {
        setIpErrorStatus(true);
        alert("Invalid ip, try again");
        console.log(err);
      });

    // It's putting all keys information on states
    if (data) {
      setIpAddress(data.ip);
      setLocation(
        `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
      );
      setTimezone(`UTC ${data.location.timezone}`);
      setISP(data.isp);
      setPosition([data.location.lat, data.location.lng]);
    }
  };

  useEffect(() => {
    const handleData = async () => {
      // request without an ip, the api will return data based on the user ip address
      const data = await ipAdressApi
        .get(``)
        .then((r) => r.data)
        .catch((err) => {
          console.log(err);
        });

      // if data is valid
      if (data) {
        setIpAddress(data.ip);
        setLocation(
          `${data.location.region}, ${data.location.country} ${data.location.postalCode}`
        );
        setTimezone(`UTC ${data.location.timezone}`);
        setISP(data.isp);
        setPosition([data.location.lat, data.location.lng]);
      }
    };

    handleData();
  }, []);

  useEffect(() => {
    if (ipErrorStatus) {
      document.querySelector('input[name="ip-adress"]')?.classList.add("error");
    } else {
      document
        .querySelector('input[name="ip-adress"]')
        ?.classList.remove("error");
    }
  }, [ipErrorStatus]);

  return {
    ip,
    setIp,
    handleSubmitIp,
    ipAddress,
    location,
    isp,
    timezone,
    position,
    setIpErrorStatus,
  };
};

export default useIpTracker;