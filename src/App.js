import "./App.css";
import { useState } from "react";

import { HousingChart } from "./Visualizations/HousingChart";
import { AutoChart } from "./Visualizations/AutoChart";

import Grid from "@mui/material/Grid";

const App = () => {
  const [showUsedCars, setShowUsedCars] = useState(false);
  const [showNewCars, setShowNewCars] = useState(false);
  const [showConsumerAutoFinance, setShowConsumerAutoFinance] = useState(false);
  const [showHousingRenter, setShowHousingRenter] = useState(false);
  const [showHousingOwner, setShowHousingOwner] = useState(true);

  const renterClickHandler = () => {
    setShowHousingRenter(!showHousingRenter);
    setShowHousingOwner(false);
  };

  const ownerClickHandler = () => {
    setShowHousingOwner(!showHousingOwner);
    setShowHousingRenter(false);
  };

  const showUsedCarsClickHandler = () => {
    setShowUsedCars(!showUsedCars);
  };

  const showNewCarsClickHandler = () => {
    setShowNewCars(!showNewCars);
  };

  const showConsumerAutoFinanceClickHandler = () => {
    setShowConsumerAutoFinance(!showConsumerAutoFinance);
  };

  return (
    <Grid container maxWidth="xlg" rowSpacing={1}>
      <Grid
        item
        md={6}
        xs={12}
        sx={{
          mt: 6,
          mb: 5,
        }}
      >
        <HousingChart
          showHousingRenter={showHousingRenter}
          renterClickHandler={renterClickHandler}
          showHousingOwner={showHousingOwner}
          ownerClickHandler={ownerClickHandler}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          mt: 6,
        }}
      >
        <AutoChart
          showUsedCars={showUsedCars}
          showNewCars={showNewCars}
          showConsumerAutoFinance={showConsumerAutoFinance}
          showUsedCarsClickHandler={showUsedCarsClickHandler}
          showNewCarsClickHandler={showNewCarsClickHandler}
          showConsumerAutoFinanceClickHandler={
            showConsumerAutoFinanceClickHandler
          }
        />
      </Grid>
    </Grid>
  );
};

export default App;
