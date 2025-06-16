import {
  HomeIcon,
  MapIcon,
  UsersIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ChartBarIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Home, CustomerRecords, PaymentMonitoring, LotMapView, AccountManagement, OwnershipManagement, ActivityLog } from "@/pages/admin-dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Placeholder from "./pages/Placeholder";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <MapIcon {...icon} />,
        name: "lot map view",
        path: "/lot-map",
        element: <LotMapView />,
      },
      {
        icon: <UsersIcon {...icon} />,
        name: "ownership management",
        path: "/ownership",
        element: <OwnershipManagement />,
      },
      {
        icon: <DocumentTextIcon {...icon} />,
        name: "customer records",
        path: "/customers",
        element: <CustomerRecords />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "payment monitoring",
        path: "/payments",
        element: <PaymentMonitoring />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "activity log",
        path: "/activity-log",
        element: <ActivityLog />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "account management",
        path: "/accounts",
        element: <AccountManagement />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "logout",
        path: "/logout",
        element: <Placeholder title="Logout" />,
      },
    ],
  },
];

export default routes;