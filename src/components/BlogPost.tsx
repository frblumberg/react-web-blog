import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
  onClick: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, onClick }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={post.image}
          alt={post.title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <ReactMarkdown>{post.content.substring(0, 150) + '...'}</ReactMarkdown>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPost;