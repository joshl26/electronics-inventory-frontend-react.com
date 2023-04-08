import React from "react";
import classes from "./PartCard.module.scss";
import { useSelector } from "react-redux";
import { selectPartById } from "../features/parts/partsApiSlice";
import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PartCard = ({ partId }) => {
  // console.log(partId);
  const part = useSelector((state) => selectPartById(state, partId));

  // console.log(part);

  const [expand, setExpand] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/dash/parts/${part._id}`);
  };

  const expandCard = (e) => {
    e.preventDefault();
    setExpand(!expand);
  };

  const imageContent = part.images.map((image) => (
    <Col key={image._id}>
      <div key={image._id}>
        <a href={image.url}>
          <img className={classes.partcard_image} src={image.url} />
        </a>
      </div>
    </Col>
  ));

  const shortDescription =
    part.description.split(/\s+/).slice(0, 34).join(" ") + "...";

  return (
    <div key={part._id}>
      <div className={classes.partcard_container}>
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
                    <a onClick={(e) => handleEdit(e)} href="/">
                      {part.name}
                    </a>
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

                {part.images?.length !== 0 ? (
                  [imageContent]
                ) : (
                  <>
                    <Col>
                      <p className={classes.text}>No Images</p>
                    </Col>
                    <Col>
                      <p className={classes.text}>No Images</p>
                    </Col>
                  </>
                )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className={`classes.partdescription_text ${classes.text}`}>
                {expand ? part.description : shortDescription}
              </h3>
            </Col>
          </Row>
          {expand ? (
            <>
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
                    {part.partLocation}
                  </h3>
                </Col>
                <Col>
                  <h2 className={`classes.partpackage_header ${classes.text}`}>
                    Package Type
                  </h2>
                  <h3 className={`classes.partpackage_text ${classes.text}`}>
                    {part.partPackage}
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
                {part.vendor ? (
                  <Col>
                    <h2
                      className={`classes.partupdated_header ${classes.text}`}
                    >
                      Vendor
                    </h2>
                    <h3 className={`classes.partupdated_text ${classes.text}`}>
                      {part.vendor.vendorName}
                    </h3>
                  </Col>
                ) : (
                  ""
                )}
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
                    {part.updatedBy}
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
                    {part.user}
                  </h3>
                </Col>
              </Row>
            </>
          ) : (
            ""
          )}

          <Row>
            <div className={classes.anchor_expand}>
              {!expand ? (
                <a href="/" onClick={(e) => expandCard(e)}>
                  Expand Part Info
                </a>
              ) : (
                <a
                  className={classes.anchor_collapse}
                  href="/"
                  onClick={(e) => expandCard(e)}
                >
                  Collapse Part Info
                </a>
              )}
            </div>
            <div>
              <a
                className={classes.anchor_openpart}
                href="/"
                onClick={(e) => handleEdit(e)}
              >
                Edit Part
              </a>
            </div>
          </Row>
        </Container>
      </div>
      <div className={classes.spacer}></div>
    </div>
  );
};

export default PartCard;
