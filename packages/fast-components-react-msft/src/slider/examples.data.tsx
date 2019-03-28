import * as React from "react";
import { Slider, SliderProps } from "./index";
import schema from "./slider.schema.json";
import Documentation from "./.tmp/documentation";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";

const examples: ComponentFactoryExample<SliderProps> = {
    name: "Slider",
    component: Slider,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {},
    data: [{}],
};

export default examples;
