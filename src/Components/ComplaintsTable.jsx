import { Button, Modal, Form, Table, Tooltip, Select } from "antd";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { MyContext } from "../context/context";
const ComplaintsTable = ({ filter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [selectedID, setSelectedID] = useState(null);
  const { complaint, setSelectedRows, selectedRows, status, editStatus } =
    useContext(MyContext);
  let filteredComplaint = complaint.filter((comp) => {
    return comp.department === filter;
  });
  if (filter === null) {
    filteredComplaint = complaint;
  }
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
      render: (status, all) => {
        return (
          <div className=" flex gap-8">
            <Tooltip title={() => <div>Edit Status</div>}>
              {status === "Ongoing" && (
                <Button
                  type="primary"
                  className=" flex items-center rounded-full bg-blue-500"
                  onClick={() => handleOpenModal(all)}
                >
                  {status}
                </Button>
              )}
              {status === "Pending" && (
                <Button
                  type="primary"
                  className=" flex items-center rounded-full bg-red-500"
                  onClick={() => handleOpenModal(all)}
                >
                  {status}
                </Button>
              )}

              {status === "Solved" && (
                <Button
                  type="primary"
                  className=" flex items-center rounded-full bg-green-600"
                  onClick={() => handleOpenModal(all)}
                >
                  {status}
                </Button>
              )}
              {status === "Abusive" && (
                <Button
                  type="primary"
                  className=" flex items-center rounded-full bg-slate-400"
                  onClick={() => handleOpenModal(all)}
                >
                  {status}
                </Button>
              )}
              {status === "Not Applicable" && (
                <Button
                  type="primary"
                  className=" flex items-center rounded-full bg-gray-700"
                  onClick={() => handleOpenModal(all)}
                >
                  {status}
                </Button>
              )}
            </Tooltip>
          </div>
        );
      },
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
  const handleOpenModal = (all) => {
    setIsModalOpen(true);
    setSelectedID(all.key);
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
    editStatus(selectedID, edit.status);
    setIsModalOpen(!isModalOpen);
    form.resetFields();
  };
  return (
    <div className=" gap-3 flex items-center justify-center ">
      <Table
        className="lg:block m-5 mt-0 w-full "
        dataSource={[...filteredComplaint]}
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
