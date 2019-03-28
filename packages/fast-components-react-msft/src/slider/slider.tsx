import React from "react";
import { get } from "lodash-es";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import {
    SliderHandledProps,
    SliderManagedClasses,
    SliderProps,
    SliderUnhandledProps,
} from "./slider.props";
import { Slider as BaseSlider, SliderState } from "@microsoft/fast-components-react-base";
import { DisplayNamePrefix } from "../utilities";

class Slider extends Foundation<SliderHandledProps, SliderUnhandledProps, {}> {
    public static displayName: string = `${DisplayNamePrefix}Slider`;

    protected handledProps: HandledProps<SliderHandledProps> = {
        managedClasses: void 0,
    };

    /**
     * Renders the component
     */
    public render(): React.ReactElement<HTMLDivElement> {
        return (
            <BaseSlider
                {...this.unhandledProps()}
                managedClasses={this.props.managedClasses}
            >
                {this.props.children}
            </BaseSlider>
        );
    }
}

export default Slider;
export * from "./slider.props";
