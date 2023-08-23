import { useGetUsersQuery } from "./usersApiSlice";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import OutletLoadingPage from "../../components/OutletLoadingPage";
import User from "./User";
import "./UsersList.css";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("userslist", {
    pollingInterval: 1500000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <OutletLoadingPage />;

  if (isError) {
    content = (
      <p className={isError ? "errmsg" : "offscreen"}>{error?.data?.message}</p>
    );
  }

  if (isSuccess) {
    const { ids } = users;

    const tableContent =
      ids?.length && ids.map((userId) => <User key={userId} userId={userId} />);

    const table = (
      <table className="table table-notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="user-status">
              Username
            </th>
            <th scope="col" className="user-created">
              Assigned Role(s)
            </th>
            <th scope="col" className="user-updated">
              Edit User
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
            <h1>Users List</h1>
          </Col>
          <Col style={{ textAlign: "right" }} md={2}>
            <Button className="btn-new-part">
              <Link className="btn-text" to="/dash/users/new">
                Add New User
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
                  placeholder="    Search users..."
                ></input>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Row style={{ textAlign: "left" }}>
                  <p style={{ lineHeight: "0" }}>Role</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    >
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item>Employee</Dropdown.Item>
                      <Dropdown.Item>Manager</Dropdown.Item>
                      <Dropdown.Item>Admin</Dropdown.Item>
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
                      All
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item href="#/action-1">
                        Date Created
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Created By
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Description
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              </Col>
              <Col style={{ textAlign: "center" }}>
                <Row style={{ textAlign: "left" }}>
                  <p style={{ lineHeight: "0" }}>Date Created</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item href="#/action-1"></Dropdown.Item>
                      <Dropdown.Item href="#/action-2"></Dropdown.Item>
                      <Dropdown.Item href="#/action-3"></Dropdown.Item>
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

export default UsersList;
