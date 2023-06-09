import { Button, Select, Form, Input, Modal, DatePicker, theme } from "antd";
import { observer } from "mobx-react";
import { useContext } from "react";
import { MyContext } from "../context/context";
const AddComplaintsForm = ({ handleCancel }) => {
  const { submitComplaint, department, status, isModalOpen, setIsModalOpen } =
    useContext(MyContext);
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [form] = Form.useForm();
  const rules = {
    department: [{ required: true }],
    status: [{ required: true }],
    message: [{ required: true }],
    date: [{ required: true }],
  };

  const handleOnChange = (value) => {
    return value;
  };
  const handleOnSearch = (value) => {
    return value;
  };
  const handleAddComplaint = (values) => {
    submitComplaint({
      message: values.message,
      department: values.department,
      date: values.date.format("MMMM DD YYYY"),
    });
    setIsModalOpen(isModalOpen);
    form.resetFields();
  };

  return (
    <>
      <Modal
        title="Add Complaint"
        footer={[]}
        open={isModalOpen ? true : false}
        onCancel={handleCancel}
      >
        <Form onFinish={handleAddComplaint} form={form}>
          <Form.Item name="department" rules={rules.department}>
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
            />
          </Form.Item>
          <Form.Item name="message" rules={rules.message}>
            <Input />
          </Form.Item>
          <Form.Item name="date" rules={rules.date}>
            <DatePicker />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: colorPrimary }}
          >
            Save
          </Button>
          <Button onClick={handleCancel} className=" bg-gray-400">
            Cancel
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default observer(AddComplaintsForm);
