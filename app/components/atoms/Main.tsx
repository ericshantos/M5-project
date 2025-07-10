import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & { 
    children: React.ReactNode;
    className?: string;
}

export const Main: React.FC<Props> = ({ children, className = '', ...rest }) => (
    <main className={className} {...rest}>
        {children}
    </main>
)