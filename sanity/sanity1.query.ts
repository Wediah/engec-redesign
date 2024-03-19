import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function getAllReviews() {
  return client.fetch(
    groq`
    *[_type == "reviews"]{ 
        title, 
        description,
    }`
    );
}