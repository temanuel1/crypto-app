import { Button, Grid, Typography } from "@mui/material";
import IframeSearch from "./IframeSearch";

const CoinLookUp = () => {
  const handleClick = () => {
    window.location.href = "/crypto";
  };
  return (
    <Grid
      container
      position={"absolute"}
      top={0}
      left={0}
      height={"100%"}
      style={{ background: "black" }}
    >
      <Grid marginLeft={1} marginTop={1} style={{}}>
        <Button variant="contained" color="success" onClick={handleClick}>
          Live Crypto Prices
        </Button>
      </Grid>
      <Grid container columns={2} justifyContent="space-evenly" marginY={-1}>
        <Grid
          item
          xs={3}
          display="flex"
          justifyContent="center"
          alignContent="center"
          marginBottom={0}
          container
          spacing={2}
        >
          <Typography
            marginTop={-1}
            marginBottom={2.8}
            fontSize={40}
            color={"white"}
          >
            Coin Lookup
          </Typography>
          <IframeSearch />
        </Grid>
      </Grid>

      <Grid item xs={4} />
      <Grid
        xs={12}
        container
        columns={8}
        justifyContent="center"
        display="flex"
        rowGap={0.5}
        columnGap={2}
      ></Grid>
    </Grid>
  );
};

export default CoinLookUp;
