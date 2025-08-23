import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = localStorage.getItem(`blog-comments-${blogId}`);
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch (error) {
        console.error('Error loading comments:', error);
        setComments([]);
      }
    }
  }, [blogId]);

  // Save comments to localStorage whenever comments change
  useEffect(() => {
    localStorage.setItem(`blog-comments-${blogId}`, JSON.stringify(comments));
  }, [comments, blogId]);

  // Function to add a new comment
  const addComment = (values, { resetForm }) => {
    const newComment = {
      id: Date.now(),
      name: values.name,
      email: values.email,
      comment: values.comment,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      timestamp: Date.now()
    };

    setComments(prevComments => [newComment, ...prevComments]);
    resetForm();
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

  return (
    <div className="comments-section">
      {/* Display existing comments */}
      <div className="comments-area">
        <h5>Comments ({comments.length})</h5>
        
        {comments.length === 0 ? (
          <div className="no-comments">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="item">
              <div className="info">
                <h6>
                  {comment.name} - <span>{comment.date}</span>
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
            onSubmit={async (values, { resetForm }) => {
              setIsSubmitting(true);
              // Simulate a small delay for better UX
              await new Promise(resolve => setTimeout(resolve, 500));
              addComment(values, { resetForm });
              setIsSubmitting(false);
            }}
          >
            {({ errors, touched }) => (
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

export default Comments;
