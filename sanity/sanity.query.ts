import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function getAllProjects() {
  return client.fetch(
    groq`
    *[_type == "projects"]{ 
        title, 
        description, 
        link, 
        Projectimage {alt, "image":asset->url},
        tools
    }`
    );
}