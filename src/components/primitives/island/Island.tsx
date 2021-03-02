import React from 'react';

type Props = {
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Island: React.FC<Props> = ({ children, ...divAttributes }) => (
    <div {...divAttributes}>{children}</div>
);

export default Island;
