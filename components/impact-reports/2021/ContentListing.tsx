interface ContentListingProps {
    variant: string,
    content: any,
    title: string
}

export default function ContentListing({variant, content, title}: ContentListingProps) {
    switch (variant) {
        case '4-col--hero-middle':
            return (
                <div className="">
                    <span className="text-3xl font-bold block py-4">{title}</span>
                    <div className="grid grid-cols-4 gap-2">
                        {content.map((el, index) => {
                            return (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xl">{el.title}</span>
                                    <span>{el.subTitle}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        case  'links':
            return (
                <div className="">
                    <span className="text-3xl font-bold block py-4">{title}</span>
                    <hr/>
                    <div className="grid grid-cols-1 gap-2">
                        {content.map((el, index) => {
                            return (
                                <div key={index}>
                                    <a href={el.href}>{el.linkText}</a> --&gt;
                                </div>
                            );
                        })}
                    </div>
                    <hr/>
                </div>
            );
    }

}
