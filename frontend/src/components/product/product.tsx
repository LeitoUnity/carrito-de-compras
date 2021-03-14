import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

export const ProductComponent: FunctionComponent<{}> = () => {
    return (
        <Grid item>
            <Card>
                <CardContent>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
