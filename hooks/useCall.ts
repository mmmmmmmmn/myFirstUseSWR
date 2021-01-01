import useSWR, { responseInterface } from 'swr'

export const useCall = (): responseInterface<any, any> => {
    return useSWR('https://openlibrary.org/works/OL45883W.json', fetcher, {
        suspense: true,
        // refreshInterval: 1000,
        revalidateOnMount: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        shouldRetryOnError: false,
        dedupingInterval: 9999999999999,
        focusThrottleInterval: 9999999999999,
    })
}

const fetcher = async (url: string) => {
    console.log('fetch start')
    const res = await fetch(url)
    console.log('fetch end')
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error: any = new Error('An error occurred while fetching the data.')
        // Attach extra info to the error object.
        error.info = await res.json()
        error.status = res.status
        throw error
    }
    return res.json()
}
