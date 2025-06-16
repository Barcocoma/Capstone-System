import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Chip,
  Tooltip,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

// Dummy data for Users Table
const usersData = [
  {
    id: 1,
    username: "john_doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    username: "jane_smith",
    email: "jane.smith@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    username: "mike_williams",
    email: "mike.w@example.com",
    role: "User",
    status: "Active",
  },
];

// Dummy data for Staff Table
const staffData = [
  {
    id: 1,
    name: "Alice Wonderland",
    position: "Manager",
    email: "alice.w@example.com",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Thebuilder",
    position: "Sales",
    email: "bob.b@example.com",
    status: "Active",
  },
  {
    id: 3,
    name: "Charlie Chaplin",
    position: "Support",
    email: "charlie.c@example.com",
    status: "Inactive",
  },
];

export function AccountManagement() {
  const [editingId, setEditingId] = React.useState(null);
  const [editValues, setEditValues] = React.useState({});
  const [isAddingUser, setIsAddingUser] = React.useState(false);
  const [isAddingStaff, setIsAddingStaff] = React.useState(false);
  const [newUser, setNewUser] = React.useState({ firstName: '', lastName: '', email: '', password: '', role: '', status: '' });
  const [newStaff, setNewStaff] = React.useState({ firstName: '', lastName: '', email: '', password: '', role: '', status: '' });

  const handleEditClick = (user) => {
    setEditingId(user.id);
    setEditValues(user);
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
  const handleAddUserClick = () => {
    setIsAddingUser(true);
  };
  const handleAddUserCancel = () => {
    setIsAddingUser(false);
    setNewUser({ firstName: '', lastName: '', email: '', password: '', role: '', status: '' });
  };
  const handleAddUserChange = (field, value) => {
    setNewUser((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddUserSave = () => {
    if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password) {
      alert("First Name, Last Name, Email, and Password are required for new users.");
      return;
    }
    if (newUser.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // Here you would add the new user to the data source, for now just close the form
    setIsAddingUser(false);
  };
  const handleAddStaffClick = () => {
    setIsAddingStaff(true);
  };
  const handleAddStaffCancel = () => {
    setIsAddingStaff(false);
    setNewStaff({ firstName: '', lastName: '', email: '', password: '', role: '', status: '' });
  };
  const handleAddStaffChange = (field, value) => {
    setNewStaff((prev) => ({ ...prev, [field]: value }));
  };
  const handleAddStaffSave = () => {
    if (!newStaff.firstName || !newStaff.lastName || !newStaff.email || !newStaff.password) {
      alert("First Name, Last Name, Email, and Password are required for new staff.");
      return;
    }
    if (newStaff.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    // Here you would add the new staff to the data source, for now just close the form
    setIsAddingStaff(false);
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      {/* Users Table */}
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Users Management
          </Typography>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search Users"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" color="red" onClick={handleAddUserClick}>
              <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add User
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["ID", "Username", "Email", "Role", "Status", ""].map((el) => (
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
              {usersData.map(
                ({ id, username, email, role, status }, key) => {
                  const className = `py-3 px-6 ${
                    key === usersData.length - 1
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
                            {username}
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {role}
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
                            <Tooltip content="Edit User">
                              <IconButton variant="text" onClick={() => handleEditClick({ id, username, email, role, status })}>
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete User">
                              <IconButton variant="text">
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                      {editingId === id && (
                        <tr>
                          <td colSpan={6} className="bg-blue-gray-50 p-4">
                            <div className="flex flex-col gap-4">
                              <div className="flex gap-4">
                                <Input label="Username" value={editValues.username || ''} onChange={e => handleChange('username', e.target.value)} className="w-48" />
                                <Input label="Email" value={editValues.email || ''} onChange={e => handleChange('email', e.target.value)} className="w-48" />
                                <Select label="Role" value={editValues.role || ''} onChange={value => handleChange('role', value)}>
                                  <Option value="User">User</Option>
                                  <Option value="Staff">Staff</Option>
                                  <Option value="Admin">Admin</Option>
                                </Select>
                                <Input label="Status" value={editValues.status || ''} onChange={e => handleChange('status', e.target.value)} className="w-48" />
                              </div>
                              <div className="flex gap-4">
                                <Input label="Password" type="password" value={editValues.password || ''} onChange={e => handleChange('password', e.target.value)} className="w-48" />
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
              {isAddingUser && (
                <tr>
                  <td colSpan={6} className="bg-blue-gray-50 p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <Input label="First Name" value={newUser.firstName} onChange={e => handleAddUserChange('firstName', e.target.value)} className="w-48" required />
                        <Input label="Last Name" value={newUser.lastName} onChange={e => handleAddUserChange('lastName', e.target.value)} className="w-48" required />
                        <Input label="Email" value={newUser.email} onChange={e => handleAddUserChange('email', e.target.value)} className="w-48" required />
                      </div>
                      <div className="flex gap-4">
                        <Input label="Password" type="password" value={newUser.password} onChange={e => handleAddUserChange('password', e.target.value)} className="w-48" required />
                      </div>
                      <div className="flex gap-4">
                        <Select label="Role" value={newUser.role} onChange={value => handleAddUserChange('role', value)}>
                          <Option value="User">User</Option>
                          <Option value="Staff">Staff</Option>
                          <Option value="Admin">Admin</Option>
                        </Select>
                        <Input label="Status" value={newUser.status} onChange={e => handleAddUserChange('status', e.target.value)} className="w-48" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outlined" color="blue-gray" onClick={handleAddUserCancel}>Cancel</Button>
                        <Button variant="filled" color="red" onClick={handleAddUserSave}>Save</Button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Staff Table */}
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <Typography variant="h5" color="blue-gray" className="mb-1">
            Staff Management
          </Typography>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search Staff"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" color="red" onClick={handleAddStaffClick}>
              <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Add Staff
            </Button>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["ID", "Name", "Position", "Email", "Status", ""].map((el) => (
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
              {staffData.map(
                ({ id, name, position, email, status }, key) => {
                  const className = `py-3 px-6 ${
                    key === staffData.length - 1
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
                            {name}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {position}
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
                            <Tooltip content="Edit Staff">
                              <IconButton variant="text" onClick={() => handleEditClick({ id, name, position, email, status })}>
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Delete Staff">
                              <IconButton variant="text">
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                      {editingId === id && (
                        <tr>
                          <td colSpan={6} className="bg-blue-gray-50 p-4">
                            <div className="flex flex-col gap-4">
                              <div className="flex gap-4">
                                <Input label="Name" value={editValues.name || ''} onChange={e => handleChange('name', e.target.value)} className="w-48" />
                                <Input label="Position" value={editValues.position || ''} onChange={e => handleChange('position', e.target.value)} className="w-48" />
                                <Input label="Email" value={editValues.email || ''} onChange={e => handleChange('email', e.target.value)} className="w-48" />
                                <Select label="Role" value={editValues.role || ''} onChange={value => handleChange('role', value)}>
                                  <Option value="User">User</Option>
                                  <Option value="Staff">Staff</Option>
                                  <Option value="Admin">Admin</Option>
                                </Select>
                                <Input label="Status" value={editValues.status || ''} onChange={e => handleChange('status', e.target.value)} className="w-48" />
                              </div>
                              <div className="flex gap-4">
                                <Input label="Password" type="password" value={editValues.password || ''} onChange={e => handleChange('password', e.target.value)} className="w-48" />
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
              {isAddingStaff && (
                <tr>
                  <td colSpan={6} className="bg-blue-gray-50 p-4">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4">
                        <Input label="First Name" value={newStaff.firstName} onChange={e => handleAddStaffChange('firstName', e.target.value)} className="w-48" required />
                        <Input label="Last Name" value={newStaff.lastName} onChange={e => handleAddStaffChange('lastName', e.target.value)} className="w-48" required />
                        <Input label="Email" value={newStaff.email} onChange={e => handleAddStaffChange('email', e.target.value)} className="w-48" required />
                      </div>
                      <div className="flex gap-4">
                        <Input label="Password" type="password" value={newStaff.password} onChange={e => handleAddStaffChange('password', e.target.value)} className="w-48" required />
                      </div>
                      <div className="flex gap-4">
                        <Select label="Role" value={newStaff.role} onChange={value => handleAddStaffChange('role', value)}>
                          <Option value="User">User</Option>
                          <Option value="Staff">Staff</Option>
                          <Option value="Admin">Admin</Option>
                        </Select>
                        <Input label="Status" value={newStaff.status} onChange={e => handleAddStaffChange('status', e.target.value)} className="w-48" />
                      </div>
                      <div className="flex gap-2 justify-end">
                        <Button variant="outlined" color="blue-gray" onClick={handleAddStaffCancel}>Cancel</Button>
                        <Button variant="filled" color="red" onClick={handleAddStaffSave}>Save</Button>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default AccountManagement; 