import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./CustomerReviews.scss";
import CustomerReviewCard from "./CustomerReviewCard";
import { Container } from "react-bootstrap";

const CustomerReviews = () => {
  const data = [
    {
      _id: 1,
      author: "Fahad Pace",
      jobTitle: "Electrical Engineer at Microverse",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826980/ElectronicsInventory/user_review_images/review_1_h0cruy.png",
      datePublished: "April 24, 2023",
      reviewBody:
        "Electronics Inventory has allowed our business to save 35% time in searching for unused inventory.",
      reviewRating: {
        bestRating: "5",
        ratingValue: "4",
        worstRating: "1",
      },
    },
    {
      _id: 2,
      author: "Safwan Higgins",
      jobTitle: "Purchasing Manager at TrendLogic",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826980/ElectronicsInventory/user_review_images/review_2_vd88wm.png",
      datePublished: "December 2, 2022",
      reviewBody:
        "Maintaining JIT inventory levels has been a challenge. Using Ei we saw a cost reduction of $25,000 across our worldwide locations.",
      reviewRating: {
        bestRating: "5",
        ratingValue: "5",
        worstRating: "1",
      },
    },
    {
      _id: 3,
      author: "Marshall Harper",
      jobTitle: "Senior Electrical Engineer",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826980/ElectronicsInventory/user_review_images/review_6_mvavra.png",
      datePublished: "Jan 10, 2023",
      reviewBody:
        "An excellent app that simplifies inventory management - a must-have for industry professionals!",
      reviewRating: {
        bestRating: "5",
        ratingValue: "4",
        worstRating: "1",
      },
    },
    {
      _id: 4,
      author: "Flora Burch",
      jobTitle: "Supply Chain Specialist",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826981/ElectronicsInventory/user_review_images/review_5_zptkzp.png",
      datePublished: "February 16, 2023",
      reviewBody:
        "This inventory app is incredibly user-friendly and efficient - a must-have for any business!",
      reviewRating: {
        bestRating: "5",
        ratingValue: "4",
        worstRating: "1",
      },
    },
    {
      _id: 5,
      author: "Grayson Andersen",
      jobTitle: "Advanced Robotics Engineer",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826980/ElectronicsInventory/user_review_images/review_4_cbbidr.png",
      datePublished: "March 21, 2023",
      reviewBody:
        "This app is great for managing inventory - it's user-friendly and effective!",
      reviewRating: {
        bestRating: "5",
        ratingValue: "5",
        worstRating: "1",
      },
    },
    {
      _id: 6,
      author: "Luc Monroe",
      jobTitle: "Embedded Electronics Expert",
      authorImage:
        "https://res.cloudinary.com/dv6keahg3/image/upload/v1681826980/ElectronicsInventory/user_review_images/review_3_ntncyb.png",
      datePublished: "November 5, 2022",
      reviewBody:
        "This app is great! It's easy to use and makes inventory related tasks simpler.",
      reviewRating: {
        bestRating: "5",
        ratingValue: "5",
        worstRating: "1",
      },
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="slider_container">
      <Container>
        <div className="spacer_small"></div>
        <h1 className="slider_header_1">
          Your professional inventory management platform
        </h1>
        <h3 className="slider_header_2">
          See what people are saying about Electronics Inventory Management and
          Control Software.
        </h3>
      </Container>
      <div className="spacer_small"></div>
      <Slide autoplay={true} responsive={responsiveSettings}>
        {data.map((review, index) => (
          <div
            key={index}
            style={{ backgroundColor: "rgba($color: #2a9d8f, $alpha: 0.9)" }}
            className="each-slide-effect"
          >
            <CustomerReviewCard review={review} />
          </div>
        ))}
      </Slide>
      <div className="spacer_small"></div>
      <div className="spacer_small"></div>
    </div>
  );
};

export default CustomerReviews;
