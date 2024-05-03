import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';
import MainLogo from '../../src/assets/Mainsclogo.jpg';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={8} md={6}>
                    <img src={MainLogo} alt="Main Logo" style={{ width: '100%', marginTop: '20%' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            Course Resource Management
                            <br />
                            System
                        </StyledTitle>
                        <StyledPara>
                        Streamline management, enhance learning, and empower communication—effortlessly organize, track, and thrive!
                        </StyledPara>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ color: "black", borderColor: "black" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                        </StyledBox>
                        <StyledText style={{ marginTop: '10px' }}>
                            Don't have an account?{' '}
                            <Link to="/Adminregister" style={{ color: "blue" }}>
                                Sign up
                            </Link>
                        </StyledText>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 1px;
  background-color: #ffffff;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
  
`;

const StyledPara = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0%;
`;