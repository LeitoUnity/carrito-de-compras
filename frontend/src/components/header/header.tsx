import { Button, Grid, TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import "./header.css";

export const HeaderComponent: FunctionComponent<{}> = () => {
    return (
        <Grid
            direction="row"
            justify="space-around"
            alignItems="center"
            container
            item
            spacing={0}
            className={"Header-container"}
        >
            <img
                src={"https://www.lider.cl/images/logo.svg"}
                alt="Lider.cl"
                className={"logo"}
            />
            <TextField id="standard-basic" label="🔎 Search" />
            <Button variant="contained" color="primary">
                🛒 3
            </Button>
        </Grid>
    );
};
