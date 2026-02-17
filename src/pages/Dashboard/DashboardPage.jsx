import React from "react";
import {
  Grid,
  Typography,
  Button,
  Avatar,
  Chip,
  Stack,
  Box,
} from "@mui/material";
import * as S from "./DashboardStyles";

const DashboardPage = () => {
  return (
    <S.DashboardLayout>
      {/* Left Sidebar */}
      <S.Sidebar>
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{ width: 120, marginBottom: 40 }}
        />
        <Typography variant="overline" color="textSecondary">
          School Management
        </Typography>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, mb: 1, justifyContent: "flex-start" }}
        >
          Dashboard
        </Button>
        {/* Add more menu items here */}
      </S.Sidebar>

      {/* Main Area */}
      <S.MainContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box>
            <Typography variant="h4" fontWeight="700">
              Dashboard
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Manage all schools in your network
            </Typography>
          </Box>
        </Box>
      </S.MainContent>
    </S.DashboardLayout>
  );
};

export default DashboardPage;
