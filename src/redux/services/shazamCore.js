import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shazamApi=createApi({
    reducerPath:'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam.p.rapidapi.com',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','5e8a3a2a65mshc630246e9c7bf07p1e725cjsn59c64fefaa5d')

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