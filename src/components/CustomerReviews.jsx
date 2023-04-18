import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./CustomerReviews.scss";
import CustomerReviewCard from "./CustomerReviewCard";
import userReviews from "../mock_data/userReviews.json";

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
        "Maintaining JIT inventory levels has been a challenge tarditionally. All of that changed when we purhcased Electronics Inventory. We have seen a cost reduction of $25,000 across our worldwide lcoations.",
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
        "Having used numerous electronics inventory management systems over my many years in the trade. Overall revenue has increased 50% over a period of one year. Highly reccomended!",
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
        "Electronics Inventory has allowed our business to save 35% time in searching for unused inventory.",
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
        "Electronics Inventory has allowed our business to save 35% time in searching for unused inventory.",
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
        "Electronics Inventory has allowed our business to save 35% time in searching for unused inventory.",
      reviewRating: {
        bestRating: "5",
        ratingValue: "5",
        worstRating: "1",
      },
    },
  ];

  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="slider_container">
      <h1 className="slider_header">
        Your professional inventory management platform
      </h1>
      <h3 className="slider_header">
        See what people are saying about Electronics Inventory Management and
        Control Software.
      </h3>
      <Slide responsive={responsiveSettings}>
        {data.map((review, index) => (
          <div
            style={{ backgroundColor: "#2A9D8F" }}
            className="each-slide-effect"
          >
            <CustomerReviewCard review={review} />
          </div>
        ))}
      </Slide>

      {/* <CustomerReviewCard review={data[0]} /> */}
    </div>
  );
};

export default CustomerReviews;
