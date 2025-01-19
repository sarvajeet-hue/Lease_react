import React from 'react'
import blog from '../../assets/blog-img.jpg'
import blog1 from '../../assets/blog-1.jpg'
import blog_image from '../../assets/blog-img.jpg'
import blog_1 from '../../assets/blog-1.jpg'
import { Header } from '../Header'

const Blog = () => {
  return (
    
    <div>
        <section class="blog-banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="contact-heading">
                        <h1>Blogs</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="paddings-top">
    <div class="container">
        <div class="row margin_neces">
            <div class="col-md-8">
                <div class="blog-box">
                    <h4>What is commercial real estate</h4>
                    <span>10 December 2022</span>
                    <div class="row">
                        <div class="col-md-4">
                            <a href="/Commercial"><img class="img-responsive" src={blog} alt=""/></a>
                        </div>
                        <div class="col-md-8">
                            <p>Commercial real estate (CRE) is a property that is used exclusively for business-related purposes or to provide a workspace rather than as a living space, which would instead constitute the residential real estate.</p>
                           <p class="readmore"><a href="/Commercial">Read More</a></p>
                        </div>
                    </div>
                </div>
           
            
                <div class="blog-box">
                    <h4>The things which you should know about Real Estate</h4>
                     <span>14 December 2022</span>
                    <div class="row">
                        <div class="col-md-4">
                            <a href="/RealState"><img class="img-responsive" src={blog1} alt=""/></a>
                        </div>
                        <div class="col-md-8">
                            <p>Real estate is connected to the land, whether natural or man-made—including water, trees, minerals, buildings, homes, and many more. Real estate is known as a part of real property.</p>
                           <p class="readmore"><a href="/RealState">Read More</a></p>
                        </div>
                    </div>
                </div>
          
             </div>
            <div class="col-md-4">
                <div class="latestpost">
                    <h4>Latest Post</h4>
                    <div class="row small_blog">
                        <a href="What-is-commercial-real-estate.aspx">
                            <div class="col-md-4">
                                <img class="img-responsive" src={blog_image} alt=""/>
                            </div>
                            <div class="col-md-8">
                                <strong>What is commercial real estate </strong>
                            </div>
                        </a>
                        <hr/>
                    </div>
                   <div class="row small_blog">
                        <a href="The-things-which-you-should-know-about-Real-Estate">
                            <div class="col-md-4">
                                <img class="img-responsive" src={blog_1} alt=""/>
                            </div>
                            <div class="col-md-8">
                                <strong>The things which you should know about Real Estate</strong>
                            </div>
                        </a>
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Blog
