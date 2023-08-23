import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";
import OutletLoadingPage from "../../components/OutletLoadingPage";
import useAuth from "../../hooks/useAuth";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import "./NotesList.css";
import { Link } from "react-router-dom";

const NotesList = () => {
  const { username, isManager, isAdmin } = useAuth();

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery("notelist", {
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
    const { ids, entities } = notes;

    let filteredIds;

    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (noteId) => entities[noteId].username === username
      );
    }

    const tableContent =
      ids?.length &&
      filteredIds.map((noteId) => <Note key={noteId} noteId={noteId} />);

    const table = (
      <table className="table table-notes">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th note-status">
              Note Status
            </th>
            <th scope="col" className="table__th note-created">
              Date Created
            </th>
            <th scope="col" className="table__th note-updated">
              Date Updated
            </th>
            <th scope="col" className="table__th note-title">
              Title
            </th>
            <th scope="col" className="table__th note-user">
              User
            </th>
            <th scope="col" className="table__th note-description">
              View Note
            </th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    );

    // console.log(filteredIds);
    // console.log(notes);

    content = (
      <>
        <Row>
          <Col md={10}>
            <h1>Notes List</h1>
          </Col>
          <Col style={{ textAlign: "right" }} md={2}>
            <Button className="btn-new-part">
              <Link className="btn-text" to="/dash/notes/new">
                Add New Note
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
                  <p style={{ lineHeight: "0" }}>Note Status</p>
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
                      <Dropdown.Item>Open</Dropdown.Item>
                      <Dropdown.Item>Completed</Dropdown.Item>
                      <Dropdown.Item>All</Dropdown.Item>
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
                  <p style={{ lineHeight: "0" }}>Type</p>
                </Row>
                <Row>
                  <Dropdown>
                    <Dropdown.Toggle
                      className="parts-status-dropdown"
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className="parts-status-dropdown-menu">
                      <Dropdown.Item href="#/action-1">Resistor</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Capacitor</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">All</Dropdown.Item>
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

export default NotesList;

{
  /* <table className="table table--notes">
<thead className="table__thead">
  <tr>
    <th scope="col" className="table__th note__status">
      Username
    </th>
    <th scope="col" className="table__th note__created">
      Created
    </th>
    <th scope="col" className="table__th note__updated">
      Updated
    </th>
    <th scope="col" className="table__th note__title">
      Title
    </th>
    <th scope="col" className="table__th note__username">
      Owner
    </th>
    <th scope="col" className="table__th note__edit">
      Edit
    </th>
  </tr>
</thead>
<tbody>{tableContent}</tbody>
</table> */
}
