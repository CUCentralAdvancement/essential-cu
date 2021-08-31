import {ReactNode} from "react";

interface TextBlockProps {
    title?: string,
    children: ReactNode,
    variant?: string,
}

export default function TextBlock({title, children, variant} :TextBlockProps) {
    let styles = {
        container: 'py-4',
        title: 'text-3xl block py-4'
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'text-center',
                title: 'text-4xl block py-4'
            };
    }
     return (
        <div className={styles.container}>
            { title && <span className={styles.title}>{title}</span>}
            {children}
        </div>
    );
}
