import {
  Close as CloseIcon,
  Menu as MenuIcon
} from '@mui/icons-material';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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
  useTheme
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
        backgroundColor: darkMode ? '#121212' : theme.palette.background.paper,
        color: darkMode ? '#ffffff' : theme.palette.text.primary,
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div" className='title' sx={{ color: darkMode ? '#ffffff' : 'inherit' }}>
          UBUNTU
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: darkMode ? '#ffffff' : 'inherit' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.id} 
            disablePadding
            sx={{
              backgroundColor: activeSection === item.id ? 
                (darkMode ? 'rgba(255, 255, 255, 0.08)' : theme.palette.action.selected) : 'transparent',
              color: darkMode ? '#ffffff' : 'inherit'
            }}
          >
            <ListItemButton onClick={() => handleNavClick(item.id)}>
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{
                  fontWeight: activeSection === item.id ? 'bold' : 'normal',
                  color: darkMode ? '#ffffff' : 'inherit'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WbSunnyIcon sx={{ color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)' }} />
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          inputProps={{ 'aria-label': 'toggle dark mode' }}
          color="primary"
        />
        <NightlightRoundIcon sx={{ color: darkMode ? '#ffffff' : 'rgba(0, 0, 0, 0.7)' }} />
      </Box>
    </Box>
  );

  return (
    <>
      <Slide appear={false} direction="down" in={visible}>
        <AppBar 
          position="fixed" 
          color="default"
          elevation={1}
          sx={{
            backgroundColor: darkMode ? '#121212' : theme.palette.background.paper,
            color: darkMode ? '#ffffff' : theme.palette.text.primary,
            transition: 'transform 0.3s ease-in-out',
            borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.12)' : `1px solid ${theme.palette.divider}`,
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
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
                color: darkMode ? '#ffffff' : 'inherit'
              }}
            >
              <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
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
                          theme.palette.primary.main : 
                          (darkMode ? '#ffffff' : theme.palette.text.primary),
                        fontWeight: activeSection === item.id ? 'bold' : 'normal',
                        '&:hover': {
                          color: theme.palette.primary.main
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
                            backgroundColor: theme.palette.primary.main
                          }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Box>
                  ))}
                </Box>
                
                <IconButton 
                  onClick={toggleDarkMode} 
                  sx={{
                    color: darkMode ? '#ffffff' : 'inherit'
                  }}
                >
                  {darkMode ? (
                    <WbSunnyIcon sx={{ color: '#ffffff' }} />
                  ) : (
                    <NightlightRoundIcon sx={{ color: 'inherit' }} />
                  )}
                </IconButton>
              </Box>
            )}

            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: darkMode ? '#ffffff' : 'inherit'
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
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
              backgroundColor: darkMode ? '#121212' : theme.palette.background.paper,
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