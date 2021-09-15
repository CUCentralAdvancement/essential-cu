import ButtonLink from "./ButtonLink";

interface Button {
    text: string,
    url: string,
}

interface CtaBlockProps {
    heading?: string,
    content: string,
    variant?: string,
    button: Button
}

export default function CtaBlock({heading, content, variant, button} :CtaBlockProps) {
    let styles = {
        container: 'py-4 flex flex-col justify-between',
        title: 'text-3xl block py-4',
        content: '',
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'text-center flex flex-col justify-between',
                title: 'text-4xl block py-4',
                content: '',
            };
    }
    return (
        <div className={styles.container}>
            { heading && <span className={styles.title}>{heading}</span>}
            <span className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
            { button && <ButtonLink href={button.url}>{button.text}</ButtonLink>}
        </div>
    );
}
