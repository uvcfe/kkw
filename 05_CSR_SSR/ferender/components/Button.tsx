'use client';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  direction?: 'next' | 'prev';
  currentId?: number;
  onPostChange?: (newId: number) => void;
}

export default function Button({ 
  onClick,
  children, 
  direction,
  currentId,
  onPostChange
}: ButtonProps) {

  const getNextPostId = (currentId: number, direction: 'next' | 'prev'): number => {
    return direction === 'next' 
      ? (currentId === 10 ? 1 : currentId + 1)
      : (currentId === 1 ? 10 : currentId - 1);
  };

  const handleClick = () => {
    if (direction && currentId && onPostChange) {
      const newId = getNextPostId(currentId, direction);
      onPostChange(newId);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
} 