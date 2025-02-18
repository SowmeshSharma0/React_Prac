import { useCallback, useEffect, useState } from "react";

const cardSizes = {
    breakpoints_Width:{
        large: 900,
        medium: 600,
        small: 400,
    },
    usableWidth:{
        large: 450,
        medium: 400,
        small: 350,
        // mobile: 250
    },
    breakpoints_Height:{
        large: 900,
        medium: 600,
        small: 400,
    },
    usableHeight:{
        large: 500,
        medium: 500,
        small: 400,
        mobile: 400
    }
};

const useScreenDetector = () => {

    const [usable_card_width, setUsableCardWidth] = useState(() => {
        const width = window.screen.width;
        // console.log("resized to: ", width);
        if(width > cardSizes.breakpoints_Width.large)
            return cardSizes.usableWidth.large;
        else if(width > cardSizes.breakpoints_Width.medium)
            return cardSizes.usableWidth.medium;
        else if(width > cardSizes.breakpoints_Width.small)
            return cardSizes.usableWidth.small;
        else
            return width;
    });
    const [usable_card_height, setUsableCardHeight] = useState(() => {
        const height = window.screen.height;
        // console.log("resized to: ", height);
        if(height > cardSizes.breakpoints_Height.large)
            return cardSizes.usableHeight.large;
        else if(height > cardSizes.breakpoints_Height.medium)
            return cardSizes.usableHeight.medium;
        else if(height > cardSizes.breakpoints_Height.small)
            return cardSizes.usableHeight.small;
        else
            return cardSizes.usableHeight.mobile;
    });

    const memoized_handleResize = useCallback(() => {
        const width = window.screen.width;
        const height = window.screen.height;

        if(width > cardSizes.breakpoints_Width.large)
            setUsableCardWidth(cardSizes.usableWidth.large);
        else if(width > cardSizes.breakpoints_Width.medium)
            setUsableCardWidth(cardSizes.usableWidth.medium);
        else if(width > cardSizes.breakpoints_Width.small)
            setUsableCardWidth(cardSizes.usableWidth.small);
        else
            setUsableCardWidth(width);

        if(height > cardSizes.breakpoints_Height.large)
            setUsableCardHeight(cardSizes.usableHeight.large);
        else if(height > cardSizes.breakpoints_Height.medium)
            setUsableCardHeight(cardSizes.usableHeight.medium);
        else if(height > cardSizes.breakpoints_Height.small)
            setUsableCardHeight(cardSizes.usableHeight.small);
        else
            setUsableCardHeight(cardSizes.usableHeight.mobile);
    }, [])

    useEffect(() => {

        window.addEventListener('resize', memoized_handleResize);
        memoized_handleResize();

        return () => window.removeEventListener('resize', memoized_handleResize);
    }, [memoized_handleResize]);

    return {usable_card_width, usable_card_height};
}

export default useScreenDetector
