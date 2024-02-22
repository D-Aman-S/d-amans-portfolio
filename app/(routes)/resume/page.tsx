"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ResumePage = () => {
  const router = useRouter();
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        // Fetch user's IP address
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const ipAddress = ipResponse.data.ip;

        // Fetch location data based on IP address
        const locationResponse = await axios.get(
          `http://api.ipstack.com/${ipAddress}?access_key=at_MzJcSi9pRNnHL7PTLsAyHGltjEC4l`
        );
        setLocationData(locationResponse.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
    window.location.href =
      "https://drive.google.com/file/d/1y26oBuZnJl2di3HC89FwlBrBV2AMQtLz/view?usp=sharing";
  }, []);

  useEffect(() => {
    // Extract query parameters
    // const { tag } = router.query;

    // Store the location and tag information (you can replace this with your preferred storage method)
    console.log("Location:", locationData);
    // console.log("Tag:", tag);

    // You can perform additional actions here if needed
  }, [
    // router.query,
    locationData,
  ]);

  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
};

export default ResumePage;
