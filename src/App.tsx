import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/Header';
import BlogList from './components/BlogList';
import FullPost from './components/FullPost';
import PostEditor from './components/PostEditor';
import { blogPosts as initialBlogPosts } from './data/blogPosts';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
};

function App() {
  const [blogPosts, setBlogPosts] = useState<Post[]>(initialBlogPosts);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSavePost = (postData: Omit<Post, 'id'>) => {
    if (selectedPost !== null) {
      // Update existing post
      setBlogPosts(posts =>
        posts.map(post =>
          post.id === selectedPost ? { ...post, ...postData } : post
        )
      );
    } else {
      // Create new post
      const newPost = {
        ...postData,
        id: blogPosts.length + 1,
      };
      setBlogPosts(posts => [...posts, newPost]);
    }
    setIsEditing(false);
    setSelectedPost(null);
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
    setSelectedPost(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onNewPost={() => setIsEditing(true)}
      />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {isEditing ? (
          <PostEditor
            post={selectedPost !== null ? blogPosts.find(post => post.id === selectedPost) : undefined}
            onSave={handleSavePost}
            onCancel={() => {
              setIsEditing(false);
              setSelectedPost(null);
            }}
          />
        ) : selectedPost !== null ? (
          <FullPost
            post={blogPosts.find(post => post.id === selectedPost)!}
            onClose={() => setSelectedPost(null)}
            onEdit={() => setIsEditing(true)}
            onDelete={() => handleDeletePost(selectedPost)}
          />
        ) : (
          <BlogList posts={filteredPosts} onPostClick={setSelectedPost} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;