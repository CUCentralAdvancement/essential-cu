import Image from "./Image";

interface Cards {
    title: string,
    subTitle: string,
    image?: any,
    campus: string,
}

interface StoryCardLinksProps {
    title?: string,
    variant?: string,
    cards: Array<Cards>
}

export default function StoryCardLinks({title, variant, cards} :StoryCardLinksProps) {
    switch (variant) {
        case 'centered':
            break;
        default:
            return (
                <>
                    <span className="p-2 font-bold text-3xl">{title}</span>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {cards.map((el, index) => {
                            return (
                                <div key={index} className="rounded-3xl bg-white flex flex-col mx-3 shadow border">
                                    <div style={{backgroundImage: `url('/assets/ir21/circles-pic.png')`}}
                                         className="flex flex-col justify-end bg-cover h-64">
                                        <span className="bg-gold text-white text-center p-3 w-36 rounded-tr-full">{el.campus}</span>
                                    </div>
                                    <span className="p-3 font-bold text-xl">{el.title}</span>
                                    <span className="p-3">{el.subTitle}</span>
                                </div>
                            );
                        })}
                    </div>
                </>
            );
    }

}
