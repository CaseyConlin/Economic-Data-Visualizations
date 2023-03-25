import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const renderLegend = (props) => {
  const { payload } = props;

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "5px", transform: "scale(2.5)" }}
    >
      •
    </Box>
  );

  const nameFormatter = (name) => {
    if (name === "vacantHousingUnits") return (name = "Vacant Units");
    else if (name === "renterOccupiedHousingUnits")
      return (name = "Renter Occupied Units");
    else if (name === "ownerOccupiedHousingUnits")
      return (name = "Owner Occupied Units");
    else if (name === "medianHomeSalePrice") return (name = "Home Sale Price");
    else if (name === "rentCPI") return (name = "Rent CPI");
    else return name;
  };
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
            //  chart icon and type info https://recharts.org/en-US/api/Legend#iconSize //https://recharts.org/en-US/api/Legend#payload
          ))}
        </Grid>
      </Card>
    </Box>
  );
};
