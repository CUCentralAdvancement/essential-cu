interface ContentListingProps {
    variant: string,
    content: any,
    title: string
}

export default function ContentListing({variant, content, title}: ContentListingProps) {
    let styles = {
        container: '',
        title: 'text-3xl block py-4',
        list: '',
        listImage: '',
        contentTitle: '',
    };
    switch (variant) {
        case '4-col--hero-middle':
            styles = {
                container: '',
                title: 'text-3xl block py-4',
                list: 'flex flex-col',
                listImage: 'h-20',
                contentTitle: 'text-xl',
            };
    }
    return (
        <div className={styles.container}>
            <span className={styles.title}>{title}</span>
            <div className="grid grid-cols-4 gap-2">
                {content.map((el, index) => {
                    return (
                        <div key={index} className={styles.list}>
                            <span className={styles.listImage}
                                  style={{backgroundImage: 'url(https://place-hold.it/200x200/#ccc)'}}>
                                <span>Science</span> 
                            </span>
                            <span className={styles.contentTitle}>{el.title}</span>
                            <span>{el.subTitle}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
