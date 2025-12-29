import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const cursorInnerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            if (!isVisible) setIsVisible(true);

            const { clientX: x, clientY: y } = e;

            if (cursorRef.current && cursorInnerRef.current) {
                // Apply smooth movement
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                cursorInnerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        const mouseOver = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('clickable') ||
                target.classList.contains('project-card') ||
                target.classList.contains('skill-card');

            if (isClickable) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const mouseDown = () => {
            if (cursorRef.current) cursorRef.current.classList.add('cursor-active');
        };

        const mouseUp = () => {
            if (cursorRef.current) cursorRef.current.classList.remove('cursor-active');
        };

        const mouseEnter = () => setIsVisible(true);
        const mouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', mouseOver);
        window.addEventListener('mousedown', mouseDown);
        window.addEventListener('mouseup', mouseUp);
        document.body.addEventListener('mouseenter', mouseEnter);
        document.body.addEventListener('mouseleave', mouseLeave);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', mouseOver);
            window.removeEventListener('mousedown', mouseDown);
            window.removeEventListener('mouseup', mouseUp);
            document.body.removeEventListener('mouseenter', mouseEnter);
            document.body.removeEventListener('mouseleave', mouseLeave);
        };
    }, [isVisible]);

    if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

    return (
        <>
            <div
                ref={cursorRef}
                className={`cursor-follower ${isHovered ? 'cursor-hover' : ''} ${isVisible ? 'cursor-visible' : ''}`}
            ></div>
            <div
                ref={cursorInnerRef}
                className={`cursor-inner ${isHovered ? 'cursor-inner-hover' : ''} ${isVisible ? 'cursor-visible' : ''}`}
            ></div>
        </>
    );
};

export default Cursor;
