import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { StatisticsCard } from "@/widgets/cards";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";

export function Home() {
  const newStatisticsCardsData = [
    {
      icon: <Squares2X2Icon className="w-6 h-6 text-white" />,
      title: "Total Lots",
      value: "23,000",
      color: "blue-gray",
    },
    {
      icon: <BanknotesIcon className="w-6 h-6 text-white" />,
      title: "Available Lots",
      value: "11,964",
      color: "purple",
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-white" />,
      title: "Sold Lots",
      value: "5,325",
      color: "green",
    },
    {
      icon: <ChartBarIcon className="w-6 h-6 text-white" />,
      title: "Missed Payment",
      value: "3",
      color: "red",
    },
  ];

  const recentActivityLogs = [
    "Payment updated for Lot #B-21",
    "Ownership record updated for Lot #D-14",
    "New customer registered by staff",
  ];

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY_HERE&callback=initHomeMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    window.initHomeMap = () => {
      const map = new window.google.maps.Map(document.getElementById("home-map"), {
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
      delete window.initHomeMap;
    };
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {newStatisticsCardsData.map(({ icon, title, value, color }) => (
          <StatisticsCard
            key={title}
            title={title}
            value={value}
            icon={icon}
            color={color}
          />
        ))}
      </div>

      <div className="mb-6 flex flex-col items-center">
        <Card className="overflow-hidden w-full">
          <CardBody className="p-0 relative">
            <div id="home-map" style={{ height: "500px", width: "100%" }}></div>
            <div className="absolute bottom-4 right-4 z-10">
              <Link to="/dashboard/lot-map">
                <Button color="brown">OPEN FULL MAP VIEW</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
