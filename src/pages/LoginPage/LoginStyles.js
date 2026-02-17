import { styled } from "@mui/material/styles";
import { Box, Paper } from "@mui/material";

export const AuthContainer = styled(Box)({
  display: "flex",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
});

export const BrandPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  position: "relative",
  background: `linear-gradient(180deg, rgba(37, 99, 235, 0.85) 0%, rgba(21, 56, 133, 0.9) 100%), 
               url('/assets/school-bg.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(10),
  color: "#FFFFFF",
  [theme.breakpoints.down("md")]: { display: "none" },
}));

export const NoticeBoardCard = styled(Paper)(({ theme }) => ({
  position: "absolute",
  bottom: "10%",
  left: "10%",
  width: "560px", //
  padding: "16px 24px",
  borderRadius: "16px",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.1)",
}));

export const FormSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
}));
