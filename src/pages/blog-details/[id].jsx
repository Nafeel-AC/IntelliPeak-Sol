import React from "react";
import Head from "next/head";
import BlogDetails from "../../components/Blog-details/blog-details";
import blogData from "../../data/blog1.json";
import Layout from "../../layouts/Dark";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar.full-menu";
import PageHeader from "../../components/Page-header/page-header";

export async function getStaticPaths() {
  // Generate paths for all blog posts
  const paths = blogData.map((blog) => ({
    params: { id: blog.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Find the blog post by id
  const blogPost = blogData.find((blog) => blog.id.toString() === params.id);
  return { props: { blogPost } };
}

const BlogDetailsPage = ({ blogPost }) => {
  return (
    <>
      <Head>
        <title>{blogPost.title} | PixalCraft</title>
        <meta name="description" content={blogPost.content.substring(0, 160)} />
      </Head>
      <Layout>
        <NavbarFullMenu />
        <PageHeader
          title={blogPost.title}
          paragraph={`${blogPost.date.day} ${blogPost.date.month} 2025 | ${blogPost.author}`}
        />
        <BlogDetails blogPost={blogPost} />
      </Layout>
    </>
  );
};

export default BlogDetailsPage;
