import Image from './Image';

interface SocialLinksProps {
    sx?: string,
}

export default function SocialLinks({sx} :SocialLinksProps) {
    return (
        <>
            <span className="font-bold">Share:</span>
            <div className={`flex flex-row ${sx}`}>
                <Image src="/icon-social-tw-gold2x.png" alt="Twitter logo" sx="h-12 p-1"/>
                <Image src="/icon-social-fb-gold2x.png" alt="Facebook logo" sx="h-12 p-1"/>
                <Image src="/icon-social-in-gold2x.png" alt="Instagram logo" sx="h-12 p-1"/>
            </div>
        </>

    );
}
