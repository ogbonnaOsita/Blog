import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab } from "@mui/material";

const ScrollToTop = () => {
  const scrollToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <Fab
        onClick={scrollToTopOfPage}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        color="error"
        aria-label="edit"
      >
        <KeyboardArrowUp />
      </Fab>
    </div>
  );
};

export default ScrollToTop;
