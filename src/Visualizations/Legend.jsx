import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { nameFormatter } from "../Helpers/nameFormatter";
import { bull } from "../UI/Bull";

export const renderLegend = (props) => {
  const { payload } = props;

  return (
    <Box
      key={payload}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "86%",
        mx: "auto",
        marginBottom: "100px",
      }}
    >
      <Card variant="outlined" sx={{ width: "95%", mx: "auto" }}>
        <Grid
          container
          rowSpacing={0.75}
          columnSpacing={2}
          sx={{ mb: 1, justifyContent: "center", justifyItems: "center" }}
        >
          {payload.map((pld) => (
            <Grid
              item
              key={pld.value}
              sx={{
                pb: 0,
                mb: 0,
                fontSize: 14,
                textAlign: "left",
              }}
            >
              <Typography key={pld.value + "value"}>
                <span style={{ color: pld.payload.stroke || pld.payload.fill }}>
                  {bull}
                </span>{" "}
                {nameFormatter(pld.value)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>
    </Box>
  );
};
