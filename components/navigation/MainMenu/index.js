import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MainMenu() {
    const router = useRouter();

    const { locales, pathname } = router;
    return (
        <div style={{ display: 'flex' }}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
            <ul>
                {locales.map((locale) => (
                    <li key={locale}>
                        <Link href={pathname} locale={locale}>
                            <a>{locale}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
