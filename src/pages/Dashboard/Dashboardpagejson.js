import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";

export const NAV_ITEMS = [
  {
    id: "school-mgmt",
    name: "School Management",
    icon: <SchoolIcon />,
    children: [
      { id: "sm-dashboard", name: "Dashboard" },
      { id: "sm-school", name: "School" },
      { id: "sm-class", name: "Class" },
      { id: "sm-session", name: "Session" },
      { id: "sm-settings", name: "Settings" },
    ],
  },
  {
    id: "school-acad",
    name: "School Academic",
    icon: <MenuBookIcon />,
    children: [
      { id: "sa-dashboard", name: "Dashboard" },
      { id: "sa-manage-classes", name: "Manage Classes" },
      { id: "sa-manage-section", name: "Manage Section" },
      { id: "sa-subjects", name: "Subjects" },
    ],
  },
  {
    id: "student",
    name: "Student",
    icon: <PersonIcon />,
    children: [
      { id: "st-dashboard", name: "Dashboard" },
      { id: "st-admission", name: "Admission" },
      { id: "st-students", name: "Students" },
      { id: "st-Studentattande", name: "Student Attendance" },
      { id: "st-printidcard", name: "Print ID Card" },
      { id: "st-promote", name: "Promote" },
    ],
  },
  {
    id: "roles",
    name: "Roles",
    icon: <GroupIcon />,
    children: [
      { id: "ro-dashboard", name: "Dashboard" },
      { id: "ro-admin", name: "Admin" },
      { id: "ro-stafflist", name: "Staff List" },
      { id: "ro-staffattendance", name: "Staff Attendance" },
      { id: "ro-staffleaves", name: "Staff Leaves" },
      { id: "ro-Staffidcards", name: "Staff ID Cards" },
      { id: "ro-department", name: "Department" },
    ],
  },
  {
    id: "accounting",
    name: "Accounting",
    icon: <BarChartIcon />,
    children: [
      { id: "ac-dashboard", name: "Dashboard" },
      { id: "ac-feetypes", name: "Fee Types" },
      { id: "ac-feeinvoices", name: "Fee Invoices" },
      { id: "ac-collectpayment", name: "Collect Payment" },
      { id: "ac-invoicesreport", name: "Invoices Report" },
      { id: "ac-expenses", name: "Expenses" },
    ],
  },
];

export const schoolData = [
  { id: "SCH-001", name: "Gurukul Global", location: "Pune, MH" },
  { id: "SCH-002", name: "Orchid Heights", location: "Mumbai, MH" },
  { id: "SCH-003", name: "Heritage Academy", location: "Nashik, MH" },
  { id: "SCH-004", name: "Sunrise Public", location: "Nagpur, MH" },
];
