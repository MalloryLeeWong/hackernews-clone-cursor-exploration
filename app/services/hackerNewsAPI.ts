import { Story } from '../types';

export async function getTopStories(): Promise<number[]> {
  try {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json',
      { next: { revalidate: 300 } }
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch stories: ${response.status}`);
    }
    const storyIds = await response.json();
    return storyIds.slice(0, 30);
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
}

export async function getStory(id: number): Promise<Story> {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch story ${id}: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching story ${id}:`, error);
    throw error;
  }
} 