import React, { useEffect } from 'react';

export default function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    onClickOutside: () => void,
) {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClickOutside();
            }
        };

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [ref, onClickOutside]);
}
