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
  height: "925px",
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
  alignItems: "flex-start",
  width: "264px",
  height: "837px",
  gap: "18px",
  padding: "16px",
  overflowY: "auto",
  overflowX: "hidden",
  "&::-webkit-scrollbar": { width: "4px" },
  "&::-webkit-scrollbar-thumb": { background: "#E2E8F0", borderRadius: "10px" },
});

export const NavItem = styled(Button, {
  shouldForwardProp: (p) => p !== "active",
})(({ active }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "264px",
  height: "44px",
  padding: "12px 16px",
  borderRadius: "8px",
  textTransform: "none",
  backgroundColor: active ? "#EFF6FF" : "transparent",
  "& .MuiButton-startIcon": {
    margin: 0,
    marginRight: "10px",
    color: active ? "#2563EB" : "#64748B",
  },
}));

export const ArrowWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isExpanded",
})(({ isExpanded }) => ({
  width: "20px",
  height: "9px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.3s ease",
  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
  "& svg": { fontSize: "18px", color: "#64748B" },
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

export const SearchSectionContainer = styled(FlexBox)({
  flexDirection: "row",
  alignItems: "center",
  width: "264px",
  height: "49px",
  padding: "8px",
  gap: "8px",
});

export const SearchWrapper = styled(FlexBox)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "204px",
  height: "36px",
  padding: "8px 16px",
  borderRadius: "24px",
  background: "rgba(245, 246, 250, 1)",
  cursor: "text",
});

export const SearchInput = styled(InputBase)({
  fontSize: "14px",
  flex: 1,
  marginLeft: "8px",
  "& .MuiInputBase-input": {
    padding: 0,
    color: "#64748B",
    "&::placeholder": { opacity: 1, color: "#94A3B8" },
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

export const CustomChevronWrapper = styled(Box)({
  width: "5.58px",
  height: "11.25px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& img": { width: "100%", height: "100%", objectFit: "contain" },
});

export const NavItemLabel = styled(Typography)({
  width: "160px",
  height: "19px",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "100%",
  color: "rgba(64, 64, 64, 1)",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  boxSizing: "border-box",
});

export const SubNavContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  width: "264px",
  paddingLeft: "16px",
  marginTop: "4px",
});

export const SubNavItem = styled(Box, {
  shouldForwardProp: (p) => p !== "active",
})(({ active }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "264px",
  height: "44px",
  padding: "12px 16px",
  gap: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  backgroundColor: active ? "rgba(21, 93, 252, 1)" : "transparent",
  color: active ? "#FFFFFF" : "rgba(64, 64, 64, 1)",
  transition: "all 0.2s ease",
  "&:hover": { backgroundColor: active ? "rgba(21, 93, 252, 1)" : "#F8FAFC" },
}));

export const SubNavSpacer = styled(Box)({
  width: "20px",
  height: "20px",
  flexShrink: 0,
});

export const SubNavLabel = styled(Typography)({
  width: "160px",
  height: "19px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "100%",
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "inherit",
});
