import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Sample Data (replace with actual data fetching later)
const paymentsData = [
  {
    id: 1,
    fullName: "A-03",
    section: "A",
    sector: "Alpha",
    ownerName: "Maria Santos",
    paymentMethod: "Online",
    paymentDue: "June 20, 2025",
    lastPayment: "May 20, 2025",
  },
  {
    id: 2,
    fullName: "B-07",
    section: "B",
    sector: "Beta",
    ownerName: "Jim Kupal",
    paymentMethod: "Onsite",
    paymentDue: "June 23, 2025",
    lastPayment: "May 23, 2025",
  },
];

export function PaymentMonitoring() {
  const [editingId, setEditingId] = React.useState(null);
  const [editValues, setEditValues] = React.useState({});
  const [isAdding, setIsAdding] = React.useState(false);
  const [newPayment, setNewPayment] = React.useState({ fullName: '', section: '', sector: '', ownerName: '', paymentMethod: '', paymentDue: '', lastPayment: '' });

  const handleEditClick = (payment) => {
    setEditingId(payment.id);
    setEditValues(payment);
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
    setNewPayment({ fullName: '', section: '', sector: '', ownerName: '', paymentMethod: '', paymentDue: '', lastPayment: '' });
  };
  const handleAddChange = (field, value) => {
    setNewPayment((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddSave = () => {
    // Here you would add the new payment to the data source, for now just close the form
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
              Payment Monitoring
            </Typography>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" color="red" onClick={handleAddClick}>
                <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add Payment
              </Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["ID", "Full Name", "Section", "Sector", "Owner Name", "Payment Method", "Payment Due", "Last Payment", ""].map((el) => (
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
                {paymentsData.map(
                  (
                    {
                      id,
                      fullName,
                      section,
                      sector,
                      ownerName,
                      paymentMethod,
                      paymentDue,
                      lastPayment,
                    },
                    key
                  ) => {
                    const className = `py-3 px-6 ${
                      key === paymentsData.length - 1
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
                              className="font-normal"
                            >
                              {fullName}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {section}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {sector}
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
                              {paymentMethod}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {paymentDue}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {lastPayment}
                            </Typography>
                          </td>
                          <td className={className}>
                            <div className="flex gap-2">
                              <Tooltip content="Edit Payment">
                                <IconButton variant="text" onClick={() => handleEditClick({ id, fullName, section, sector, ownerName, paymentMethod, paymentDue, lastPayment })}>
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                              <Tooltip content="Delete Payment">
                                <IconButton variant="text">
                                  <TrashIcon className="h-4 w-4" />
                                </IconButton>
                              </Tooltip>
                            </div>
                          </td>
                        </tr>
                        {editingId === id && (
                          <tr>
                            <td colSpan={9} className="bg-blue-gray-50 p-4">
                              <div className="flex flex-col gap-4">
                                <div className="flex gap-4">
                                  <Input label="Full Name" value={editValues.fullName || ''} onChange={e => handleChange('fullName', e.target.value)} className="w-48" />
                                  <Input label="Section" value={editValues.section || ''} onChange={e => handleChange('section', e.target.value)} className="w-48" />
                                  <Input label="Sector" value={editValues.sector || ''} onChange={e => handleChange('sector', e.target.value)} className="w-48" />
                                </div>
                                <div className="flex gap-4">
                                  <Input label="Owner Name" value={editValues.ownerName || ''} onChange={e => handleChange('ownerName', e.target.value)} className="w-48" />
                                  <Input label="Payment Method" value={editValues.paymentMethod || ''} onChange={e => handleChange('paymentMethod', e.target.value)} className="w-48" />
                                  <Input label="Payment Due" value={editValues.paymentDue || ''} onChange={e => handleChange('paymentDue', e.target.value)} className="w-48" />
                                </div>
                                <div className="flex gap-4">
                                  <Input label="Last Payment" value={editValues.lastPayment || ''} onChange={e => handleChange('lastPayment', e.target.value)} className="w-48" />
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
                    <td colSpan={9} className="bg-blue-gray-50 p-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                          <Input label="Full Name" value={newPayment.fullName} onChange={e => handleAddChange('fullName', e.target.value)} className="w-48" />
                          <Input label="Section" value={newPayment.section} onChange={e => handleAddChange('section', e.target.value)} className="w-48" />
                          <Input label="Sector" value={newPayment.sector} onChange={e => handleAddChange('sector', e.target.value)} className="w-48" />
                        </div>
                        <div className="flex gap-4">
                          <Input label="Owner Name" value={newPayment.ownerName} onChange={e => handleAddChange('ownerName', e.target.value)} className="w-48" />
                          <Input label="Payment Method" value={newPayment.paymentMethod} onChange={e => handleAddChange('paymentMethod', e.target.value)} className="w-48" />
                          <Input label="Payment Due" value={newPayment.paymentDue} onChange={e => handleAddChange('paymentDue', e.target.value)} className="w-48" />
                        </div>
                        <div className="flex gap-4">
                          <Input label="Last Payment" value={newPayment.lastPayment} onChange={e => handleAddChange('lastPayment', e.target.value)} className="w-48" />
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

export default PaymentMonitoring; 