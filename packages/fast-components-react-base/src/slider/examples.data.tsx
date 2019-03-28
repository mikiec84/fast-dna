import * as React from "react";
import Slider, {
    SliderHandledProps,
    SliderManagedClasses,
    SliderUnhandledProps,
} from "./slider";
import schema from "./slider.schema.json";
import Documentation from "./.tmp/documentation";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";

const managedClasses: SliderManagedClasses = {
    managedClasses: {
        slider: "slider",
        slider__orientationHorizontal: "slider__orientationHorizontal",
        slider__orientationVertical: "slider__orientationVertical",
        slider_layoutPanel: "slider_layoutPanel",
        slider_thumb: "slider_thumb",
        slider_thumb__orientationHorizontal: "slider_thumb__orientationHorizontal",
        slider_thumb__orientationVertical: "slider_thumb__orientationVertical",
        slider__thumbUpper: "slider__thumbUpper",
        slider__thumbLower: "slider__thumbLower",
        slider_barBack: "slider_barBack",
        slider_barFront: "slider_barFront",
        slider_barFront__orientationHorizontal: "slider__orientationHorizontal",
        slider_barFront__orientationVertical: "slider__orientationVertical",
        slider__disabled: "slider__disabled",
    },
};

const examples: ComponentFactoryExample<SliderHandledProps> = {
    name: "Slider",
    component: Slider,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        ...managedClasses,
    },
    data: [
        {
            ...managedClasses,
        },
    ],
};

export default examples;
