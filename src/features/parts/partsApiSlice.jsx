import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const partsAdapter = createEntityAdapter({});

const initialState = partsAdapter.getInitialState();

export const partsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getParts: builder.query({
      query: () => "/parts",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedParts = responseData.map((part) => {
          part.id = part._id;
          return part;
        });
        return partsAdapter.setAll(initialState, loadedParts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Part", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Part", id })),
          ];
        } else return [{ type: "Part", id: "LIST" }];
      },
    }),
    addNewPart: builder.mutation({
      query: (initialPart) => ({
        url: "/parts",
        method: "POST",
        body: {
          ...initialPart,
        },
      }),
      invalidatesTags: [{ type: "Part", id: "LIST" }],
    }),
    updatePart: builder.mutation({
      query: (initialPart) => ({
        url: "/parts",
        method: "PATCH",
        body: {
          ...initialPart,
        },
      }),
      // invalidatesTags: (result, error, arg) => [{ type: "Part", id: arg.id }],
      invalidatesTags: (result, error, arg) => [{ type: "Part", id: arg.id }],
    }),
    deletePart: builder.mutation({
      query: ({ id }) => ({
        url: "/parts",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Part", id: arg.id }],
    }),
  }),
});

export const {
  useGetPartsQuery,
  useAddNewPartMutation,
  useUpdatePartMutation,
  useDeletePartMutation,
} = partsApiSlice;

// returns the query result object
export const selectPartsResult = partsApiSlice.endpoints.getParts.select();

// creates memoized selector
const selectPartsData = createSelector(
  selectPartsResult,
  (partsResult) => partsResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllParts,
  selectById: selectPartById,
  selectIds: selectPartIds,
  // Pass in a selector that returns the notes slice of state
} = partsAdapter.getSelectors(
  (state) => selectPartsData(state) ?? initialState
);
