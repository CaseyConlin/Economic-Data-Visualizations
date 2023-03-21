import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const AutoTooltip = ({ active, payload, label }) => {
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
    var labelDate = month + " " + date.getFullYear();

    const valueFormatter = (value) => {
      if (value !== ".") {
        return (value = new Intl.NumberFormat("en").format(value));
      }
      return (value = "Not Available for this time period.");
    };
    return (
      <Box sx={{ minWidth: 275, mx: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 18, fontWeight: 800 }}
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
                  <div key={pld.name + "name"} style={{ color: pld.stroke }}>
                    {pld.name}
                  </div>
                  <div key={pld.name + "value"} style={{ color: pld.stroke }}>
                    {valueFormatter(pld.value)}
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
