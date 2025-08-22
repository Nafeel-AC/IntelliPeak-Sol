import React from "react";
import { useRouter } from "next/router";
import blog1Data from "../../data/blog1.json";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details";
import PageHeader from "../../components/Page-header/page-header";
import Footer from "../../components/Footer/footer";

const BlogDetailsDark = () => {
  const router = useRouter();
  const { id } = router.query;
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  // Get the specific blog post
  const blogPost = blog1Data.find(post => post.id === parseInt(id)) || blog1Data[0];

  // Format date if it's an object
  const formattedDate = typeof blogPost.date === 'object' && blogPost.date.day && blogPost.date.month
    ? `${blogPost.date.day} ${blogPost.date.month} 2022`
    : blogPost.date || "15 Dec 2022";

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title={blogPost.title}
        paragraph={`Published on ${formattedDate} • ${blogPost.readTime} • Exploring the latest trends and insights in technology and AI.`}
      />
      <BlogDetails blogPost={blogPost} />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDetailsDark;
