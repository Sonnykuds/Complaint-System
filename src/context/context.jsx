import { action, makeAutoObservable } from "mobx";
import { createContext } from "react";

export const MyContext = createContext(0);

export class complaints {
  department = [
    {
      label: "Department of Public Works and Highways",
      value: "Department of Public Works and Highways",
    },
    {
      label: "Philippine National Police",
      value: "Philippine National Police",
    },
    { label: "Department of Education", value: "Department of Education" },
    { label: "Caposo", value: "Caposo" },
    { label: "Calbayog Water", value: "Calbayog Water" },
  ];
  status = [
    { label: "Pending", value: "Pending" },
    { label: "Ongoing", value: "Ongoing" },
    { label: "Solved", value: "Solved" },
    { label: "Abusive", value: "Abusive" },
    { label: "Not applicable", value: "Not Applicable" },
  ];
  complaint = [];
  selectedRows = [];
  isModalOpen = false;
  constructor() {
    makeAutoObservable(this, {
      submitComplaint: action.bound,
      setIsModalOpen: action.bound,
      setSelectedRows: action.bound,
      editStatus: action.bound,
    });
  }
  submitComplaint = (complaint) => {
    this.complaint.push({ ...complaint, key: this.complaint.length });
  };
  setIsModalOpen = () => {
    this.isModalOpen = !this.isModalOpen;
  };
  setSelectedRows = (rows) => {
    this.selectedRows = rows;
  };
  // editStatus = (edit) => {

  // }
}
