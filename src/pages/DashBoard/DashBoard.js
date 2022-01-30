import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddAdmin from './AddAdmin/AddAdmin';
import AddProduct from './AddProduct/AddProduct';
import DashboardHome from './DashboardHome/DashboardHome';
import ManageOrders from './ManageOrders/ManageOrders';
import ManageProduct from './ManageProduct/ManageProduct';
import MyOrder from './MyOrder/MyOrder';
import Payment from './Payment/Payment';
import Review from './Review/Review';

const drawerWidth = 240;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logOut, admin}=useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
          <Link to="/"><button className='btn btn-success'>Back to Home</button></Link>
      </Toolbar>
      <Divider />
      <br /> <br />
      <br /> <br />
      {!admin &&
        <Box>
          <Link className='ms-4 text-decoration-none fs-5'  to={`${url}`}>Dashboard Home</Link>
          <br /> <br /> 
          <Link className='ms-4  text-decoration-none fs-5'  to={`${url}/myOrder`}>My Order</Link>
          <br /> <br />
          <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/payment`}>Payment</Link>
          <br /> <br />
          <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/review`}>Review</Link>
        </Box>      
      }
          <br /> <br />
          
      {admin && <Box>
        <Divider />
        <br />
        <h3 className='ms-4 fst-italic text-warning'>Admin Panel</h3>
        <Divider />
        <br />
        <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/addAdmin`}>Add Admin</Link>
          <br /> <br />
      <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/addProduct`}>Add Product</Link>
          <br /> <br />
          <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/manageProduct`}>Manage Product</Link>
          <br /> <br />
          <Link className='ms-4 text-decoration-none fs-5'  to={`${url}/manageOrders`}>Manage Orders</Link>
      </Box>

      }
          <br /> 
          <Button onClick={logOut} className='m-4' variant="contained">Log Out</Button>
      
    
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>

        <Route exact  path={path} >
        <DashboardHome/>
        
        </Route>
        <Route path={`${path}/myOrder`}>
          <MyOrder/>
        </Route>
        <Route path={`${path}/payment`}>
          <Payment/>
        </Route>
        <Route path={`${path}/review`}>
          <Review/>
        </Route>
        <AdminRoute path={`${path}/addAdmin`}>
          <AddAdmin/>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
          <ManageProduct/>
        </AdminRoute>
        <AdminRoute path={`${path}/manageOrders`}>
          <ManageOrders/>
        </AdminRoute>
      </Switch>
    
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;
