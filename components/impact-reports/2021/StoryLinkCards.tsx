import Link from 'next/link';

interface Cards {
    title: string,
    description: string,
    image?: any,
    campus: string,
}

interface StoryCardLinksProps {
    title?: string,
    variant?: string,
    cards: any,
}

const defaultCards = {
    1234: {
        title: 'Foo',
        description: 'bar',
        campus: 'Boulder',
        main_image: {
            url: '/assets/ir21/circles-pic.png'
        }
    }
};

export default function StoryCardLinks({title, variant, cards = defaultCards}: StoryCardLinksProps) {
    switch (variant) {
        case 'centered':
            break;
        default:
            return (
                <>
                    <span className="p-2 font-bold text-3xl">{title}</span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Object.keys(cards).map((el, index) => {
                            return (
                                <Link key={index}
                                      as={`/impact-reports/2021/stories/${cards[el].slug}`}
                                      href="/impact-reports/2021/stories/[slug]">
                                    <a>
                                        <div className="rounded-3xl bg-white flex flex-col md:mx-3 my-3 md:my-0 shadow border h-full w-full">
                                            <div style={{backgroundImage: `url('${cards[el].main_image.url}')`}}
                                                 className="flex flex-col justify-end bg-cover h-64">
                                                <span className="bg-gold text-white text-center p-3 w-36 rounded-tr-full">{cards[el].campus}</span>
                                            </div>
                                            <span className="p-3 font-bold text-xl">{cards[el].title}</span>
                                            <span className="p-3 hidden md:inline-block">{cards[el].description}</span>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </>
            );
    }

}
