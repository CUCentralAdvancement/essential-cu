import { useEffect } from 'react';

export default function Story() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.location.replace(`https://essential.cu.edu/impact-reports/together/story/innovation`)
        }
    })
    return null;
}