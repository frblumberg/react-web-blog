import React from 'react';
import { Typography, Paper, Container } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          About React Web Blog
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to React Web Blog, a modern blogging platform built with React and Material-UI. Our mission is to provide a seamless and enjoyable experience for both readers and writers.
        </Typography>
        <Typography variant="body1" paragraph>
          This blog showcases the power of React combined with the elegance of Material-UI, creating a responsive and intuitive user interface. We leverage technologies like TypeScript for type safety and Markdown for easy content creation.
        </Typography>
        <Typography variant="body1">
          Whether you're here to read insightful articles or share your own thoughts, we hope you enjoy your time on React Web Blog. Happy blogging!
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;