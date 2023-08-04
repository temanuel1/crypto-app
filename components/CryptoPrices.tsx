import { useEffect, useState } from "react";
import CoinCard from "./CoinCard";
import { Grid, Typography, Paper, Button } from "@mui/material";

const CryptoPrices = () => {
  const [coins, setCoins] = useState<
    {
      changePercent24Hr: string;
      priceUsd: string;
    }[]
  >([]);

  const getAllCoins = async () => {
    const coinRes = await fetch(`/api/CoinCap/coinapi`);
    const tempCoinData = await coinRes.json();
    const coinData = tempCoinData.data;
    setCoins(coinData);
  };

  useEffect(() => {
    getAllCoins();
  }, []);

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Grid
      container
      position={"absolute"}
      height={"100%"}
      top={0}
      left={0}
      style={{ background: "black" }}
    >
      <Grid item>
        <Grid item marginLeft={1} marginTop={1} style={{}}>
          <Button variant="contained" color="success" onClick={handleClick}>
            Search Page
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
              marginTop={7}
              marginBottom={0.75}
              fontSize={40}
              color={"white"}
            >
              Live Crypto Info
            </Typography>
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
          columnGap={0.5}
          marginTop={4}
        >
          {coins.map((coin) => {
            const priceUsd = parseFloat(coin.priceUsd).toFixed(2);
            const color = Number(coin.changePercent24Hr) < 0 ? "red" : "green";
            return (
              <CoinCard
                coin={{
                  ...coin,
                  priceUsd,
                  color,
                }}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CryptoPrices;
