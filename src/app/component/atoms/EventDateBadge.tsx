interface EventDateBadgeProps {
  month: string;
  date: string;
  className?: string;
}

export const EventDateBadge = ({ 
  month, 
  date, 
  className = "bg-red-500 text-white rounded-lg p-3 text-center mr-4 min-w-[70px]" 
}: EventDateBadgeProps) => {
  return (
    <div className={className}>
      <div className="font-bold text-sm uppercase">{month}</div>
      <div className="font-bold text-2xl">{date}</div>
    </div>
  );
};