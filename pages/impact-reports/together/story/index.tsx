import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

export default function Story() {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 720px)'
    });
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== "undefined") {
            router.push(`/impact-reports/together/story/innovation${ isMobile ? '/m' : ''}`)
        }
    })
    return null;
}