import React from 'react';
import Grid from '@mui/material/Grid';
import BlogPost from './BlogPost';

interface BlogListProps {
  posts: {
    id: number;
    title: string;
    content: string;
    image: string;
  }[];
  onPostClick: (id: number) => void;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onPostClick }) => {
  return (
    <Grid container spacing={4}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <BlogPost post={post} onClick={() => onPostClick(post.id)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;