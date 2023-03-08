import { Backdrop } from "@mui/material";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleToggle();
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <div className="progress"></div>
      </Backdrop>
    </div>
  );
};

export default Loader;
