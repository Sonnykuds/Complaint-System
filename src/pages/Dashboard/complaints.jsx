import { Button, Card, Select, theme } from "antd";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import AddComplaintsForm from "../../Components/AddComplaintForm";
import ComplaintsTable from "../../Components/ComplaintsTable";
import { MyContext } from "../../context/context";

const Complaints = () => {
  const { setIsModalOpen, department } = useContext(MyContext);
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [filter, setFilter] = useState(null);
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
  const handleOnSelect = (value) => {
    setFilter(value);
  };
  return (
    <>
      <>
        <Card className=" m-5">
          <div className="block lg:flex w-full justify-between">
            <p className=" text-2xl font-semibold justify-start italic">
              Complaints Record
            </p>
            <div className="block lg:flex items-center gap-5">
              <Select
                placeholder="Select Department"
                options={[{ label: "All", value: null }, ...department]}
                showSearch
                onChange={handleOnChange}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                optionFilterProp="children"
                className="flex w-52"
              />
              <Button
                style={{ backgroundColor: colorPrimary }}
                type="primary"
                onClick={handleOpenModal}
              >
                Add Complaint
              </Button>
              <AddComplaintsForm handleCancel={handleCancel} />
            </div>
          </div>
        </Card>
        <ComplaintsTable filter={filter} />
      </>
    </>
  );
};

export default observer(Complaints);
