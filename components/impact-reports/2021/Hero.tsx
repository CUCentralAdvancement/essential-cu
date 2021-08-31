import SocialLinks from "./SocialLinks"

interface HeroProps {
    socialLinks: boolean,
    variant: string,
    title: string,
    detail?: string,
}

export default function Hero({ socialLinks, variant, title, detail }: HeroProps) {
    let styles = {
        container: 'flex flex-col items-center justify-between',
        title: 'text-2xl',
        detail: '',
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'flex flex-col h-full justify-center',
                title: 'text-4xl',
                detail: '',
            };
    }
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <span className={styles.detail} dangerouslySetInnerHTML={{ __html: detail }} />
            {socialLinks && <SocialLinks/>}
        </div>

    );
}
