import React from "react";
import {
    BadgeClassNameContract,
    ManagedClasses,
} from "@microsoft/fast-components-class-name-contracts-msft";

export enum BadgeAppearance {
    accent = "accent",
    highlight = "highlight",
    lowlight = "lowlight",
}

export enum BadgeSize {
    small = "small",
    large = "large",
}

export interface BadgeManagedClasses extends ManagedClasses<BadgeClassNameContract> {}
export interface BadgeHandledProps extends BadgeManagedClasses {
    /**
     * The badge appearance
     */
    appearance?: BadgeAppearance;

    /**
     * The badge size
     */
    size?: BadgeSize;
}
/* tslint:disable-next-line:no-empty-interface */
export interface BadgeUnhandledProps extends React.HTMLAttributes<HTMLSpanElement> {}
export type BadgeProps = BadgeHandledProps & BadgeUnhandledProps;
