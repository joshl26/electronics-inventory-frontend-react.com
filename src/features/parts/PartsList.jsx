// import str from "../../mock_data/parts.json";

import { useGetPartsQuery } from "./partsApiSlice";
import { useUpdateUserMutation, selectAllUsers } from "../users/usersApiSlice";
import { useState } from "react";
import Part from "../parts/Part";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PartsList.css";

const PartsList = () => {
  const [partsListView, setPartsListView] = useState("");
  const [partsListStatus, setPartsListStatus] = useState("All");
  const [partsListSort, setPartsListSort] = useState("Part Number");
  const [partsListType, setPartsListType] = useState("All");

  const { username } = useAuth();

  const users = useSelector((state) => selectAllUsers(state));

  let currentUser = users.find((user) => user.username === username);

  // console.log(currentUser.partsListView);

  // console.log(currentUser.partsListView);

  // if (currentUser.partsListView) {
  //   setPartsListView(currentUser.partsListView);
  // }
  const [colorMode] = useState("");

  const [updateUser] = useUpdateUserMutation();

  // useEffect(() => {
  //   async function asyncCall() {
  //     console.log("calling");
  //     const result = await currentUser.partsListView;
  //     setPartsListView(currentUser.partsListView);
  //     console.log(result);
  //     // Expected output: "resolved"
  //   }
  //   return () => {
  //     asyncCall();
  //   };
  // }, [currentUser.partsListView]);

  // const onSaveUserClicked = async (e) => {
  //   await updateUser({
  //     id: currentUser.id,
  //     username,
  //     roles: currentUser.roles,
  //     active: currentUser.active,
  //     colorMode,
  //     partsListView,
  //   });

  //   setPartsListView(e.target.value);
  // };

  // const radios = [
  //   { name: "Table View", value: "Card" },
  //   { name: "Card View", value: "Table" },
  // ];

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

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = parts;

    // const cardContent =
    //   ids?.length &&
    //   ids.map((partId) => <PartCard key={partId} partId={partId} />);

    const tableContent =
      ids?.length && ids.map((partId) => <Part key={partId} partId={partId} />);

    const table = (
      <table className="table table-parts">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th part-number">
              Number
            </th>
            <th scope="col" className="table__th part-name">
              Name
            </th>
            <th scope="col" className="table__th part-type">
              Type
            </th>
            <th scope="col" className="table__th part-description">
              Description
            </th>
            <th scope="col" className="table__th part-qty">
              Qty
            </th>
            <th scope="col" className="table__th part-backqty">
              B/O
            </th>
            <th scope="col" className="table__th note-edit">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );

    content = (
      <>
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
                  className="parts-search-input"
                  placeholder="    Search jobs..."
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
      </>
    );
  }

  return content;
};

export default PartsList;

{
  /* <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-danger"}
              name="radio"
              value={radio.value}
              checked={partsListView === radio.value}
              onChange={(e) => onSaveUserClicked(e)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup> */
}

{
  /* {partsListView === "Card" ? table : cardContent} */
}
