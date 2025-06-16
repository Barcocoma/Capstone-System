import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Chip,
} from "@material-tailwind/react";
import {
  ClockIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Dummy data for Activity Log
const activityLogData = [
  {
    id: 1,
    timestamp: "2024-03-11 10:30 AM",
    action: "Created",
    type: "User",
    details: "New user 'john_doe' added",
    performedBy: "Admin",
  },
  {
    id: 2,
    timestamp: "2024-03-11 11:15 AM",
    action: "Updated",
    type: "Staff",
    details: "Updated position for 'Alice Wonderland' to Manager",
    performedBy: "Admin",
  },
  {
    id: 3,
    timestamp: "2024-03-11 02:45 PM",
    action: "Deleted",
    type: "User",
    details: "Removed user 'jane_smith'",
    performedBy: "Admin",
  },
  {
    id: 4,
    timestamp: "2024-03-11 03:20 PM",
    action: "Created",
    type: "Staff",
    details: "New staff member 'Bob Thebuilder' added",
    performedBy: "Admin",
  },
  {
    id: 5,
    timestamp: "2024-03-11 04:00 PM",
    action: "Updated",
    type: "User",
    details: "Changed role of 'mike_williams' to User",
    performedBy: "Admin",
  },
];

export function ActivityLog() {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Activity Log
          </Typography>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search Activities"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Timestamp", "Action", "Type", "Details", "Performed By"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-medium uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activityLogData.map(({ id, timestamp, action, type, details, performedBy }, key) => {
                const className = `py-3 px-6 ${
                  key === activityLogData.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <tr key={id}>
                    <td className={className}>
                      <div className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4 text-blue-gray-400" />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {timestamp}
                        </Typography>
                      </div>
                    </td>
                    <td className={className}>
                      <Chip
                        variant="gradient"
                        color={
                          action === "Created" ? "green" :
                          action === "Updated" ? "blue" :
                          "red"
                        }
                        value={action}
                        className="py-0.5 px-2 text-[11px] font-medium w-fit"
                      />
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {type}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {details}
                      </Typography>
                    </td>
                    <td className={className}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {performedBy}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default ActivityLog; 