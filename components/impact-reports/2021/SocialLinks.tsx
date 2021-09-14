import Image from './Image';

interface SocialLinksProps {
    sx?: string,
    services?: Array<string>
}

export default function SocialLinks({sx, services = ['twitter', 'facebook', 'instagram']} :SocialLinksProps) {
    return (
        <>
            <span className="font-bold">Share:</span>
            <div className={`flex flex-row justify-center ${sx}`}>
                {services.includes('twitter') && <Image src="/icon-social-tw-gold2x.png" alt="Twitter logo" sx="h-12 p-1"/>}
                {services.includes('facebook') && <Image src="/icon-social-fb-gold2x.png" alt="Facebook logo" sx="h-12 p-1"/>}
                {services.includes('instagram') && <Image src="/icon-social-in-gold2x.png" alt="Instagram logo" sx="h-12 p-1"/>}
            </div>
        </>

    );
}
