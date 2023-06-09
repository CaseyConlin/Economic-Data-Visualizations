import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { nameFormatter } from "../Helpers/nameFormatter";
import { bull } from "../UI/Bull";

export const ChartTooltip = ({ active, payload, label }) => {
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
