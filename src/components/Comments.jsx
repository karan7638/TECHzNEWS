import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Comments = () => {
    const { user, isAuthenticated } = useAuth0(); // Get user info and authentication status
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const [loading, setLoading] = useState(false); // Adding loading state for fetching comments

    // Load comments from local storage when the component mounts
    useEffect(() => {
        setLoading(true);
        try {
            const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
            setCommentsList(storedComments);
        } catch (error) {
            console.error('Error loading comments from localStorage', error);
            setCommentsList([]); // Fallback to empty list
        }
        setLoading(false);
    }, []);

    // Handle new comment submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === '') return;

        const newComment = {
            id: Date.now(), // Unique ID for each comment
            text: comment,
            user: {
                name: user.name || 'Anonymous', // User name or 'Anonymous'
                picture: user.picture || 'default-avatar.png' // User profile picture or a default image
            },
        };

        const updatedComments = [...commentsList, newComment];
        setCommentsList(updatedComments);
        setComment('');

        // Store comments in local storage
        try {
            localStorage.setItem('comments', JSON.stringify(updatedComments));
        } catch (error) {
            console.error('Error saving comment to localStorage', error);
        }
    };

    // Handle comment deletion
    const handleDelete = (id) => {
        const updatedComments = commentsList.filter(comment => comment.id !== id);
        setCommentsList(updatedComments);
        try {
            localStorage.setItem('comments', JSON.stringify(updatedComments));
        } catch (error) {
            console.error('Error deleting comment from localStorage', error);
        }
    };

    return (
        <div className='p-5'>
            {isAuthenticated ? ( // Check if user is authenticated
                <>
                    <div>
                        <label htmlFor="comment" className='block mb-2 text-xl font-medium text-gray-900'>Add Comment</label>
                        <input
                            type="text"
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"
                            placeholder="Enter your comment"
                            required
                        />
                        <button onClick={handleSubmit} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
                            Submit
                        </button>
                    </div>
                </>
            ) : (
                <p className='text-red-500'>Please log in to add comments.</p>
            )}

            <div className='mt-5'>
                <h2 className='text-2xl font-bold'>Comments</h2>
                {loading ? (
                    <p>Loading comments...</p> // Display loading message
                ) : commentsList.length === 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    <ul className='grid grid-cols-1 place-content-start'>
                        {commentsList.map((comment) => (
                            <li key={comment.id} className='mb-4 flex justify-between items-start'>
                                <div className='flex items-center'>
                                    <img 
                                        src={comment.user.picture} 
                                        alt={comment.user.name} 
                                        className='w-10 h-10 rounded-full mr-3' 
                                    />
                                    <p><strong>{comment.user.name}:</strong> {comment.text}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(comment.id)}
                                    className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Comments;
