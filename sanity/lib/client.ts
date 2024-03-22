import { createClient } from 'next-sanity'
import  ImageUrlBuilder  from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn } from '../env'
import { QueryParams } from '@sanity/client';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  const mode = "development"; // Add the missing declaration for the 'mode' variable
  return client.fetch<QueryResponse>(query, qParams, {
    cache: mode === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}
