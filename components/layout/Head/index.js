import Head from 'next/head';

export default function DefaultHead({
    title,
    slogan,
    description,
    url,
    ogImage,
    twitterCardImage,
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    );
}
