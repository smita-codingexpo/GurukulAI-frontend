import React, { useState } from "react";
import {
  Typography,
  Box,
  Avatar,
  Stack,
  Badge,
  Button,
  Collapse,
} from "@mui/material";
import {
  School as SchoolIcon,
  Logout as LogoutIcon,
  Add as AddIcon,
  HomeWork as HomeWorkIcon,
  NotificationsNone as NotificationsNoneIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { NAV_ITEMS, schoolData } from "./Dashboardpagejson";
import * as S from "./DashboardStyles";

const DashboardPage = () => {
  const [openItems, setOpenItems] = useState([]);
  const [activeTab, setActiveTab] = useState("sm-dashboard");

  const handleToggle = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <S.DashboardContainer>
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
          <S.SidebarWrapper>
            <S.SearchSectionContainer>
              <S.SearchWrapper>
                <S.SearchInputGroup>
                  <SearchIcon sx={{ fontSize: 18, color: "#64748B" }} />
                  <S.SearchInput
                    placeholder="Search"
                    sx={{ height: "15.01px", fontSize: "14px" }}
                  />
                </S.SearchInputGroup>
                <S.ShortcutBadge>Ctrl+K</S.ShortcutBadge>
              </S.SearchWrapper>
              <S.SidebarToggleButton size="small">
                <S.CustomChevronWrapper>
                  <img src="/assets/Vector.png" alt="chevron" />
                </S.CustomChevronWrapper>
              </S.SidebarToggleButton>
            </S.SearchSectionContainer>

            <S.NavSection>
              {NAV_ITEMS.map((item) => {
                const isOpen = openItems.includes(item.id);
                return (
                  <Box key={item.id} sx={{ width: "100%", mb: 1 }}>
                    <S.NavItem
                      active={isOpen}
                      startIcon={item.icon}
                      onClick={() => handleToggle(item.id)}
                    >
                      <S.NavItemLabel>{item.name}</S.NavItemLabel>
                      <S.ArrowWrapper isExpanded={isOpen}>
                        <KeyboardArrowDownIcon />
                      </S.ArrowWrapper>
                    </S.NavItem>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <S.SubNavContainer>
                        {item.children?.map((child) => (
                          <S.SubNavItem
                            key={child.id}
                            active={activeTab === child.id}
                            onClick={() => setActiveTab(child.id)}
                          >
                            <S.SubNavSpacer />
                            <S.SubNavLabel>{child.name}</S.SubNavLabel>
                          </S.SubNavItem>
                        ))}
                      </S.SubNavContainer>
                    </Collapse>
                  </Box>
                );
              })}
            </S.NavSection>

            <S.SidebarFooter>
              <S.FooterDivider />
              <S.LogoutButton startIcon={<LogoutIcon />}>
                <S.LogoutLabel>Log out</S.LogoutLabel>
              </S.LogoutButton>
            </S.SidebarFooter>
          </S.SidebarWrapper>
        </Box>
      </S.SidebarContainer>

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
            {schoolData.map(({ id, name, location }) => (
              <S.SchoolCard key={id}>
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
                    <Typography fontWeight={600}>{name}</Typography>
                  </Stack>
                  <Box>
                    <Typography variant="caption" color="textSecondary">
                      ID: {id}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {location}
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
