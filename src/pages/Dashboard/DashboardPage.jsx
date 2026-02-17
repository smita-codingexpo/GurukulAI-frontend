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
      <S.SidebarContainer>
        <Box>
          <S.SidebarHeader>
            <Box display="flex" alignItems="center" gap="12px">
              <img src="/assets/logo.png" alt="Logo" width="30" height="31" />
              <Typography
                fontWeight={600}
                color="#155DFC"
                letterSpacing="0.5px"
              >
                GURUKUL AI
              </Typography>
            </Box>
          </S.SidebarHeader>

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

        <S.SidebarFooter>
          <S.NavItem startIcon={<LogoutIcon />}>Log out</S.NavItem>
        </S.SidebarFooter>
      </S.SidebarContainer>

      <S.MainContentWrapper>
        <S.ContentHeader>
          <S.UserProfileWrapper>
            <S.SchoolSelector>
              <HomeWorkIcon sx={{ fontSize: "20px", color: "#667085" }} />
              <S.SchoolTitle>Demo School</S.SchoolTitle>
              <Stack alignItems="center">
                <KeyboardArrowUpIcon
                  sx={{ fontSize: 14, color: "#64748B", mb: -0.5 }}
                />
                <KeyboardArrowDownIcon
                  sx={{ fontSize: 14, color: "#64748B", mt: -0.5 }}
                />
              </Stack>
            </S.SchoolSelector>

            <S.UserActionContainer>
              <Badge badgeContent={4} color="error">
                <NotificationsNoneIcon
                  sx={{ color: "#64748B", fontSize: 20 }}
                />
              </Badge>

              <S.ProfileContainer>
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#EFF6FF",
                    color: "#2563EB",
                  }}
                >
                  <Typography fontWeight={600} fontSize="14px">
                    SA
                  </Typography>
                </Avatar>
                <S.UserTextInfo>
                  <S.UserName>Super Admin</S.UserName>
                  <S.UserEmail>admin@system.edu</S.UserEmail>
                </S.UserTextInfo>
                <KeyboardArrowDownIcon
                  sx={{ fontSize: 16, opacity: 0.5, color: "#94A3B8" }}
                />
              </S.ProfileContainer>
            </S.UserActionContainer>
          </S.UserProfileWrapper>
        </S.ContentHeader>

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
