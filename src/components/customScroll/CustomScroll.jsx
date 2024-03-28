import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export const CustomScroll = ({ children }) => {
    const [postionY, setPostionY] = useState(0);
    // const [height, setHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            const height = containerRef.current.getBoundingClientRect().height - window.innerHeight;
            const scrollPostion = (scroll / height) * 100;
            setPostionY(scrollPostion + '%');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     if (containerRef.current) {
    //         setHeight(containerRef.current.getBoundingClientRect().height);
    //     }
    // }, [containerRef]);

    return (
        <div className="customScroll" ref={containerRef} style={{ height: `${100}%` }}>
            <div className="customScroll__bar" style={{top: `${postionY}px`}}></div>
            {children}
        </div>
    );
};

CustomScroll.propTypes = {
    children: PropTypes.node,
};