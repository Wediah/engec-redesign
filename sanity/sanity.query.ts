import { groq } from 'next-sanity';
import { client }  from './lib/client';

export async function getAllProjects() {
  return client.fetch(
    groq`
    *[_type == "projects"]{ 
        title, 
        description, 
        ProjectImage {
          asset->{
            _id,
            url
          },
        },
    }`
    );
}

export async function Reviews() {
  return client.fetch(
    groq`
    *[_type == "reviews"]{ 
        title, 
        description,
    }`
    );
}