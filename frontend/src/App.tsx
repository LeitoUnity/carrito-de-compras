import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { BodyComponent } from "./components/body/body";
import { HeaderComponent } from "./components/header/header";

const LiderApp: FunctionComponent<{}> = () => {
    return (
        <Grid direction="column" container spacing={0}>
            <HeaderComponent />
            <BodyComponent />
        </Grid>
    );
};

export default LiderApp;
