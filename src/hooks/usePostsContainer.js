import { useEffect } from "react"
import { Post } from "@/graphql/post"
import { useLazyQuery } from "@apollo/client"
import { useDisclosure } from "@chakra-ui/react"

export const usePostsContainer = () => {
  const modalPost = useDisclosure()
  const [getPost, { data, loading, error }] = useLazyQuery(Post)

  const refresh = (filter = {}) => {
    getPost({
      variables: { filter: filter },
      fetchPolicy: 'cache-and-network'
    })
  }

  useEffect(() => {
    refresh()
  }, [])

  return {
    data,
    loading,
    refresh,
    modalPost,
  }
}
