import { Pet } from "../index";
import { baseApi } from "../../../shared/api";
export const petsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPets: builder.query<Pet[], { name?: string }>({
      query: (params) => {
        let queryString = "/";
        if (params) {
          const queryParts = [];
          if (params.name) queryParts.push(`name=${params.name}`);
          if (queryParts.length) queryString += `?${queryParts.join("&")}`;
        }
        return queryString;
      },
    }),
    addPetCard: builder.mutation<void, FormData>({
      query: (newPetCard) => ({
        url: "/pet",
        method: "POST",
        body: newPetCard,
      }),
    }),
    getPetTypes: builder.query<string[], void>({
      query: () => "/petTypes",
    }),
  }),
});

export const { useGetPetsQuery, useAddPetCardMutation, useGetPetTypesQuery } =
  petsApi;
