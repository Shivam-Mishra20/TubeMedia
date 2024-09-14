import { AppBar, Toolbar, IconButton, Box, Typography, Badge, Avatar, InputAdornment, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import YouTubeIcon from '@mui/icons-material/YouTube';
import MicIcon from "@mui/icons-material/Mic";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import useSidebarStore from '../State/Store'

const Navbar = () => {
  const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);  // Access the
  const collapsed = useSidebarStore((state) => state.collapsed);  // Access the collapsed state




  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Section */}



        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

          <IconButton edge="start" sx={{ marginLeft: collapsed ? " 0px " : "-8px" }} color="inherit" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>


          <Link to="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', }}>
              <YouTubeIcon sx={{ color: 'red', fontSize: { xs: '1.5rem', md: '2rem' }, display: { xs: 'none', md: 'block' } }} />
              <Typography variant="h6" sx={{ ml: 0.2, display: { xs: 'none', md: 'block' }, color: 'white ' }}>
                Tube
              </Typography>
              <Typography variant="caption" sx={{ ml: 0.5, display: { xs: 'none', md: 'block' }, color: 'white ' }}>
                IN
              </Typography>
            </Box>
          </Link>
        </Box>



        {/* Center Section - Search Bar */}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <SearchBar />
          <InputAdornment position="end">
            <IconButton sx={{ padding: 1, bgcolor: "gray", }}>
              <MicIcon sx={{ color: "#fff" }} />
            </IconButton>
          </InputAdornment>
        </Box>
        {/* Right Section */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' }, // Set 'flex' for sm and above, 'none' for xs
            alignItems: 'center',
            gap: 2,
          }}
        >

          <IconButton color="inherit" sx={{ marginTop: "6px" }}>
            <VideoCallIcon />
          </IconButton>
          <IconButton color="inherit"  >
            <Badge badgeContent={9} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar src="/user-avatar.jpg" sx={{ width: '30px', textAlign: "center", paddingTop: " 3px", height: '25px', }} />
        </Box>
      </Toolbar>
    </AppBar >
  );
};

export default Navbar;
