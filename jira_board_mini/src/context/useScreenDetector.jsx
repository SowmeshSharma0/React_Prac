import { useCallback, useEffect, useState } from "react";

const cardSizes = {
    breakpoints_Width:{
        large: 1440,
        medium: 1024,
        small: 768,
    },
    usableWidth:{
        large: 424,
        medium: 450,
        small: 340,
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

    const calculateCardWidth = useCallback(() => {
        const width = window.screen.width;
        if (width > cardSizes.breakpoints_Width.large) {
            // For large screens: divide available space for 4 columns with margins
            return cardSizes.usableWidth.large;
        } else if (width > cardSizes.breakpoints_Width.medium) {
            // For medium screens: divide available space for 3 columns
            return cardSizes.usableWidth.medium;
        } else if (width > cardSizes.breakpoints_Width.small) {
            // For small screens: divide available space for 2 columns
            return cardSizes.usableWidth.small;
        } else {
            // For mobile: single column with margins
            return width/1.2;
        }
    }, [])

    const calculateCardHeight = useCallback(() => {
        const height = window.screen.height;
        if (height > cardSizes.breakpoints_Height.large) {
            return cardSizes.usableHeight.large;
        } else if (height > cardSizes.breakpoints_Height.medium) {
            return cardSizes.usableHeight.medium;
        } else if (height > cardSizes.breakpoints_Height.small) {
            return cardSizes.usableHeight.small;
        } else {
            return cardSizes.usableHeight.mobile;
        }
    }, [])

    const [usable_card_width, setUsableCardWidth] = useState(() => {
        
        return calculateCardWidth();
    });
    const [usable_card_height, setUsableCardHeight] = useState(() => {
        return calculateCardHeight();
    });

    useEffect(() => {

        const handleResize = () => {

            setUsableCardWidth(calculateCardWidth);
            setUsableCardHeight(calculateCardHeight);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [calculateCardWidth, calculateCardHeight]);

    return {usable_card_width, usable_card_height};
}

export default useScreenDetector
