import { styled } from "@mui/material/styles";
import { Box, Typography, Button, Paper, IconButton } from "@mui/material";

export const DashboardContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw",
  backgroundColor: "#F9FAFB",
  overflow: "hidden",
});

// --- SIDEBAR STYLES ---
export const SidebarContainer = styled(Box)({
  width: "296px",
  height: "100%",
  background: "#FFFFFF",
  borderRight: "1px solid #E8E8E8",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  flexShrink: 0,
});

export const SidebarHeader = styled(Box)({
  width: "100%",
  height: "71px",
  display: "flex",
  alignItems: "center",
  padding: "0 24px",
  borderBottom: "1px solid #E8E8E8",
  boxSizing: "border-box",
});

export const NavSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "16px",
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
  backgroundColor: active ? "#2563EB" : "transparent",
  "&:hover": { backgroundColor: active ? "#1D4ED8" : "#F1F5F9" },
  "& .MuiButton-startIcon": { color: active ? "#FFFFFF" : "#64748B" },
}));

export const SidebarFooter = styled(Box)({
  padding: "16px",
  borderTop: "1px solid #F1F5F9",
});

// --- MAIN CONTENT & HEADER STYLES ---
export const MainContentWrapper = styled(Box)({
  flex: 1,
  backgroundColor: "#F8FAFC",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const ContentHeader = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "71px",
  padding: "0 24px",
  backgroundColor: "#FFFFFF",
  borderBottom: "1px solid #E8E8E8",
  boxSizing: "border-box",
});

export const UserProfileWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const SchoolSelector = styled(Box)({
  width: "224px",
  height: "48px",
  border: "1px solid #E2E8F0",
  borderRadius: "8px",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});

export const SchoolTitle = styled(Typography)({
  width: "140px",
  fontSize: "16px",
  color: "#1E293B",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const UserActionContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const ProfileContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "4px 8px",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#F1F5F9" },
});

export const UserTextInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const UserName = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  color: "#1E293B",
  lineHeight: "20px",
});

export const UserEmail = styled(Typography)({
  fontSize: "12px",
  color: "#64748B",
  lineHeight: "16px",
});

export const AddSchoolButton = styled(Button)({
  width: "164px",
  height: "36px",
  backgroundColor: "#2563EB",
  color: "#FFFFFF",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": { backgroundColor: "#1D4ED8" },
});
