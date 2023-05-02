import { Button, Modal, Form, Table, Tooltip, Select } from "antd";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { MyContext } from "../context/context";
const ComplaintsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const { complaint, setSelectedRows, selectedRows, status } =
    useContext(MyContext);
  const columns = [
    {
      title: "Department",
      dataIndex: "department",
    },
    {
      title: "Complaint",
      dataIndex: "message",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <div className=" flex gap-8">
          <Tooltip title={() => <div>Edit Status</div>}>
            {status === "Ongoing" && (
              <Button
                type="primary"
                className=" flex items-center rounded-full bg-blue-500"
                onClick={handleOpenModal}
              >
                {status}
              </Button>
            )}
            {status === "Pending" && (
              <Button
                type="primary"
                className=" flex items-center rounded-full bg-red-500"
                onClick={handleOpenModal}
              >
                {status}
              </Button>
            )}

            {status === "Solved" && (
              <Button
                type="primary"
                className=" flex items-center rounded-full bg-green-600"
                onClick={handleOpenModal}
              >
                {status}
              </Button>
            )}
            {status === "Abusive" && (
              <Button
                type="primary"
                className=" flex items-center rounded-full bg-red-400"
                onClick={handleOpenModal}
              >
                {status}
              </Button>
            )}
            {status === "Not Applicable" && (
              <Button
                type="primary"
                className=" flex items-center rounded-full bg-gray-600"
                onClick={handleOpenModal}
              >
                {status}
              </Button>
            )}
          </Tooltip>
        </div>
      ),
    },
    {
      title: "Date",
      dataIndex: "date",
    },
  ];
  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys) => {
      setSelectedRows(selectedRowKeys);
    },
  };
  const rules = {
    status: [{ required: true }],
  };
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
  const handleEditStatus = (edit) => {
    setIsModalOpen(isModalOpen);
    form.resetFields();
    console.log(edit);
  };
  return (
    <div className=" gap-3 flex items-center justify-center ">
      <Table
        className="lg:block m-5 mt-0 w-full "
        dataSource={[...complaint]}
        columns={columns}
        rowSelection={rowSelection}
      />
      <Modal open={isModalOpen} footer={[]}>
        <Form form={form} onFinish={handleEditStatus}>
          <Form.Item name="status" rules={rules.status}>
            <Select
              placeholder="Select Status"
              options={status}
              showSearch
              onChange={handleOnChange}
              onSearch={handleOnSearch}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
            />
          </Form.Item>
          <Button type="primary" htmlType="submit" className=" bg-blue-500">
            Save
          </Button>
          <Button onClick={handleCancel} className=" bg-gray-400">
            Cancel
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default observer(ComplaintsTable);
