import React from "react";
import classes from "./PartCard.module.scss";
import { useSelector } from "react-redux";
import { selectPartById } from "../features/parts/partsApiSlice";
import { Row, Col, Container } from "react-bootstrap";

const PartCard = ({ partId }) => {
  const part = useSelector((state) => selectPartById(state, partId));

  // const partImages = part.images.map((image, idx) => {
  //   return (
  //     <div key={image._id}>
  //       <a href={image.url}>
  //         <img className={classes.partcard_image} src={image.url} />
  //       </a>
  //     </div>
  //   );
  // });

  const shortDescription =
    part.description.split(/\s+/).slice(0, 34).join(" ") + "...";

  return (
    <div key={part._id} className={classes.partcard_container}>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <h2 className={`classes.partname_header ${classes.text}`}>
                  Part Name:
                </h2>
              </Col>
              <Col>
                <h2 className={`classes.partname_text ${classes.text}`}>
                  {part.name}
                </h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2 className={`classes.parttype_header ${classes.text}`}>
                  Part Number:
                </h2>
              </Col>
              <Col>
                <h2 className={`classes.parttype_text ${classes.text}`}>
                  {part.partNumber}
                </h2>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <h2 className={`classes.parttype_header ${classes.text}`}>
                  Part Type:
                </h2>
                <h2 className={`classes.parttype_text ${classes.text}`}>
                  {part.partType}
                </h2>
              </Col>
              <Col>
                <div key={part.images[0]._id}>
                  <a href={part.images[0].url}>
                    <img
                      className={classes.partcard_image}
                      src={part.images[0].url}
                    />
                  </a>
                </div>
              </Col>
              <Col>
                <div key={part.images[1]._id}>
                  <a href={part.images[1].url}>
                    <img
                      className={classes.partcard_image}
                      src={part.images[1].url}
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className={`classes.partdescription_text ${classes.text}`}>
              {/* {shortDescription} */}
              {part.description}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={`classes.partqty_header ${classes.text}`}>
              Stock Qty
            </h2>
            <h3 className={`classes.partqty_text ${classes.text}`}>
              {part.qty}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partqty_header ${classes.text}`}>
              Backorder Qty
            </h2>
            <h3 className={`classes.partqty_text ${classes.text}`}>
              {part.backOrder}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partlocation_header ${classes.text}`}>
              Location
            </h2>
            <h3 className={`classes.partlocation_text ${classes.text}`}>
              {part.location}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partpackage_header ${classes.text}`}>
              Package Type
            </h2>
            <h3 className={`classes.partpackage_text ${classes.text}`}>
              {part.package}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              S/N
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.serialNumber}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Lot ID
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.lotId}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Mfg. Date
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.mfgDate}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Manufacturer
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.manufacturer}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Vendor
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.vendor.vendorName}
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Last Updated
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.updatedAt}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partupdated_header ${classes.text}`}>
              Updated By
            </h2>
            <h3 className={`classes.partupdated_text ${classes.text}`}>
              {part.username}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partcreated_header ${classes.text}`}>
              Date Created
            </h2>
            <h3 className={`classes.partcreated_text ${classes.text}`}>
              {part.createdAt}
            </h3>
          </Col>
          <Col>
            <h2 className={`classes.partcreator_header ${classes.text}`}>
              Creator
            </h2>
            <h3 className={`classes.partcreator_text ${classes.text}`}>
              {part.username}
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PartCard;
