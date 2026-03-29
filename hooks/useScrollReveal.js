'use client';
import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to add .visible class
 * when the element enters the viewport.
 * @param {string} selector - CSS selector for elements to watch (default '.reveal, .reveal-left, .reveal-right, .reveal-scale')
 * @param {number} threshold - 0–1, how much element must be visible before triggering
 */
export default function useScrollReveal(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale', threshold = 0.12) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // fire once
                    }
                });
            },
            { threshold }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector, threshold]);
}
