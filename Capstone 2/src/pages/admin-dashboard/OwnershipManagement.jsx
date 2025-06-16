import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Tooltip,
  Button,
  Input,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Dummy data for Ownership Management Table
const ownershipTableData = [
  {
    id: 1,
    lotNumber: "A-03",
    ownerName: "Maria Santos",
    contact: "555-1234",
    email: "maria.santos@example.com",
    status: "Active",
  },
  {
    id: 2,
    lotNumber: "B-07",
    ownerName: "Jim Kupal",
    contact: "555-5678",
    email: "jim.k@example.com",
    status: "Transferred",
  },
  {
    id: 3,
    lotNumber: "C-12",
    ownerName: "Sarah Johnson",
    contact: "555-9876",
    email: "sarah.j@example.com",
    status: "Active",
  },
];

export function OwnershipManagement() {
  const [editingId, setEditingId] = React.useState(null);
  const [editValues, setEditValues] = React.useState({});
  const [isAdding, setIsAdding] = React.useState(false);
  const [newOwner, setNewOwner] = React.useState({ lotNumber: '', ownerName: '', contact: '', email: '', status: '' });

  const handleEditClick = (ownership) => {
    setEditingId(ownership.id);
    setEditValues(ownership);
  };
  const handleCancel = () => {
    setEditingId(null);
    setEditValues({});
  };
  const handleChange = (field, value) => {
    setEditValues((prev) => ({ ...prev, [field]: value }));
  };
  const handleSave = () => {
    // Here you would update the data source, for now just close the form
    setEditingId(null);
  };
  const handleAddClick = () => {
    setIsAdding(true);
  };
  const handleAddCancel = () => {
    setIsAdding(false);
    setNewOwner({ lotNumber: '', ownerName: '', contact: '', email: '', status: '' });
  };
  const handleAddChange = (field, value) => {
    setNewOwner((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddSave = () => {
    // Here you would add the new owner to the data source, for now just close the form
    setIsAdding(false);
  };

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
        <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <Typography variant="h5" color="blue-gray" className="mb-1">
              Ownership Management
            </Typography>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" color="red" onClick={handleAddClick}>
                <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add Owner
              </Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["ID", "Lot Number", "Owner Name", "Contact", "Email", "Status", ""].map((el) => (
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
                {ownershipTableData.map(
                  ({ id, lotNumber, ownerName, contact, email, status }, key) => {
                    const className = `py-3 px-6 ${
                      key === ownershipTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;
                    return (
                      <React.Fragment key={id}>
                        <tr>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {id}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {lotNumber}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {ownerName}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {contact}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {email}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Chip
                              variant="gradient"
                              color={status === "Active" ? "green" : "blue-gray"}
                              value={status}
                              className="py-0.5 px-2 text-[11px] font-medium w-fit"
                            />
                          </td>
                          <td className={className}>
                            <div className="flex gap-2">
                              <Tooltip content="Edit Owner">
                                <IconButton variant="text" onClick={() => handleEditClick({ id, lotNumber, ownerName, contact, email, status })}>
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip content="Delete Owner">
                                <IconButton variant="text">
                                  <TrashIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                        {editingId === id && (
                          <tr>
                            <td colSpan={7} className="bg-blue-gray-50 p-4">
                              <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                  <Input label="Lot Number" value={editValues.lotNumber || ''} onChange={e => handleChange('lotNumber', e.target.value)} className="w-48" readOnly />
                                  <Input label="Owner Name" value={editValues.ownerName || ''} onChange={e => handleChange('ownerName', e.target.value)} className="w-48" />
                                  <Input label="Contact" value={editValues.contact || ''} onChange={e => handleChange('contact', e.target.value)} className="w-48" />
                                </div>
                                <div className="flex gap-4">
                                  <Input label="Email" value={editValues.email || ''} onChange={e => handleChange('email', e.target.value)} className="w-48" />
                                  <Input label="Status" value={editValues.status || ''} onChange={e => handleChange('status', e.target.value)} className="w-48" />
                                </div>
                                <div className="flex gap-2 justify-end">
                                  <Button variant="outlined" color="blue-gray" onClick={handleCancel}>Cancel</Button>
                                  <Button variant="filled" color="red" onClick={handleSave}>Save Changes</Button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  }
                )}
                {isAdding && (
                  <tr>
                    <td colSpan={7} className="bg-blue-gray-50 p-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <Input label="Lot Number" value={newOwner.lotNumber} onChange={e => handleAddChange('lotNumber', e.target.value)} className="w-48" />
                          <Input label="Owner Name" value={newOwner.ownerName} onChange={e => handleAddChange('ownerName', e.target.value)} className="w-48" />
                          <Input label="Contact" value={newOwner.contact} onChange={e => handleAddChange('contact', e.target.value)} className="w-48" />
                        </div>
                        <div className="flex gap-4">
                          <Input label="Email" value={newOwner.email} onChange={e => handleAddChange('email', e.target.value)} className="w-48" />
                          <Input label="Status" value={newOwner.status} onChange={e => handleAddChange('status', e.target.value)} className="w-48" />
                        </div>
                        <div className="flex gap-2 justify-end">
                          <Button variant="outlined" color="blue-gray" onClick={handleAddCancel}>Cancel</Button>
                          <Button variant="filled" color="red" onClick={handleAddSave}>Save</Button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>

        {/* Pagination and Rows per page */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              className="flex items-center justify-center"
            >
              &lt;
            </Button>
            <Button
              variant="filled"
              color="blue"
              size="sm"
              className="flex items-center justify-center"
            >
              1
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              className="flex items-center justify-center"
            >
              2
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              className="flex items-center justify-center"
            >
              3
            </Button>
            <Button
              variant="outlined"
              color="blue-gray"
              size="sm"
              className="flex items-center justify-center"
            >
              &gt;
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Typography variant="small" color="blue-gray" className="font-normal">
              Page 1 of 10
            </Typography>
            <Typography variant="small" color="blue-gray" className="font-normal">
              Rows per page:
            </Typography>
            <Input
              type="number"
              value={10}
              className="w-16"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnershipManagement; 