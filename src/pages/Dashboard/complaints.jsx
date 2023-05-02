import { Button, Card, Select } from "antd";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import AddComplaintsForm from "../../Components/AddComplaintForm";
import ComplaintsTable from "../../Components/ComplaintsTable";
import { MyContext } from "../../context/context";

const Complaints = () => {
  const { setIsModalOpen, department } = useContext(MyContext);
  const handleOpenModal = () => {
    return setIsModalOpen(true);
  };
  const handleCancel = () => {
    return setIsModalOpen(false);
  };
  const handleOnChange = (value) => {
    return value;
  };
  const handleOnSearch = (value) => {
    return value;
  };
  return (
    <>
      <Card className=" m-5">
        <div className="block lg:flex w-full justify-between">
          <p className=" text-2xl font-semibold justify-start italic">
            Complaints Record
          </p>
          <div className="block lg:flex items-center gap-5">
            <Select
              placeholder="Select Department"
              options={department}
              showSearch
              onChange={handleOnChange}
              onSearch={handleOnSearch}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              className="flex w-52"
            />
            <Button
              className=" bg-blue-500"
              type="primary"
              onClick={handleOpenModal}
            >
              Add Complaint
            </Button>
            <AddComplaintsForm handleCancel={handleCancel} />
          </div>
        </div>
      </Card>
      <ComplaintsTable />
    </>
  );
};

export default observer(Complaints);
