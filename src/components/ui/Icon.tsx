import React from 'react';

type IconName =
    'error'
    | 'success'
    | 'info'
    | 'warning'
    | 'link'
    ; // Extend as needed

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    color?: string;
    size?: number | string;
}

const icons: Record<IconName, React.ReactNode> = {
    error: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    ),
    success: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.59L6.41 13l-1.41 1.41L10 18.41l7-7-1.41-1.41L10 16.17z" />
    ),
    info: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    ),
    warning: (
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    ),
    link: (
        (
            <>
                <path d="M20.7,19.3l-1-1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1,1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C21.1,20.3,21.1,19.7,20.7,19.3z" fill="currentColor" stroke="none" />
                <path d="M14,22c0,0.6,0.4,1,1,1s1-0.4,1-1v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1V22z" fill="currentColor" stroke="none" />
                <path d="M22,14h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0.6,0,1-0.4,1-1S22.6,14,22,14z" fill="currentColor" stroke="none" />
                <path d="M20.7,8.4c0-1.4-0.5-2.6-1.5-3.6c-1-1-2.2-1.5-3.6-1.5S13,3.8,12,4.8L9.8,7c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l2.2-2.2c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,0.9,1.4,0.9,2.2c0,0.8-0.3,1.6-0.9,2.2l-2.2,2.2c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.2-2.2C20.2,11,20.7,9.8,20.7,8.4z" fill="currentColor" stroke="none" />
                <path d="M3.3,15.6c0,1.4,0.5,2.6,1.5,3.6c1,1,2.2,1.5,3.6,1.5s2.6-0.5,3.6-1.5l2.2-2.2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2.2,2.2c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-0.9-1.4-0.9-2.2c0-0.8,0.3-1.6,0.9-2.2l2.2-2.2c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L4.8,12C3.8,13,3.3,14.2,3.3,15.6z" fill="currentColor" stroke="none" />
                <path d="M5.7,4.3l-1-1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1,1C4.5,5.9,4.7,6,5,6s0.5-0.1,0.7-0.3C6.1,5.3,6.1,4.7,5.7,4.3z" fill="currentColor" stroke="none" />
                <path d="M10,4V2c0-0.6-0.4-1-1-1S8,1.4,8,2v2c0,0.6,0.4,1,1,1S10,4.6,10,4z" fill="currentColor" stroke="none" />
                <path d="M4,10c0.6,0,1-0.4,1-1S4.6,8,4,8H2C1.4,8,1,8.4,1,9s0.4,1,1,1H4z" fill="currentColor" stroke="none" />
            </>
        )
    ),
};

export const Icon: React.FC<IconProps> = ({
    name,
    color = 'currentColor',
    size = 24,
    ...props
}) => (
    <svg
        width={size}
        height={size}
        fill="none"
        stroke={color}
        viewBox="0 0 24 24"
        {...props}
    >
        {icons[name]}
    </svg>
);

export default Icon;