import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const DashboardLayout = styled(Box)({
  display: "flex",
  height: "100vh",
  backgroundColor: "#F8FAFC",
});

export const Sidebar = styled(Box)(({ theme }) => ({
  width: "280px",
  backgroundColor: "#FFFFFF",
  borderRight: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
}));

export const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  overflowY: "auto",
}));

export const SchoolCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "16px",
  border: "1px solid #E2E8F0",
  boxShadow: "none",
  "&:hover": { boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" },
}));
