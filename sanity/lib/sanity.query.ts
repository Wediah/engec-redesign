import { groq } from 'next-sanity';
import { client }  from './client';

export const Projects = groq`*[_type == "projects"]{ 
        _id,
        title, 
        description, 
        ProjectImage {
          "image": asset->url,
          "lqip": asset->metadata.lqip,
          alt,
        },
    }`;

export async function Reviews() {
  return client.fetch(
    groq`
    *[_type == "reviews"]{ 
        title, 
        description,
    }`
    );
}