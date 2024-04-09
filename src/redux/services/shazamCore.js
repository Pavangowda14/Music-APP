import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamApi=createApi({
    reducerPath:'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',VITE_SHAZAM_CORE_RAPID_API_KEY)

            return headers
        }
    }),
    endpoints:(builder)=>({
        getTopCharts:builder.query({query:()=>"/charts/track"}),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?${songid}` }),
    }),
});

export const{
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
}=shazamApi