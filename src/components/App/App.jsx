import { Container } from "react-bootstrap";
import Introduction from "../Introduction";

const getBreakpointName = () => {
  const screen = window.screen;

  if (screen.width < 576) {
    return "xs";
  }

  if (screen.width >= 1400) {
    return "xxl";
  }

  if (screen.width >= 1200) {
    return "xl";
  }

  if (screen.width >= 992) {
    return "lg";
  }

  if (screen.width >= 768) {
    return "md";
  }

  if (screen.width >= 576) {
    return "sm";
  }
};

export const App = () => {
  return (
    <>
      <Container style={{ paddingTop: "2rem" }}>
        <div>
          <span style={{ marginBottom: "0.25rem" }} className="badge bg-info">
            {getBreakpointName()}
          </span>
        </div>
        <Introduction />
      </Container>
    </>
  );
};
