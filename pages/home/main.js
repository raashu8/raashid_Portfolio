import { Button } from "@mui/material";
import React, { useState } from "react";

const Index = () => {
  const [btnValue, setBtnValue] = useState(true);

  // console.log(Moder)

  return (
    <div>
      HELL
      {btnValue ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBtnValue(false);
            sessionStorage.setItem("Mode", "Light");
            console.log("NEW");
          }}
        >
          Light Mode
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setBtnValue(true);
            sessionStorage.setItem("Mode", "Dark");
          }}
        >
          Dark Mode
        </Button>
      )}
      {/* <Loader /> */}
    </div>
  );
};

export default Index;
