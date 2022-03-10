import Document, {Html, Head, Main, NextScript} from 'next/document'


export default class MyDocument extends Document {
    render(){
        return(
            <Html lang="pt-br">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;800;900&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico"/>
                
            </Head>
            <body>
                <Main />
                <NextScript />
                
            </body>
            </Html>
        )
    }
}