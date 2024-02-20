import { useRouteError } from "react-router-dom";
import { Grid } from "./Error.styled";

interface ErrorWithStatusText {
  statusText?: string;
  message?: string;
}

const ErrorScreen = () => {
  const error = useRouteError() as ErrorWithStatusText;
  console.error(error);

  return (
    <Grid>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </Grid>
  );
}

export default ErrorScreen;