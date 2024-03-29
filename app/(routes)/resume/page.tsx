"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SplashScreen from "@/app/_components/SplashScreen";

const ResumePage = () => {
  const router = useRouter();
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        // // Fetch user's IP address
        // const ipResponse = await axios.get("https://api.ipify.org?format=json");
        // const ipAddress = ipResponse.data.ip;
        // // Fetch location data based on IP address
        // const locationResponse = await axios.get(
        //   `https://geo.ipify.org/api/v2/country,city?apiKey=at_MzJcSi9pRNnHL7PTLsAyHGltjEC4l&ipAddress=${ipAddress}`
        // );
        // setLocationData(locationResponse.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();

    // window.location.href =
    //   "https://drive.google.com/file/d/1y26oBuZnJl2di3HC89FwlBrBV2AMQtLz/view?usp=sharing";
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href =
        "https://drive.google.com/file/d/1y26oBuZnJl2di3HC89FwlBrBV2AMQtLz/view?usp=sharing";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Extract query parameters
    // const { tag } = router.query;
    // Store the location and tag information (you can replace this with your preferred storage method)
    // console.log("Location:", locationData);
    // console.log("Tag:", tag);
    // You can perform additional actions here if needed
  }, [
    // router.query,
    locationData,
  ]);

  return <SplashScreen />;
};

export default ResumePage;
