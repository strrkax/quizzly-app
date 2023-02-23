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
    fetchOneQuestion: build.query<QuestionApiResponse, { category: string; difficulty: string; }>({
      query: (args) => {
        if (args) {
          var { category, difficulty } = args;
        }
        return {
          url: '/api.php',
          params: {
            amount: '1',
            category: category,
            difficulty: difficulty,
          }
        };
      }
    }),
    fetchCategories: build.query<CategoriesApiResponse, string>({
      query: () => ({
        url: '/api_category.php'
      })
    })
  })

});
