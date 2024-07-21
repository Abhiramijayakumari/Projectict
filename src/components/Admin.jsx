import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const drawerWidth = 240;

const styles = {
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: '20px',
      marginLeft: drawerWidth,
    },
    toolbar: {
      minHeight: '64px', // Adjust based on your AppBar height
    },
  };

const UserManagement = () => (
    <Box>
      <Typography variant="h5">User Management</Typography>
      <Typography variant="body1">View and manage user accounts.</Typography>
    </Box>
  );
  
  const ExpenseManagement = () => (
    <Box>
      <Typography variant="h5">Expense Management</Typography>
      <Typography variant="body1">View and manage expenses logged by users.</Typography>
    </Box>
  );

const Admin = () => {
    const [selectedSection, setSelectedSection] = useState('User Management');

  const handleListItemClick = (section) => {
    setSelectedSection(section);
  };
  return (
    <Box style={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={styles.drawer}
        variant="permanent"
        classes={{ paper: styles.drawerPaper }}
      >
        <Toolbar />
        <List>
          {['User Management', 'Expense Management'].map((text) => (
            <ListItem
              button
              key={text}
              onClick={() => handleListItemClick(text)}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        </Drawer>
      <Box component="main" style={styles.content}>
        <Toolbar />
        {selectedSection === 'User Management' && <UserManagement />}
        {selectedSection === 'Expense Management' && <ExpenseManagement />}
      </Box>
    </Box>
  )
}

export default Admin
