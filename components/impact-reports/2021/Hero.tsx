import SocialLinks from "./SocialLinks"

interface HeroProps {
    socialLinks: boolean,
    variant: string,
    title: string,
}

export default function Hero({ socialLinks, variant, title }: HeroProps) {
    let styles = {
        container: '',
        title: 'text-2xl'
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'py-8 md:py-4 lg:py-32 pl-4',
                title: 'text-4xl'
            };
    }
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            {socialLinks && <SocialLinks/>}
        </div>

    );
}
