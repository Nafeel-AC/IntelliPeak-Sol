/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleNewsletterSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionMessage("Please enter your email address");
      setMessageType("error");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    setIsSubscribing(true);
    setSubscriptionMessage("");

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { email: email.trim().toLowerCase() }
        ])
        .select();

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          setSubscriptionMessage("This email is already subscribed to our newsletter");
          setMessageType("error");
        } else {
          console.error('Newsletter subscription error:', error);
          setSubscriptionMessage("Failed to subscribe. Please try again later.");
          setMessageType("error");
        }
      } else {
        setSubscriptionMessage("Successfully subscribed to our newsletter!");
        setMessageType("success");
        setEmail(""); // Clear the input
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubscriptionMessage("Failed to subscribe. Please try again later.");
      setMessageType("error");
    } finally {
      setIsSubscribing(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubscriptionMessage("");
        setMessageType("");
      }, 5000);
    }
  };

  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>Raul de Azevedo 777, Santo Antonio, Manaus, AM 69000, Brazil</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>
                      <a href="mailto:contact@intellipeaks.com">contact@intellipeaks.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p><a href="tel:+17272199770">+1 (727) 219-9770</a></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Recent Projects</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/project-detailed?id=3">
                      <a>
                        <img src="/img/portfolio/project2/listing3/bg3.jpg" alt="Creative Portfolio" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed?id=3">
                      <a>
                        <p>
                          Creative Portfolio
                        </p>
                      </a>
                    </Link>
                    <Link href="/project-detailed?id=3">
                      <a>
                        <span className="date">3 November 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/project-detailed?id=5">
                      <a>
                        <img src="/img/portfolio/project2/listing5/bg5.jpg" alt="ASI Web Solutions" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/project-detailed?id=5">
                      <a>
                        <p>
                          ASI Web Solutions
                        </p>
                      </a>
                    </Link>
                    <Link href="/project-detailed?id=5">
                      <a>
                        <span className="date">24 December 2022</span>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="subscribe">
                    <form onSubmit={handleNewsletterSubscribe} style={{ display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="email" 
                        placeholder="Subscribe to our newsletter" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubscribing}
                        style={{ flex: 1, marginRight: '10px' }}
                      />
                      <button 
                        type="submit" 
                        disabled={isSubscribing}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: isSubscribing ? 'not-allowed' : 'pointer',
                          opacity: isSubscribing ? 0.6 : 1
                        }}
                      >
                        <span className="subs pe-7s-paper-plane"></span>
                      </button>
                    </form>
                    {subscriptionMessage && (
                      <div 
                        style={{
                          marginTop: '10px',
                          padding: '8px 12px',
                          borderRadius: '4px',
                          fontSize: '14px',
                          color: messageType === 'success' ? '#155724' : '#721c24',
                          backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
                          border: `1px solid ${messageType === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                        }}
                      >
                        {subscriptionMessage}
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <h3 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', marginBottom: '20px' }}>
                  INTELLI PEAK SOLUTIONS
                </h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6', marginBottom: '30px' }}>
                  {`We deliver high-impact software—from web apps to mobile experiences—helping businesses scale and transform their digital presence across Brazil and worldwide.`}
                </p>
              </div>

              <div className="copy-right">
                <p>
                  © {new Date().getFullYear()}, Intelli Peak Solutions. Rau Raul de Azevedo 777, Santo Antonio, Manaus, AM 69000, Brazil
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
