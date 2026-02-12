import { useQuery } from "@tanstack/react-query"
import { getAllPosts, GET_ALL_POSTS_QUERY_KEY } from "../api/posts.api"
import { Data } from "../types/post.types"

export const usePosts = () => {
	return useQuery({
		// This query key is used to invalid cache
		queryKey: GET_ALL_POSTS_QUERY_KEY(),
		queryFn: getAllPosts,
		// Performs Transformations on your data

		select: (data): Data => {
			return data.map(datum => ({
				...datum,
			}))
		},
	})
}
