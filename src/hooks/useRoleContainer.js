import React from 'react'
import { Role } from '@/graphql/role';
import { useQuery } from '@apollo/client';

export const useRoleContainer = () => {
  const { loading, error, data, refetch } = useQuery(Role, {
    variables: { },
  });
  
  return {
    data,
    error,
    loading,
    refetch
  }
}
