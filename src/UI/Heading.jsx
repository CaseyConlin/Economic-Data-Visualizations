import Typography from "@mui/material/Typography";

export const Heading = (props) => {
  return (
    <Typography
      sx={{ fontSize: 18, fontWeight: 800 }}
      variant="h2"
      component="div"
      display="flex"
      alignContent="start"
      justifyContent="center"
      gutterBottom
    >
      {props.content}
    </Typography>
  );
};
