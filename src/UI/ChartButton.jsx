import Button from "@mui/material/Button";

export const ChartButton = (props) => {
  return (
    <Button
      variant={props.active ? "contained" : "outlined"}
      onClick={props.click}
    >
      {props.content}
    </Button>
  );
};
