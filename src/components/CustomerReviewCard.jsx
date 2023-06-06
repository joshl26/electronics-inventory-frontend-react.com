import React from "react";
import classes from "./CustomerReviewCard.module.scss";
import reviewStar from "../svg/reviewstar.svg";
import { Image, Col, Row, Container } from "react-bootstrap";

const CustomerReviewCard = ({ review }) => {
  // console.log(review.author);

  return (
    <div className={classes.review_card_outer_container}>
      <Container className={classes.review_card_inner_container}>
        <Row>
          <div className={classes.spacer}></div>
          <Col md={3}>
            <Image className={classes.image} src={review.authorImage} />
          </Col>
          <Col md={9} className={classes.col_2}>
            <div className={classes.spacer}></div>
            <h4 className={classes.review_author}>{review.author}</h4>
            <p className={classes.review_job_title}>{review.jobTitle}</p>
          </Col>
        </Row>
        <div className={classes.spacer}></div>
        <Image className={classes.review_star} src={reviewStar} />
        <Image src={reviewStar} />
        <Image src={reviewStar} />
        <Image src={reviewStar} />
        <Image src={reviewStar} />
        <div className={classes.spacer}></div>

        <p className={classes.review_body}>{review.reviewBody}</p>

        <p className={classes.review_date}>{review.datePublished}</p>
      </Container>
      <div className={classes.spacer}></div>
    </div>
  );
};

export default CustomerReviewCard;
