import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as S from "./DashboardStyles";
import {
  Grid,
  Typography,
  Box,
  Avatar,
  Chip,
  Stack,
  IconButton,
  Badge,
} from "@mui/material";

const DashboardPage = () => {
  return (
    <S.DashboardContainer>
      {/* 1. SIDEBAR SECTION */}
      <S.SidebarContainer>
        <Box>
          <S.SidebarHeader>
            <Box display="flex" alignItems="center" gap="12px">
              <img src="/assets/logo.png" alt="Logo" width="30" height="31" />
              <Typography
                sx={{
                  fontWeight: 600,
                  color: "#155DFC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                GURUKUL AI
              </Typography>
            </Box>
          </S.SidebarHeader>

          {/* Sidebar Navigation */}
          <S.NavSection>
            <S.NavLabel>School Management</S.NavLabel>
            <S.NavItem active startIcon={<DashboardIcon />}>
              Dashboard
            </S.NavItem>
            <S.NavItem startIcon={<SchoolIcon />}>School</S.NavItem>
            <S.NavItem startIcon={<SchoolIcon />}>Class</S.NavItem>
            <S.NavItem startIcon={<SchoolIcon />}>Session</S.NavItem>
            <S.NavItem startIcon={<LogoutIcon />}>Settings</S.NavItem>
          </S.NavSection>
        </Box>

        {/* Sidebar Footer */}
        <S.SidebarFooter>
          <S.NavItem startIcon={<LogoutIcon />}>Log out</S.NavItem>
        </S.SidebarFooter>
      </S.SidebarContainer>

      {/* 2. MAIN CONTENT AREA */}

      <S.MainContentWrapper sx={{ padding: 0 }}>
        <S.ContentHeader>
          <S.UserProfileWrapper>
            {/* School Selector - Frame 1000003174 */}
            <Box
              sx={{
                width: "224px",
                height: "48px",
                border: "1px solid #E2E8F0",
                borderRadius: "8px",
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                mr: 2,
              }}
            >
              <HomeWorkIcon sx={{ fontSize: "20px", color: "#667085" }} />
              <S.SchoolTitle>Demo School</S.SchoolTitle>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  ml: 0.5,
                }}
              >
                <KeyboardArrowUpIcon
                  sx={{ fontSize: 14, color: "#64748B", mb: -0.5 }}
                />
                <KeyboardArrowDownIcon
                  sx={{ fontSize: 14, color: "#64748B", mt: -0.5 }}
                />
              </Box>
            </Box>

            {/* User Profile & Notifications Wrapper */}
            <S.UserActionContainer>
              {/* Notifications Icon */}
              <S.NotificationWrapper>
                <Badge
                  badgeContent={4}
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: 10,
                      height: 16,
                      minWidth: 16,
                      top: 2,
                      right: 2,
                      backgroundColor: "#D4183D",
                      color: "white",
                    },
                  }}
                >
                  <NotificationsNoneIcon
                    sx={{ color: "#64748B", fontSize: 20 }}
                  />
                </Badge>
              </S.NotificationWrapper>

              <S.ProfileContainer>
                <Avatar
                  sx={{
                    width: "32px",
                    height: "32px",
                    bgcolor: "#EFF6FF",
                    color: "#2563EB",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      width: "17.025px",
                      height: "20px",
                      opacity: 1,
                      transform: "rotate(0deg)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    SA
                  </Typography>
                </Avatar>
                <Box
                  sx={{
                    width: "106.94px",
                    height: "35.99px",
                    opacity: 1,
                    transform: "rotate(0deg)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    flex: 1,
                    overflow: "hidden",
                  }}
                >
                  <S.UserTextInfo>
                    <S.UserName sx={{ whiteSpace: "nowrap" }}>
                      Super Admin
                    </S.UserName>
                    <S.UserEmail sx={{ whiteSpace: "nowrap" }}>
                      admin@system.edu
                    </S.UserEmail>
                  </S.UserTextInfo>

                  <KeyboardArrowDownIcon
                    sx={{
                      width: "16px",
                      height: "16px",
                      fontSize: "16px",
                      opacity: 0.5,
                      transform: "rotate(0deg)",

                      color: "#94A3B8",
                      ml: "auto",
                    }}
                  />
                </Box>
              </S.ProfileContainer>
            </S.UserActionContainer>
          </S.UserProfileWrapper>
        </S.ContentHeader>

        {/* Title & Cards Section */}
        <Box sx={{ padding: "24px" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <Box>
              <Typography variant="h5" fontWeight="700">
                Dashboard
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Manage all schools in your network
              </Typography>
            </Box>
            <S.AddSchoolButton variant="contained" startIcon={<AddIcon />}>
              Add New School
            </S.AddSchoolButton>
          </Box>
          {/* Grid logic... */}
        </Box>
      </S.MainContentWrapper>
    </S.DashboardContainer>
  );
};

export default DashboardPage;
