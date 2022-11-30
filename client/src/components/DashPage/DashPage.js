import { Button, FormControl, Grid } from '@mui/material'
import React from 'react'
import { useLogOut } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import '../DashPage/Dashstyle.css'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

const DashPage = () => {
   

    const { logout } = useLogOut()
    const { user } = useAuthContext()

    const handleClick = () =>{
        logout()
    }
    const Illustration = new URL('../images/user.png', import.meta.url)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          backgroundColor: '#44b700',
          color: '#44b700',
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
          },
        },
      }));
      
      const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
      }));

    return (
    <div>
        <div>
        <div className='user-main'>
            <div className='container'>
                <h4>
                    WELCOME 
                <span>.</span>
                </h4>
                    {user  && (
                    <div className='user-holder'>
                     <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                            >
                        <Avatar alt="User Icon"  />
                        </StyledBadge> 
                        <span className='identity'>{user.email}</span>
                        <Grid item xs={12}>
                        <FormControl fullWidth margin='normal' sx={{ mt: 5}}>
                        <Button 
                        disableElevation={true}
                        onClick={handleClick}
                                    sx={ { 
                                    fontFamily: "Poppins",
                                    fontSize: '0.9rem', 
                                    color: '#fefefe',
                                    borderRadius: 100, 
                                    height:'5ch', 
                                    fontWeight:'500',
                                    hover:'#004d40',
                                    padding: "30px",
                                        } } 
                                    margin= "normal"
                                    variant="contained"  
                                    size="large"
                                    color="secondary"
                                    >
                                    LOGOUT 
                        </Button>
                        </FormControl>
                        </Grid>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashPage