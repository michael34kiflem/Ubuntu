import {
  Close as CloseIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import SunnyIcon from '@mui/icons-material/Sunny';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Switch,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  styled
} from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setVisible(scrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'testimonials', label: 'Clients' },
    { id: 'contact', label: 'Contact' }
  ];

  // Styled components for custom styling
  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: darkMode ? '0 2px 10px rgba(0, 0, 0, 0.3)' : '0 2px 10px rgba(110, 110, 110, 0.1)',
    transition: 'all 0.3s ease',
    '&.scrolled': {
      padding: '1rem 0',
      boxShadow: darkMode ? '0 4px 15px rgba(0, 0, 0, 0.3)' : '0 4px 15px rgba(0, 0, 0, 0.1)'
    }
  }));

  const NavLink = styled('a')(({ theme }) => ({
    position: 'relative',
    fontSize: '1rem',
    fontWeight: 500,
    color: darkMode ? '#cbd5e1' : '#4a5568',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    padding: '0.5rem 0',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,
    '&:hover': {
      color: darkMode ? '#60a5fa' : '#2563eb'
    },
    '&.active': {
      color: darkMode ? '#60a5fa' : '#2563eb',
      fontWeight: 'bold'
    }
  }));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setMobileOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 250,
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" className="title">
          UBUNTU
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id} 
            disablePadding
            sx={{
              backgroundColor: activeSection === item.id ? 
                theme.palette.action.selected : 'transparent'
            }}
          >
            <ListItemButton onClick={() => handleNavClick(item.id)}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 'bold' : 'normal',
                  fontFamily: '"Poppins", sans-serif',
                  color: activeSection === item.id ? 
                    (darkMode ? '#60a5fa' : '#2563eb') : 
                    (darkMode ? '#cbd5e1' : '#4a5568')
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2, display: 'flex', alignItems: 'center' }}>
        <SunnyIcon sx={{ color: darkMode ? 'grey.500' : 'primary.main' }} />
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          inputProps={{ 'aria-label': 'toggle dark mode' }}
        />
        <NightlightRoundIcon sx={{ color: darkMode ? 'primary.main' : 'grey.500' }} />
      </Box>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={visible}>
        <StyledAppBar 
          position="fixed" 
          className={prevScrollPos > 50 ? 'scrolled' : ''}
          sx={{
            transition: 'transform 0.3s ease-in-out',
            borderBottom: `1px solid ${darkMode ? '#334155' : '#e2e8f0'}`
          }}
        >
          <Toolbar sx={{ 
            justifyContent: 'space-between',
            padding: prevScrollPos > 50 ? '0.5rem 0' : '1.5rem 0',
            transition: 'padding 0.3s ease'
          }}>
            <Box 
              component="a" 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: darkMode ? '#ffffff' : '#1a1a1a'
              }}
            >
              <Typography variant="h6" component="div" sx={{ 
                fontWeight: 900,
                fontFamily: '"Poppins", sans-serif'
              }}>
                UBUNTU
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', mr: 2 }}>
                  {navItems.map((item) => (
                    <Box
                      key={item.id}
                      component="a"
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      sx={{
                        px: 2,
                        py: 1,
                        position: 'relative',
                        textDecoration: 'none',
                        color: activeSection === item.id ? 
                          (darkMode ? '#60a5fa' : '#2563eb') : 
                          (darkMode ? '#cbd5e1' : '#4a5568'),
                        fontWeight: activeSection === item.id ? 'bold' : 'normal',
                        fontFamily: '"Poppins", sans-serif',
                        '&:hover': {
                          color: darkMode ? '#60a5fa' : '#2563eb'
                        }
                      }}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="nav-underline"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            backgroundColor: darkMode ? '#60a5fa' : '#2563eb'
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
                
                <IconButton 
                  onClick={toggleDarkMode} 
                  color="inherit"
                  sx={{
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)'
                    }
                  }}
                >
                  {darkMode ? <SunnyIcon/> : <NightlightRoundIcon />}
                </IconButton>
              </Box>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </StyledAppBar>
      </Slide>

      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 250,
              backgroundColor: darkMode ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              boxShadow: darkMode ? '0 4px 6px rgba(0, 0, 0, 0.3)' : '0 4px 6px rgba(0, 0, 0, 0.1)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;