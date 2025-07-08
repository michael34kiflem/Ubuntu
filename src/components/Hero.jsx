import { motion } from 'framer-motion';
import { ArrowRight } from 'react-feather';
import { 
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Container,
  styled
} from '@mui/material';

const Hero = ({ id, darkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Images showing web and mobile app development
  const techImage = darkMode 
    ? "https://res.cloudinary.com/dqwttbkqo/image/upload/v1751971057/r5se2z2u_dqbc3p.png"
    : "https://res.cloudinary.com/dqwttbkqo/image/upload/v1751970731/j4r24fag_jbpryy.png";

  // Styled components to match your exact CSS
  const Highlight = styled('span')(({ theme }) => ({
    color: darkMode ? '#3b82f6' : '#2563eb',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '5px',
      left: 0,
      width: '100%',
      height: '8px',
      backgroundColor: darkMode ? 'rgba(96, 165, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
      zIndex: -1
    }
  }));

  const PrimaryButton = styled(Button)(({ theme }) => ({
    padding: '14px 28px',
    borderRadius: '16px',
    fontWeight: 600,
    backgroundColor: darkMode ? '#3b82f6' : '#2663e7',
    color: 'white',
    border: `2px solid ${darkMode ? '#3b82f6' : '#2563eb'}`,
    '&:hover': {
      backgroundColor: darkMode ? '#2563eb' : '#1d4ed8',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.3s ease'
  }));

  const OutlineButton = styled(Button)(({ theme }) => ({
    padding: '14px 28px',
    borderRadius: '16px',
    fontWeight: 600,
    backgroundColor: 'transparent',
    color: darkMode ? '#60a5fa' : '#2563eb',
    border: `2px solid ${darkMode ? '#60a5fa' : '#2563eb'}`,
    '&:hover': {
      backgroundColor: darkMode ? 'rgba(96, 165, 250, 0.1)' : 'rgba(37, 99, 235, 0.1)',
      transform: 'translateY(-2px)'
    },
    transition: 'all 0.3s ease'
  }));

  return (
    <Box 
      id={id}
      component="section"
      sx={{
        background: darkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' 
          : 'linear-gradient(135deg, #ffffff 0%, #e9ecef 100%)',
        overflow: 'hidden',
        px: '5vw',
        display: 'flex',
        alignItems: 'center',
        minHeight: '100vh'
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          alignItems: 'center',
          gap: { xs: 4, lg: 8 }
        }}
      >
        {/* Content Section */}
        <Box 
          sx={{
            flex: 1,
            pr: { lg: 5 },
            zIndex: 2,
            textAlign: { xs: 'center', lg: 'left' }
          }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <motion.div variants={variants} transition={{ delay: 0.2 }}>
            <Typography 
              variant={isMobile ? 'h3' : 'h2'}
              component="h1"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '3.8rem' },
                lineHeight: 1.2,
                mb: 2.5,
                color: darkMode ? '#ffffff' : '#1a1a1a'
              }}
            >
              Building <Highlight>Digital Experiences</Highlight>
            </Typography>
          </motion.div>
          
          <motion.div variants={variants} transition={{ delay: 0.4 }}>
            <Typography 
              variant="h6"
              component="p"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                maxWidth: '600px',
                mb: 4,
                mx: { xs: 'auto', lg: 0 },
                color: darkMode ? '#94a3b8' : '#4a5568'
              }}
            >
              Ubuntu Tech crafts beautiful websites and powerful mobile apps that drive business growth.
            </Typography>
          </motion.div>
          
          <motion.div
            variants={variants}
            transition={{ delay: 0.6 }}
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: { xs: 'center', lg: 'flex-start' },
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            <PrimaryButton 
              href="#services"
              variant="contained"
              sx={{ textTransform: 'none' }}
            >
              Our Services
            </PrimaryButton>
            <OutlineButton 
              href="#contact"
              variant="outlined"
              endIcon={<ArrowRight size={18} />}
              sx={{ textTransform: 'none' }}
            >
              View Portfolio
            </OutlineButton>
          </motion.div>
        </Box>
        
        {/* Visual Section */}
        <Box 
          sx={{
            flex: 2,
            position: 'relative',
            height: { xs: '400px', sm: '500px', lg: '600px' },
            width: '100%'
          }}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Box
            component="img"
            src={techImage}
            alt="Web and mobile app development by Ubuntu Tech"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '12px'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;