import { Star, StarHalf } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  project: string;
}

export function ReviewCard({ name, rating, comment, date, project }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-[380px] h-[280px] relative group">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ED321] via-[#00D4FF] to-[#BD10E0] opacity-50 rounded-lg blur-sm group-hover:opacity-80 transition-opacity duration-300" />
      
      <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-lg border border-white/10 p-6 flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg text-white font-mono">{name}</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => {
                const starValue = i + 1;
                const isFull = rating >= starValue;
                const isHalf = rating > i && rating < starValue;
                return isFull ? (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
                  />
                ) : isHalf ? (
                  <StarHalf
                    key={i}
                    className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
                  />
                ) : (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-none text-gray-600"
                  />
                );
              })}
            </div>
          </div>
          
          {/* Comment */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
            "{comment}"
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-xs text-gray-500 font-mono">{date}</span>
          <span className="text-xs font-mono">
            <span className="text-[#7ED321]">{'<'}</span>
            <span className="text-[#00D4FF]">{project}</span>
            <span className="text-[#7ED321]">{' />'}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
