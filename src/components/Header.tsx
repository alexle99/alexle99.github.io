import { Box, Typography } from '@mui/material';
import COLORS from '@/colors';

export const Header = ({ label }: { label: string }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',

        padding: '2rem',
        width: '100%',
        backgroundColor: COLORS.headerBackground,
      }}
    >
      <Typography variant="h4" sx={{ color: COLORS.headerColor }}>
        {label}
      </Typography>
    </Box>
  );
};
