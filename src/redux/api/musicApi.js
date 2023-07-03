import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
    reducerPath: 'musicApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://painassasin.online/catalog',
        tagTypes:['Tracks'],
        prepareHeaders:(headers,{getState}) =>{
         
            const token = getState().users.token
         
              if (token){
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },

    }),
    endpoints: (builder) => ({
        getAllTracks: builder.query({
          query: () => '/track/all',
          providesTags: ['Tracks'],
        }),
        getSelectTrack: builder.query({
          query: (id) => ({
            url:`/track/${id}`,
            method:'GET'
        }),
        }),
        
    
        setFavorite: builder.mutation({
          query: (id) => ({
            url: `/track/${id}/favorite/`,
            method: 'POST',
          }),
          invalidatesTags: ['Tracks'],
        }),
        removeFavorite: builder.mutation({
          query: (id) => ({
            url: `/track/${id}/favorite/`,
            method: 'DELETE',
          }),
          invalidatesTags: ['Tracks'],
        }),
      }),
})

export const {useGetAllTracksQuery,useGetSelectTrackQuery,useRemoveFavoriteMutation,useSetFavoriteMutation} = musicApi