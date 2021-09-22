import {ReactNode} from "react";

interface TextBlockProps {
    children: ReactNode,
    variant?: string,
}

export default function TextBlock({children, variant} :TextBlockProps) {
    let styles = {
        container: 'py-4',
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'text-center',
            };
    }
     return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
