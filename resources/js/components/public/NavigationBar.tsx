import React from 'react';

interface NavigationBarProps {
    auth: any;
    isOpen: boolean;
    onClose: () => void;
}

export default function NavigationBar(props: NavigationBarProps) {
    return (
            <nav>
                <a href="">Pricing</a>
            </nav>
    );
}
