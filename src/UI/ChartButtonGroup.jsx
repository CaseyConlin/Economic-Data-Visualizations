import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { ChartButton } from "./ChartButton";

export const ChartButtonGroup = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {props.buttons.map((button) => (
          <ChartButton
            content={button.content}
            click={button.click}
            active={button.clicked}
          />
        ))}
      </ButtonGroup>
    </Box>
  );
};
