import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { BookOpen, Search, Plus } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onNewPost: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm, onNewPost }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BookOpen size={24} style={{ marginRight: '10px' }} />
          <Typography variant="h6" component="div">
            React Web Blog
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={20} />
                </InputAdornment>
              ),
              style: { backgroundColor: 'white', borderRadius: '4px' }
            }}
            sx={{ mr: 2 }}
          />
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Plus size={20} />}
            onClick={onNewPost}
          >
            New Post
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;