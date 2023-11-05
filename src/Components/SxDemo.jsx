import { Button } from "@mui/material";
import React from "react";

const SxDemo = () => {
    const test = true;
  return (
    <div>
      <Button
        variant="contained"
        sx={[{
          width: "200px",
          p: 2,
          border: 5,
          borderColor: "secondary.main",
          "&.MuiButton-root":{
            height : "100px"
          }
        },
        test && {
            border : 10,
            borderColor : 'primary.main'

        }
    ]
    }
      >
        Click me
      </Button>
      <Button variant="contained">Click me</Button>
    </div>
  );
};

export default SxDemo;
