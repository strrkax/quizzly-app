import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICategory } from '../models/ICategory';
import { IQuestion } from '../models/IQuestion';

interface QuestionApiResponse {
  response_code: number;
  results: IQuestion[];
}

interface CategoriesApiResponse {
  trivia_categories: ICategory[];
}

export const questionAPI = createApi({
  reducerPath: 'questionAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://opentdb.com/'
  }),
  endpoints: (build) => ({
    fetchOneQuestion: build.query<QuestionApiResponse, string>({
      query: () => ({
        url: '/api.php?amount=1'
      })
    }),
    fetchCategories: build.query<CategoriesApiResponse, string>({
      query: () => ({
        url: '/api_category.php'
      })
    })
  })

});
