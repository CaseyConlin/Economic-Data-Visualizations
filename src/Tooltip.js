import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const AutoTooltip = ({ active, payload, label }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "5px", transform: "scale(2.5)" }}
    >
      •
    </Box>
  );
  if (active && payload && payload.length) {
    //Modify date format for tooltip
    const date = new Date(label);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][date.getMonth()];
    const labelDate = month + " " + date.getFullYear();

    const nameFormatter = (name) => {
      if (name === "vacantHousingUnits") return (name = "Vacant Units");
      else if (name === "renterOccupiedHousingUnits")
        return (name = "Renter Occupied Units");
      else if (name === "ownerOccupiedHousingUnits")
        return (name = "Owner Occupied Units");
      else if (name === "medianHomeSalePrice")
        return (name = "Home Sale Price");
      else if (name === "rentCPI") return (name = "Rent CPI");
      else return name;
    };

    const valueFormatter = (value) => {
      if (value !== ".") {
        return (value = new Intl.NumberFormat("en").format(value));
      }
      return (value = "Unavailable");
    };
    return (
      <Box sx={{ mx: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 15, fontWeight: 800 }}
              variant="h5"
              component="div"
              gutterBottom
            >
              {`${labelDate}`}
            </Typography>
            <Typography sx={{ mb: 1 }} component="div">
              {payload.map((pld) => (
                <Typography
                  component="div"
                  key={pld.name}
                  variant="body2"
                  sx={{ pb: 0.5 }}
                >
                  <div key={pld.name + "name"}>
                    <span style={{ color: pld.stroke || pld.fill }}>
                      {bull}
                    </span>{" "}
                    {nameFormatter(pld.name)} - {valueFormatter(pld.value)}
                  </div>
                </Typography>
              ))}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return null;
};
