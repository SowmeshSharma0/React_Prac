import { useEffect, useRef } from "react";

export const useClickOutside = (callback) => {
    let domNode = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!domNode.current.contains(e.target)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [callback]);

    return domNode;
}