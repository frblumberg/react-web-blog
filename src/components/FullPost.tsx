import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Edit, Trash } from 'lucide-react';

interface FullPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const FullPost: React.FC<FullPostProps> = ({ post, onClose, onEdit, onDelete }) => {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Button
          startIcon={<ArrowLeft />}
          onClick={onClose}
        >
          Back to List
        </Button>
        <div>
          <Button
            startIcon={<Edit />}
            onClick={onEdit}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>
          <Button
            startIcon={<Trash />}
            onClick={onDelete}
            color="error"
          >
            Delete
          </Button>
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <img
        src={post.image}
        alt={post.title}
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '20px' }}
      />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Paper>
  );
};

export default FullPost;