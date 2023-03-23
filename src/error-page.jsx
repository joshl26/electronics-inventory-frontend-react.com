import { Link, useRouteError } from "react-router-dom";
import classes from "./error-page.module.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={classes.error_page_container} id="error-page">
      <div className={classes.spacer} />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/dash">GO BACK</Link>
    </div>
  );
}
