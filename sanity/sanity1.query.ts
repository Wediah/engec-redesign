import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function Reviews() {
  return client.fetch(
    groq`
    *[_type == "reviews"]{ 
        title, 
        description,
    }`
    );
}