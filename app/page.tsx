import Image from "next/image";
import { Story } from './types';
import { Story as StoryComponent } from './components/Story';
import { getTopStories, getStory } from './services/hackerNewsAPI';

export default async function Home() {
  const storyIds = await getTopStories();
  const stories = await Promise.all(storyIds.map(getStory));

  return (
    <div className="min-h-screen bg-[#f6f6ef]">
      <header className="bg-[#ff6600] px-2 py-2">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <span className="font-bold">Hacker News Clone</span>
          <nav className="text-sm">
            <a href="/" className="hover:underline">new</a> | 
            <a href="/" className="hover:underline ml-1">past</a> | 
            <a href="/" className="hover:underline ml-1">comments</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-2">
        <ol className="list-none">
          {stories.map((story: Story, index: number) => (
            <StoryComponent 
              key={story.id} 
              story={story} 
              rank={index + 1}
            />
          ))}
        </ol>
      </main>
    </div>
  );
}
