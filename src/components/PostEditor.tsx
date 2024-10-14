import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

interface PostEditorProps {
  post?: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
  onSave: (post: { title: string; content: string; image: string }) => void;
  onCancel: () => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [image, setImage] = useState(post?.image || '');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImage(post.image);
    }
  }, [post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, content, image });
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        {post ? 'Edit Post' : 'Create New Post'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Content (Markdown)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
          required
          multiline
          rows={10}
        />
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Preview:
        </Typography>
        <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </Paper>
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 1 }}>
          Save
        </Button>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
      </form>
    </Paper>
  );
};

export default PostEditor;