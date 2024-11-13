import { Story as StoryType } from '../types';
import { formatDistanceToNow } from 'date-fns';

interface StoryProps {
  story: StoryType;
  rank: number;
}

export function Story({ story, rank }: StoryProps) {
  const timestamp = new Date(story.time * 1000);
  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true });
  
  const hostname = story.url ? new URL(story.url).hostname : null;

  return (
    <li className="py-1.5">
      <div className="flex items-baseline gap-1">
        <span className="text-gray-500 text-xs w-[20px] flex-shrink-0">{rank}.</span>
        <div className="text-sm">
          <div className="flex items-center gap-1">
            <a 
              href={story.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline visited:text-gray-600"
            >
              {story.title}
            </a>
            {hostname && (
              <span className="text-xs text-gray-500">
                ({hostname})
              </span>
            )}
          </div>
          <div className="text-xs text-gray-500">
            {story.score} points by{' '}
            <a href={`/user/${story.by}`} className="hover:underline">
              {story.by}
            </a>{' '}
            {timeAgo} |{' '}
            <a href={`/item/${story.id}`} className="hover:underline">
              {story.descendants} comment{story.descendants !== 1 ? 's' : ''}
            </a>
          </div>
        </div>
      </div>
    </li>
  );
} 