import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useSelector } from "react-redux";
import * as S from "./LoginStyles";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { isLoading } = useSelector((state) => state.auth);
  const handleSignIn = () => {
    // Logic for auth would go here
    navigate("/dashboard");
  };

  return (
    <S.AuthContainer>
      {/* Left Panel - Brand Information */}
      <S.BrandPanel>
        <Typography variant="h2">Hey, welcome to the</Typography>
        <Typography variant="h2" color="secondary">
          GURUKUL AI
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, opacity: 0.9, maxWidth: "430px" }}
        >
          Focus on establishing a strong foundation in reading, composition and
          mathematical skills.
        </Typography>

        <S.NoticeBoardCard>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: "error.main",
                borderRadius: "50%",
              }}
            />
            <Typography variant="caption" fontWeight="600" color="#64748B">
              LIVE NOTICE BOARD
            </Typography>
          </Box>
          <Typography variant="body2" fontWeight="700" color="#0F172A">
            Annual Sports Day - Register by Jan 20th
          </Typography>
          {/* Slider Pagination Dots */}
          <Box display="flex" gap={1} mt={2}>
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                sx={{
                  width: i === 1 ? 16 : 6,
                  height: 6,
                  borderRadius: 3,
                  bgcolor: i === 1 ? "#3B82F6" : "#E2E8F0",
                }}
              />
            ))}
          </Box>
        </S.NoticeBoardCard>
      </S.BrandPanel>

      {/* Right Panel - Login Form */}
      <S.FormSection>
        <Box sx={{ width: "100%", maxWidth: "520px" }}>
          {" "}
          {/* Width from Figma */}
          <Box
            component="img"
            src="/assets/logo.png"
            sx={{ width: 133, mb: 6, mx: "auto", display: "block" }}
          />
          {/* User ID Field */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            User ID
          </Typography>
          <TextField
            fullWidth
            placeholder="School Login User Id"
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#F8FAFC",
              },
            }}
          />
          {/* 2. REPLACED: Enhanced Password Field with Toggle */}
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            Password
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"} // Toggles type
            placeholder="School Login Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword} edge="end">
                    {showPassword ? (
                      <Visibility sx={{ fontSize: 20 }} />
                    ) : (
                      <VisibilityOff sx={{ fontSize: 20 }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "#F8FAFC",
              },
            }}
          />
          {/* Navigation/Actions Section */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={
                <Typography variant="body2" color="#64748B">
                  Remember me
                </Typography>
              }
            />
            <Link href="#" variant="body2" underline="none" fontWeight="500">
              Forgot password?
            </Link>
          </Box>
          <S.StyledSignInButton
            variant="contained"
            onClick={handleSignIn}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </S.StyledSignInButton>
          <Typography variant="body2" align="lef" color="#64748B" mt={5}>
            Don't have an account?{" "}
            <Link href="mailto:gurukul.ai@gurukul.in" underline="none">
              gurukul.ai@gurukul.in
            </Link>
          </Typography>
        </Box>
      </S.FormSection>
    </S.AuthContainer>
  );
};

export default LoginPage;
