"use client";

import { cn } from "~/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl: string;
}
interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
  size?: number;
  borderSize?: number;
  space?: number;
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
  size = 10,
  borderSize = 2,
  space = 4,
}: AvatarCirclesProps) => {
  return (
    <div
      className={cn(
        `z-10 flex -space-x-${space} rtl:space-x-reverse`,
        className
      )}
    >
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            key={index}
            className={`h-${size} w-${size} rounded-full border-${borderSize} border-white dark:border-gray-800`}
            src={url.imageUrl}
            width={40}
            height={40}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {(numPeople ?? 0) > 0 && (
        <a
          className={`flex h-${size} w-${size} items-center justify-center rounded-full border-${borderSize} border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black`}
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
