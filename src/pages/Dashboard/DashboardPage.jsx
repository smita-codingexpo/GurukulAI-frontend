import React from "react";
import { Typography, Box, Avatar, Stack, Badge, Button } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  School as SchoolIcon,
  Logout as LogoutIcon,
  Add as AddIcon,
  HomeWork as HomeWorkIcon,
  NotificationsNone as NotificationsNoneIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import * as S from "./DashboardStyles";

const schoolData = [
  { id: "SCH-001", name: "Gurukul Global", location: "Pune, MH" },
  { id: "SCH-002", name: "Orchid Heights", location: "Mumbai, MH" },
  { id: "SCH-003", name: "Heritage Academy", location: "Nashik, MH" },
  { id: "SCH-004", name: "Sunrise Public", location: "Nagpur, MH" },
];

const DashboardPage = () => {
  return (
    <S.DashboardContainer>
      {/* Sidebar Section */}
      <S.SidebarContainer>
        <Box>
          <S.SidebarHeader>
            <Stack direction="row" alignItems="center" gap="12px">
              <img src="/assets/logo.png" alt="Logo" width="30" height="31" />
              <Typography
                fontWeight={600}
                color="#155DFC"
                letterSpacing="0.5px"
              >
                GURUKUL AI
              </Typography>
            </Stack>
          </S.SidebarHeader>

          <S.NavSection>
            <S.NavLabel>School Management</S.NavLabel>
            {[
              { label: "Dashboard", icon: <DashboardIcon />, active: true },
              { label: "School", icon: <SchoolIcon /> },
              { label: "Class", icon: <SchoolIcon /> },
              { label: "Session", icon: <SchoolIcon /> },
              { label: "Settings", icon: <LogoutIcon /> },
            ].map((item) => (
              <S.NavItem
                key={item.label}
                active={item.active}
                startIcon={item.icon}
              >
                {item.label}
              </S.NavItem>
            ))}
          </S.NavSection>
        </Box>

        <S.SidebarFooter>
          <S.NavItem startIcon={<LogoutIcon />}>Log out</S.NavItem>
        </S.SidebarFooter>
      </S.SidebarContainer>

      {/* Main Content Wrapper */}
      <S.MainContentWrapper>
        <S.ContentHeader>
          <S.UserProfileWrapper>
            <S.SchoolSelector>
              <HomeWorkIcon sx={{ fontSize: 20, color: "#667085" }} />
              <S.SchoolTitle>Demo School</S.SchoolTitle>
              <Stack>
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

        {/* Dashboard Content Body */}
        <S.MainBodyContainer>
          <S.DashboardHeaderBar mb={4}>
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
          </S.DashboardHeaderBar>

          <S.CardRowWrapper>
            {schoolData.map((school) => (
              <S.SchoolCard key={school.id}>
                <S.CardContent>
                  <Stack direction="row" alignItems="center" gap="12px">
                    <Avatar
                      sx={{
                        bgcolor: "#F1F5F9",
                        color: "#2563EB",
                        borderRadius: "8px",
                      }}
                    >
                      <SchoolIcon />
                    </Avatar>
                    <Typography fontWeight={600}>{school.name}</Typography>
                  </Stack>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      ID: {school.id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {school.location}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mt: "auto",
                      borderRadius: "8px",
                      textTransform: "none",
                    }}
                  >
                    Manage School
                  </Button>
                </S.CardContent>
              </S.SchoolCard>
            ))}
          </S.CardRowWrapper>
        </S.MainBodyContainer>
      </S.MainContentWrapper>
    </S.DashboardContainer>
  );
};

export default DashboardPage;
