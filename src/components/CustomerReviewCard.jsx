import React from "react";
import classes from "./CustomerReviewCard.module.scss";
import reviewStar from "../svg/reviewstar.svg";
import { Image } from "react-bootstrap";

const CustomerReviewCard = ({ review }) => {
  console.log(review.author);

  return (
    <div className={classes.review_card_container}>
      <div>
        <Image className={classes.image} src={review.authorImage} />
      </div>
      <h4 className={classes.review_author}>{review.author}</h4>
      <p className={classes.review_body}>{review.reviewBody}</p>
      <Image src={reviewStar} />
      <Image src={reviewStar} />
      <Image src={reviewStar} />
      <Image src={reviewStar} />
      <Image src={reviewStar} />
      <p className={classes.review_date}>{review.datePublished}</p>
    </div>
  );
};

export default CustomerReviewCard;
