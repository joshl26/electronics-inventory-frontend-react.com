import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { partsApiSlice } from "../parts/partsApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Prefetch = () => {
  useEffect(() => {
    // console.log("subscribing");
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());
    const parts = store.dispatch(partsApiSlice.endpoints.getParts.initiate());

    return () => {
      // console.log("unsubscribing");
      notes.unsubscribe();
      users.unsubscribe();
      parts.unsubscribe();
    };
  }, []);

  return <Outlet />;
};

export default Prefetch;
