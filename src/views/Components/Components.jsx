import React from "react";
import { Paper } from "@material-ui/core";
import Tabs from "components/Tabs/Tabs";
import Buttons from "./Buttons";
import FilledTextFields from "./FilledTextFields";
import OutlinedTextFields from "./OutlinedTextFields";
import TextFields from "./TextFields";
function Components() {

  return <div style={{ paddingBottom:16 }}>
    <Paper>
      <Tabs tabs={
        [
          {
            label: "Button",
            component: <Buttons />
          },
          {
            label: "Textfield",
            component: <TextFields />
          },
          {
            label: "Outline Textfield",
            component: <OutlinedTextFields />
          },
          {
            label: "Filled Textfield",
            component: <FilledTextFields />
          },

        
        ]
      } />
    </Paper>
  </div>
}

export default Components;