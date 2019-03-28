/**
 * The class name contract for the slider component
 */
export interface SliderClassNameContract {
    /**
     * The root of the slider component
     */
    slider?: string;

    /**
     * The horizontal orientation modifier
     */
    slider__orientationHorizontal?: string;

    /**
     * The vertical orientation modifier
     */
    slider__orientationVertical?: string;

    /**
     * The layout panel of the slider component. Slider children end up in this container.
     */
    slider_layoutPanel?: string;

    /**
     * The thumb of the slider component
     */
    slider_thumb?: string;

    /**
     * The thumb horizontal orientation modifier
     */
    slider_thumb__orientationHorizontal?: string;

    /**
     * The thumb vertical orientation modifier
     */
    slider_thumb__orientationVertical?: string;

    /**
     * The low value thumb modifier
     */
    slider__thumbUpper?: string;

    /**
     * The high value thumb modifier
     */
    slider__thumbLower?: string;
    /**
     * The fixed background track of the slider component
     */
    slider_barBack?: string;

    /**
     * The foreground bar of the slider component that tracks the thumb
     */
    slider_barFront?: string;

    /**
     * The front bar horizontal orientation modifier
     */
    slider_barFront__orientationHorizontal?: string;

    /**
     * The front bar vertical orientation modifier
     */
    slider_barFront__orientationVertical?: string;

    /**
     * The disabled modifier
     */
    slider__disabled?: string;
}
