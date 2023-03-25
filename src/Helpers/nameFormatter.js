export const nameFormatter = (name) => {
  if (name === "vacantHousingUnits") return (name = "Vacant Units");
  else if (name === "renterOccupiedHousingUnits")
    return (name = "Renter Occupied Units");
  else if (name === "ownerOccupiedHousingUnits")
    return (name = "Owner Occupied Units");
  else if (name === "medianHomeSalePrice") return (name = "Home Sale Price");
  else if (name === "rentCPI") return (name = "Rent CPI");
  else return name;
};
