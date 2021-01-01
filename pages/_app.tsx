import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'

const NoSSR: React.ComponentType<any> = dynamic(() => Promise.resolve((props) => <>{props.children}</>), {
    ssr: false,
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
    <NoSSR>
        <RecoilRoot>
            <ErrorBoundary fallback={<div>error occurred</div>}>
                <Suspense fallback={<div>loading...</div>}>
                    <Component {...pageProps} />
                </Suspense>
            </ErrorBoundary>
        </RecoilRoot>
    </NoSSR>
)

export default MyApp
