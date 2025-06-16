import React, { useEffect } from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

export function LotMapView() {
  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 14.5995, lng: 120.9842 }, // Example coordinates (Manila, Philippines)
        zoom: 15,
      });

      // Add a marker for the center point
      new window.google.maps.Marker({
        position: { lat: 14.5995, lng: 120.9842 },
        map: map,
        title: "Lot Location",
      });
    };

    return () => {
      // Clean up the script when the component unmounts
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
        <Card className="overflow-hidden">
          <CardBody className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="h5" color="blue-gray">
                Lot Map View
              </Typography>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" color="green" onClick={() => alert('Available Lots clicked')}>Available</Button>
                <Button size="sm" color="blue" onClick={() => alert('Sold / Active Lots clicked')}>Sold / Active</Button>
                <Button size="sm" color="yellow" onClick={() => alert('Reserved Lots clicked')}>Reserved</Button>
                <Button size="sm" color="gray" onClick={() => alert('Occupied Lots clicked')}>Occupied</Button>
              </div>
            </div>
            <div id="map" style={{ height: "500px", width: "100%" }}></div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default LotMapView; 