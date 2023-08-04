import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { cryptoSymbols } from "../coin-data/cryptoSymbols";

export default function ComboBox({
  symbol,
  setSymbol,
}: {
  symbol: string;
  setSymbol: Function;
}) {
  return (
    <>
      <Autocomplete
        inputValue={symbol}
        onInputChange={(event, newInputValue) => {
          setSymbol(newInputValue);
        }}
        disablePortal
        id="combo-box-demo"
        options={cryptoSymbols}
        sx={{ width: 300, marginTop: 0.8, marginBottom: 0.8, marginLeft: 0.5 }}
        renderInput={(params) => (
          <TextField {...params} label="Enter Crypto Symbol" />
        )}
      />
    </>
  );
}
