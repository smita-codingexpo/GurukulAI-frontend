import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Paper } from "@mui/material";
import { IconButton } from "@mui/material";

// Frame 1: The Top Header section
export const SidebarHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "55px",
  padding: "20px 24px",
  borderBottom: "1px solid #E8E8E8",
  boxSizing: "border-box",
});

export const MainContentWrapper = styled(Box)({
  flex: 1,
  backgroundColor: "#F9FAFB",
  padding: "24px",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const ContentHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "71px",
  padding: "0 24px",
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #E8E8E8",
  boxSizing: "border-box",
}));

export const UserProfileWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "458.94px",
  height: "48px",
  gap: "16px",
});

// The clickable profile area
export const ProfileButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  height: "35.99",
  width: "106.94px",
  borderRadius: "8px",
  textTransform: "none",
  gap: "8px",
  color: "inherit",
  "&:hover": {
    backgroundColor: "#F1F5F9",
  },
});

export const ProfileContainer = styled(Box)({
  width: "170.94px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  opacity: 1,
  transform: "rotate(0deg)",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#F1F5F9",
  },
});

export const UserTextInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

// DashboardStyles.js
export const UserName = styled(Typography)({
  width: "106.94px",
  height: "18px",
  opacity: 1,
  transform: "rotate(0deg)",

  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "20px",
  color: "#1E293B",

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
});

// DashboardStyles.js
export const UserEmail = styled(Typography)({
  width: "106.94px",
  height: "15px",
  opacity: 1,
  transform: "rotate(0deg)",
  marginTop: "4px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  color: "#64748B",

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block",
});

// The Individual School Card
export const SchoolCard = styled(Paper)({
  padding: "24px",
  borderRadius: "16px",
  border: "1px solid #F1F5F9",
  boxShadow: "none",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
  },
});

// The "Add New School" Button
export const AddSchoolButton = styled(Button)({
  backgroundColor: "#2563EB",
  color: "#FFFFFF",
  borderRadius: "8px",
  padding: "10px 20px",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#1D4ED8",
  },
});
export const DashboardContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#F9FAFB",
  overflow: "hidden",
});

export const SchoolTitle = styled(Typography)({
  width: "140px",
  height: "24px",
  opacity: 1,
  transform: "rotate(0deg)",
  fontFamily: "'Inter', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0%",
  color: "#1E293B",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

// The main container for the entire right-side profile section
export const UserActionContainer = styled(Box)({
  width: "222.94px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  gap: "16px",
  opacity: 1,
  transform: "rotate(0deg)",
});

export const NotificationWrapper = styled(IconButton)({
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  opacity: 1,
  transform: "rotate(0deg)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "#F1F5F9",
  },
});

export const SidebarContainer = styled(Box)({
  width: "296px",
  height: "996px",
  padding: "16px",
  background: "#FFFFFF",
  borderRight: "1px solid #E8E8E8",
  opacity: 1,
  transform: "rotate(0deg)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  flexShrink: 0,
});

export const SidebarFooter = styled(Box)({
  paddingTop: "16px",
  borderTop: "1px solid #F1F5F9",
});

export const NavSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const NavLabel = styled(Typography)({
  fontSize: "12px",
  fontWeight: 600,
  color: "#64748B",
  textTransform: "uppercase",
  padding: "12px 8px 8px",
  letterSpacing: "0.05em",
});

export const NavItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  justifyContent: "flex-start",
  width: "100%",
  padding: "10px 16px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: active ? 600 : 500,
  color: active ? "#FFFFFF" : "#475569",
  backgroundColor: active ? "#2563EB" : "transparent", // Primary blue for active
  "&:hover": {
    backgroundColor: active ? "#1D4ED8" : "#F1F5F9",
  },
  "& .MuiButton-startIcon": {
    color: active ? "#FFFFFF" : "#64748B",
  },
}));
