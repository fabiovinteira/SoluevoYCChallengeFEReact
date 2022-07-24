import { useEffect } from 'react';
import Head from 'next/head';

export default function HeadComponent(props:any) {
    return (
        <Head>
            <title>Soluevo React Test {props.title ? ` - ${props.title}` : ""}</title>
            <meta name="description" content={`${props.description ? props.description : ""}`} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}