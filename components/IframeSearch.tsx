import * as React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import { useState } from "react";
import { coinLinks } from "../coin-data/coinLinks";
import { coinSymbol } from "../coin-data/coinSymbol";
import ComboBox from "./complete";
import { Box } from "@mui/material";
import styles from "../styles/Home.module.css";

export default function IframeSearch() {
  const [imgInput, setImgInput] = useState("");
  const [symbol, setSymbol] = useState("");
  const [iFrame, setIFrame] = useState("");

  const handleSearchClick = () => {
    console.log("The", symbol, "symbol was entered");
    setIFrame(
      `https://www.coindesk.com/price/${coinSymbol[symbol.toLowerCase()]}/`
    );
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
      <Paper style={{ marginTop: 15 }}>
        <Box
          borderRadius={"25px"}
          bgcolor="white"
          width={800}
          height={400}
          display={"flex"}
        >
          <div className={styles.formcontainer}>
            <iframe
              style={{
                marginLeft: 0,
                width: 800,
                height: 400,
                background: "black",
                border: "black",
              }}
              src={iFrame}
              height={500}
            ></iframe>
          </div>
        </Box>
      </Paper>
    </>
  );
}
