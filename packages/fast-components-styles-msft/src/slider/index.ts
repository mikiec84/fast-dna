import { DesignSystem, withDesignSystemDefaults } from "../design-system";
import { ComponentStyles, ComponentStyleSheet } from "@microsoft/fast-jss-manager";
import { toPx } from "@microsoft/fast-jss-utilities";
import {
    ButtonClassNameContract,
    SliderClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-msft";
import { elevation, ElevationMultiplier } from "../utilities/elevation";
import {
    neutralFillStealthRest,
    neutralForegroundRest,
    neutralOutlineRest,
} from "../utilities/color";
import { applyFloatingCornerRadius } from "../utilities/border";

const styles: ComponentStyles<SliderClassNameContract, DesignSystem> = (
    config: DesignSystem
): ComponentStyleSheet<SliderClassNameContract, DesignSystem> => {
    const designSystem: DesignSystem = withDesignSystemDefaults(config);

    return {
        slider: {
            display: "grid",
        },

        slider_thumb: {
            height: "16px",
            width: "16px",
            border: "2px solid",
            borderColor: "black",
            background: "white",
            borderRadius: "50%",
            justifySelf: "center",

            "&:hover": {
                cursor: "pointer",
            },
        },

        slider_layoutPanel: {
            height: "100%",
            width: "100%",
            display: "grid",
        },

        slider_barBack: {
            borderRadius: "2px",
            background: "grey",
        },

        slider_barFront: {
            borderRadius: "2px",
            background: "black",
        },

        slider__disabled: {
            opacity: ".3",
        },

        slider__orientationHorizontal: {
            "&$slider": {
                minHeight: "20px",
                minWidth: "128px",
            },
            "& $slider_layoutPanel": {
                gridTemplateRows: "auto 4px auto",
            },
            "& $slider_barBack": {
                height: "4px",
                width: "100%",
                gridRow: "2",
            },

            "& $slider_barFront": {
                height: "4px",
                gridRow: "2",
                gridTemplateRows: "1fr 4px 1fr",
                alignItems: "center",
            },
        },

        slider__orientationVertical: {
            "&$slider": {
                minHeight: "128px",
                minWidth: "20px",
            },
            "& $slider_layoutPanel": {
                gridTemplateColumns: "auto 4px auto",
                alignContent: "center",
            },
            "& $slider_barBack": {
                width: "4px",
                height: "100%",
                gridColumn: "2",
            },
            "& $slider_barFront": {
                width: "4px",
                gridColumn: "2",
                gridTemplateColumns: "1fr 4px 1fr",
                alignContent: "center",
            },
        },
    };
};

export default styles;
