import Link from 'next/link';

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
          <h2 className={"text-lg lg:text-28 font-bold py-2"}>{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {Object.keys(cards).map((el, index) => {
              return (
                <Link key={index}
                      as={`/impact-reports/joy/stories/${cards[el].slug}`}
                      href="/impact-reports/joy/stories/[slug]">
                  <a>
                    <div className="rounded-lg bg-white flex flex-col shadow border h-full max-w-card">
                      <div style={{backgroundImage: `url('${cards[el].main_image.url}')`}}
                           className="flex flex-col justify-end bg-cover h-64 rounded-tr-lg rounded-tl-lg">
                                                <span className="bg-gold text-center pr-2 py-2 w-36 font-bold rounded-tr-full text-sm">
                                                    {cards[el].campus}
                                                </span>
                      </div>
                      <span className="px-4 py-2 font-bold">{cards[el].title}</span>
                      <span className="px-4 pb-6 text-sm ">{cards[el].description}</span>
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
