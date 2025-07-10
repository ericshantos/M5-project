import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
    className?: string;
}

export const Block: React.FC<Props> = ({ children, className = '', ...rest }) => (
    <div className={className} {...rest}>
        {children}
    </div>
)