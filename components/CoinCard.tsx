import { useState } from "react";
import { Coin } from "../stores/types/Coin";
import {
  Typography,
  Card,
  CardContent,
  IconButtonProps,
  styled,
  IconButton,
  Collapse,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CoinCard = ({ coin }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: "250px",
        backgroundColor: "lightgrey",
        height: "100%",
        width: "40%",
        objectFit: "cover",
      }}
    >
      <CardContent style={{ textAlign: "center", justifyContent: "center" }}>
        <Typography>
          {coin.name} ({coin.symbol})
        </Typography>
        <Typography>${coin.priceUsd} USD</Typography>
        <Typography fontWeight="bold" style={{ color: coin.color }}>
          {parseFloat(coin.changePercent24Hr).toFixed(2)}% (24 hours)
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ marginBottom: -30, marginTop: -10 }} />
        </ExpandMore>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography marginTop={-2}>
              Market Cap: $
              {parseFloat(coin.marketCapUsd)
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              USD
            </Typography>
            <Typography marginTop={1}>
              Trade Volume (24 hours): $
              {parseFloat(coin.volumeUsd24Hr)
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              USD
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
