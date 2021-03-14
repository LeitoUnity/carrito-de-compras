import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { FilterComponent } from "../filter/filter";
import { ProductComponent } from "../product/product";

export const BodyComponent: FunctionComponent<{}> = () => {
    return (
        <Grid
            direction="row"
            justify="space-evenly"
            alignItems="center"
            container
            item
            spacing={3}
        >
            <Grid
                direction="column"
                alignItems="center"
                item
                xs={3}
                spacing={3}
            >
                <FilterComponent min={0} max={100000} numberOfSegments={5} />
            </Grid>
            <Grid
                direction="row"
                alignItems="center"
                container
                item
                xs={9}
                spacing={3}
            >
                <ProductComponent />
                <ProductComponent />
                <ProductComponent />
            </Grid>
        </Grid>
    );
};
