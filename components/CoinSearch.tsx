import * as React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import ComboBox from "./complete";

export default function CoinSearch() {
  const [symbol, setSymbol] = useState("");

  const handleSearchClick = () => {
    console.log("The", symbol, "symbol was entered");
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 300,
          marginTop: 0,
          marginBottom: -0.75,
        }}
      >
        <ComboBox symbol={symbol} setSymbol={setSymbol} />
        <IconButton
          type="button"
          sx={{ p: "10px", marginLeft: 0.5 }}
          aria-label="search"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}
