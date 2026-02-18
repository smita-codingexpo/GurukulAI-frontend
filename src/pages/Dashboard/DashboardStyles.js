import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  Paper,
  InputBase,
  IconButton,
} from "@mui/material";

const FlexBox = styled(Box)({
  display: "flex",
  boxSizing: "border-box",
});

export const DashboardContainer = styled(FlexBox)({
  width: "1440px",
  height: "996px",
  backgroundColor: "#F9FAFB",
  margin: "0 auto",
  overflow: "hidden",
});

export const SidebarContainer = styled(FlexBox)({
  flexDirection: "column",
  justifyContent: "space-between",
  width: "296px",
  height: "100%",
  background: "#FFFFFF",
  borderRight: "1px solid #E8E8E8",
  flexShrink: 0,
});

export const SidebarHeader = styled(FlexBox)({
  alignItems: "center",
  height: "71px",
  padding: "20px 24px",
  borderBottom: "1px solid #E8E8E8",
});

export const NavSection = styled(FlexBox)({
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
  shouldForwardProp: (p) => p !== "active",
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

export const MainContentWrapper = styled(FlexBox)({
  flex: 1,
  flexDirection: "column",
  backgroundColor: "#F8FAFC",
  overflow: "hidden",
});

export const ContentHeader = styled(FlexBox)({
  justifyContent: "flex-end",
  alignItems: "center",
  height: "71px",
  padding: "0 24px",
  background: "#FFFFFF",
  borderBottom: "1px solid #E8E8E8",
});

export const UserProfileWrapper = styled(FlexBox)({
  alignItems: "center",
  gap: "16px",
});

export const SchoolSelector = styled(FlexBox)({
  width: "224px",
  height: "48px",
  border: "1px solid #E2E8F0",
  borderRadius: "8px",
  padding: "8px 16px",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});

export const SchoolTitle = styled(Typography)({
  flex: 1,
  fontSize: "14px",
  color: "#1E293B",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const UserActionContainer = styled(FlexBox)({
  alignItems: "center",
  gap: "16px",
});

export const ProfileContainer = styled(FlexBox)({
  alignItems: "center",
  gap: "8px",
  padding: "4px 8px",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#F1F5F9" },
});

export const UserTextInfo = styled(FlexBox)({
  flexDirection: "column",
});

export const UserName = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  color: "#1E293B",
  lineHeight: 1.4,
});

export const UserEmail = styled(Typography)({
  fontSize: "12px",
  color: "#64748B",
});

export const AddSchoolButton = styled(Button)({
  padding: "8px 16px",
  backgroundColor: "#2563EB",
  color: "#FFFFFF",
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 600,
  "&:hover": { backgroundColor: "#1D4ED8" },
});

export const MainBodyContainer = styled(Box)({
  flex: 1,
  padding: "24px",
  overflowY: "auto",
});

export const DashboardHeaderBar = styled(FlexBox)({
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "32px",
});

export const CardRowWrapper = styled(FlexBox)({
  flexWrap: "wrap",
  gap: "24px",
  width: "100%",
});

export const SchoolCard = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: "calc(33.333% - 16px)",
  minWidth: "320px",
  minHeight: "264px",
  borderRadius: "14px",
  border: "1px solid rgba(0,0,0,0.05)",
  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
  padding: "24px",
  boxShadow: "none",
});

export const CardContent = styled(FlexBox)({
  flexDirection: "column",
  gap: "16px",
  height: "100%",
});

export const SearchSectionContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "264px",
  height: "49px",
  padding: "8px",
  gap: "8px",
  boxSizing: "border-box",
});

export const SearchWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "204px",
  height: "36px",
  padding: "8px 16px",
  borderRadius: "24px",
  background: "rgba(245, 246, 250, 1)",
  boxSizing: "border-box",
  cursor: "text",
});

export const SearchInput = styled(InputBase)({
  fontSize: "14px",
  flex: 1,
  marginLeft: "8px",
  "& .MuiInputBase-input": {
    padding: 0,
    color: "#64748B",
    "&::placeholder": {
      opacity: 1,
      color: "#94A3B8",
    },
  },
});

export const SearchInputGroup = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "63.01px",
  height: "15.01px",
  gap: "8px",
  boxSizing: "border-box",
  flex: 1,
});

export const ShortcutBadge = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "35px",
  height: "16px",
  padding: "2px 6px",
  borderRadius: "30px",
  background: "rgba(213, 213, 213, 1)",
  fontSize: "10px",
  fontWeight: 600,
  color: "#64748B",
  lineHeight: 1,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
});

export const SidebarToggleButton = styled(IconButton)({
  width: "36px",
  height: "36px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  borderRadius: "50%",
  border: "1px solid rgba(171, 171, 171, 1)",
  backgroundColor: "#FFFFFF",
  boxSizing: "border-box",
});

export const VectorIconButton = styled(IconButton)({
  width: "27px",
  height: "27px",
  border: "1px solid rgba(171, 171, 171, 1)",
  borderRadius: "50%",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(171, 171, 171, 0.1)",
    borderColor: "rgba(100, 116, 139, 1)",
  },
  "& svg": {
    fontSize: "14px",
    color: "rgba(171, 171, 171, 1)",
  },
  boxSizing: "border-box",
});

export const CustomChevronWrapper = styled(Box)({
  width: "5.58px",
  height: "11.25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
