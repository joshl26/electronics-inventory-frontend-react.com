// import str from "../../mock_data/parts.json";

import { useGetPartsQuery } from "./partsApiSlice";
import { useState } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import OutletLoadingPage from "../../components/OutletLoadingPage";
import Part from "../parts/Part";

import "./PartsList.css";

const PartsList = () => {
  const [partsListStatus, setPartsListStatus] = useState("All");
  const [partsListSort, setPartsListSort] = useState("Part Number");
  const [partsListType, setPartsListType] = useState("All");

  //TODO Determnine why the first argument in useGetPartsQuery needs to be undefined here
  const {
    data: parts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPartsQuery(undefined, {
    pollingInterval: 1500000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <OutletLoadingPage />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = parts;

    const tableContent =
      ids?.length && ids.map((partId) => <Part key={partId} partId={partId} />);

    const table = (
      <table className="table table-parts">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="part-number">
              Number
            </th>
            <th scope="col" className="part-name">
              Name
            </th>
            <th scope="col" className="part-type">
              Type
            </th>
            <th scope="col" className="part-description">
              Description
            </th>
            <th scope="col" className="part-qty">
              Qty
            </th>
            <th scope="col" className="part-backqty">
              B/O
            </th>
            <th scope="col" className="note-edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );

    content = (
      <section>
        <Row>
          <Col md={10}>
            <h1>Parts Inventory</h1>
          </Col>
          <Col style={{ textAlign: "right" }} md={2}>
            <Button className="btn-new-part">
              <Link className="btn-text" to="/dash/parts/new">
                Add New Part
              </Link>
            </Button>
          </Col>
        </Row>
        <div className="vh3-spacer"></div>
        <div className="parts-container">
          <div className="parts-search-bar">
            <Row>
              <div className="vh2-spacer"></div>
              <Col style={{ textAlign: "center" }}>
                <input
                  name="searchParts"
                  className="parts-search-input"
                  placeholder="    Search parts..."
                ></input>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Row style={{ textAlign: "left" }}>
                  <p style={{ lineHeight: "0" }}>Status</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    >
                      {partsListStatus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item
                        onClick={() => setPartsListStatus("In Stock")}
                      >
                        In Stock
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setPartsListStatus("Out of Stock")}
                      >
                        Out of Stock
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setPartsListStatus("All")}>
                        All
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Row style={{ textAlign: "left" }}>
                  <p style={{ lineHeight: "0" }}>Sort</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    >
                      {partsListSort}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item
                        onClick={() => setPartsListSort("Part Number")}
                        href="#/action-1"
                      >
                        Part Number
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setPartsListSort("Qty")}
                        href="#/action-2"
                      >
                        Qty
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setPartsListSort("Backorder Qty")}
                        href="#/action-3"
                      >
                        Backorder Qty
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Row style={{ textAlign: "left" }}>
                  <p style={{ lineHeight: "0" }}>Type</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    >
                      {partsListType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item
                        onClick={() => setPartsListType("Resistor")}
                        href="#/action-1"
                      >
                        Resistor
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setPartsListType("Capacitor")}
                        href="#/action-2"
                      >
                        Capacitor
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setPartsListType("All")}
                        href="#/action-3"
                      >
                        All
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              </Col>
            </Row>
          </div>
          {table}
        </div>
      </section>
    );
  }

  return content;
};

export default PartsList;
