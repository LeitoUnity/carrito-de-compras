import React, { FunctionComponent } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Slider,
  Typography
} from "@material-ui/core";
import * as _ from "lodash";

interface FilterProps {
  max: number;
  min: number;
  numberOfSegments: number;
}

export const FilterComponent: FunctionComponent<FilterProps> = (
  props: FilterProps
) => {
  const { max, min, numberOfSegments } = props;
  const marks = [];
  const factor = 1 / numberOfSegments;
  const defaultMinimumValue = 0;
  const defaultMaximumValue = 100000;

  for (let i = factor; i < 1; i += factor) {
    const value = Math.round(max * i);

    marks.push({
      value: value,
      label: value + "$"
    });
  }

  const [value, setValue] = React.useState<number[]>([
    _.get(_.first(marks), "value", defaultMinimumValue),
    _.get(_.last(marks), "value", defaultMaximumValue)
  ]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="body2" component="p">
          Filtro de Precio
        </Typography>
      </CardContent>
      <CardActions>
        <Slider
          value={value}
          onChange={handleChange}
          max={max}
          min={min}
          marks={marks}
        />
      </CardActions>
    </Card>
  );
};
