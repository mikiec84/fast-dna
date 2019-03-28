import React from "react";
import {
    ManagedClasses,
    SliderTrackItemClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";

export interface SliderTrackItemManagedClasses
    extends ManagedClasses<SliderTrackItemClassNameContract> {}
export interface SliderTrackItemUnhandledProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export enum SliderTrackItemAnchor {
    selectedRangeMin = "selectedRangeMin",
    selectedRangeMax = "selectedRangeMax",
    totalRangeMin = "totalRangeMin",
    totalRangeMax = "totalRangeMax",
}

export interface SliderTrackItemHandledProps extends SliderTrackItemManagedClasses {
    /**
     * The children of the slider track item
     */
    children?: React.ReactNode;

    /**
     * The slider value to position the top of the component at in vertical mode
     */
    trackerUpperValuePositionBinding?: number | SliderTrackItemAnchor;

    /**
     * The slider value to position the top of the component at in vertical mode
     */
    trackerLowerValuePositionBinding?: number | SliderTrackItemAnchor;
}

export type SliderTrackItemProps = SliderTrackItemHandledProps &
    SliderTrackItemUnhandledProps;
