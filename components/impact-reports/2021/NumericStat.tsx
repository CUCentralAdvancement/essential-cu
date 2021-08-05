import Image from './Image';

interface NumericStatProps {
    label: string,
    variant: string,
    number: number
}

export default function NumericStat({label, variant, number}: NumericStatProps) {
    let styles = {
        container: 'flex flex-row items-center',
        number: 'text-3xl block py-4'
    };
    switch (variant) {
        case 'centered':
            styles = {
                container: 'text-center',
                number: 'text-4xl block py-4'
            };
    }
    return (
        <div className={styles.container}>
            <div className="pr-2">
                <Image src="/2021/media-icon.png" alt="Twitter logo" sx="h-18 p-1"/>
            </div>
            <div>
                <span className={styles.number}>{number}</span>
                <span>{label}</span>
            </div>
        </div>
    );
}
