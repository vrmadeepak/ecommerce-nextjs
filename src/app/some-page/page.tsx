'use client';

import MobileFooter from "@/components/mobileFooter/page";
import { useState, useEffect } from "react";

export default function Profile() {
  const [displayText, setDisplayText] = useState("Jugnu");

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("https://jugnu-backend.dcodingclub.com/");
        if (response.ok) {
          const data = await response.json();
          console.log(">>> data", data)
          // Assuming the API returns an object with a 'text' property
          setDisplayText(data.message);
        } else {
          // If request is not successful, keep displaying "Jugnu"
          console.error("Failed to fetch data from API");
        }
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  return (
    <main className="w-full sm:w-6/12 lg:w-4/12 xl:w-4/12 space-y-3 rounded-3xl bg-white shadow-2xl z-10">
      
      this is some page
      <MobileFooter></MobileFooter>
    </main>
  );
}
