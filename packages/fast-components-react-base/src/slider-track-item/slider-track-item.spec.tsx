import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount, shallow } from "enzyme";
import SliderTrackItem, {
    SliderTrackItemHandledProps,
    SliderTrackItemProps,
    SliderTrackItemUnhandledProps,
} from "./slider-track-item";
import { DisplayNamePrefix } from "../utilities";

/*
 * Configure Enzyme
 */
configure({ adapter: new Adapter() });

describe("slider track item", (): void => {
    test("should have a displayName that matches the component name", () => {
        expect(`${DisplayNamePrefix}${(SliderTrackItem as any).name}`).toBe(
            SliderTrackItem.displayName
        );
    });

    test("should not throw if managedClasses are not provided", () => {
        expect(() => {
            shallow(<SliderTrackItem />);
        }).not.toThrow();
    });

    test("should implement unhandledProps", (): void => {
        const unhandledProps: SliderTrackItemUnhandledProps = {
            "aria-label": "label",
        };

        const rendered: any = shallow(<SliderTrackItem {...unhandledProps} />);

        expect(rendered.first().prop("aria-label")).toEqual("label");
    });
});
