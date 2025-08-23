import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { supabase } from "../../lib/supabase";

const SupabaseComments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load comments from Supabase on component mount
  useEffect(() => {
    loadComments();
    
    // Check if real-time is enabled
    const checkRealtime = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('count')
        .limit(1);
      
      if (error) {
        console.error('Real-time check failed:', error);
      } else {
        console.log('Real-time connection test successful');
      }
    };
    
    checkRealtime();
    
    // Set up real-time subscription for new comments
    const channel = supabase
      .channel(`comments-${blogId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `blog_id=eq.${blogId}`
        },
        (payload) => {
          console.log('Real-time update received:', payload);
          
          if (payload.eventType === 'INSERT') {
            console.log('New comment added:', payload.new);
            setComments(prevComments => [payload.new, ...prevComments]);
          } else if (payload.eventType === 'DELETE') {
            console.log('Comment deleted:', payload.old);
            setComments(prevComments => 
              prevComments.filter(comment => comment.id !== payload.old.id)
            );
          } else if (payload.eventType === 'UPDATE') {
            console.log('Comment updated:', payload.new);
            setComments(prevComments => 
              prevComments.map(comment => 
                comment.id === payload.new.id ? payload.new : comment
              )
            );
          }
        }
      )
      .subscribe((status) => {
        console.log('Subscription status:', status);
        if (status === 'SUBSCRIBED') {
          console.log('✅ Real-time subscription active');
        } else if (status === 'CHANNEL_ERROR') {
          console.error('❌ Real-time subscription failed');
        }
      });

    return () => {
      console.log('Unsubscribing from channel:', `comments-${blogId}`);
      supabase.removeChannel(channel);
    };
  }, [blogId]);

  // Load comments from Supabase
  const loadComments = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('blog_id', blogId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading comments:', error);
        return;
      }

      setComments(data || []);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to add a new comment
  const addComment = async (values, { resetForm }) => {
    try {
      setIsSubmitting(true);
      
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            blog_id: blogId,
            name: values.name,
            email: values.email,
            comment: values.comment
          }
        ])
        .select();

      if (error) {
        console.error('Error adding comment:', error);
        alert('Failed to add comment. Please try again.');
        return;
      }

      // Comment will be added via real-time subscription
      alert('Comment added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Email validation function
  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="comments-section">
        <div className="comments-area">
          <h5>Comments</h5>
          <div className="loading-comments">
            <p>Loading comments...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="comments-section">
      {/* Display existing comments */}
      <div className="comments-area">
        <div className="comments-header">
          <h5>Comments ({comments.length})</h5>
          <button 
            onClick={loadComments}
            className="refresh-comments"
            title="Refresh comments"
          >
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
        
        {comments.length === 0 ? (
          <div className="no-comments">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="item">
              <div className="info">
                <h6>
                  {comment.name} - <span>{formatDate(comment.created_at)}</span>
                </h6>
                <p>{comment.comment}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Comment form */}
      <div className="comment-form" id="comment-form">
        <h5>Add Comment</h5>
        <div className="form">
          <Formik
            initialValues={{
              name: "",
              email: "",
              comment: "",
            }}
            onSubmit={addComment}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <Field
                        as="textarea"
                        placeholder="Your Comment *"
                        name="comment"
                        required
                        rows="4"
                      />
                      {errors.comment && touched.comment && (
                        <div className="error-message">{errors.comment}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        placeholder="Your Name *"
                        name="name"
                        required
                      />
                      {errors.name && touched.name && (
                        <div className="error-message">{errors.name}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <Field
                        type="email"
                        validate={validateEmail}
                        placeholder="Your Email *"
                        name="email"
                        required
                      />
                      {errors.email && touched.email && (
                        <div className="error-message">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group text-center">
                      <button
                        type="submit"
                        className="nb butn light curve full-width"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Posting Comment...' : 'Post Comment'}
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SupabaseComments;
