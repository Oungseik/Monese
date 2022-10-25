export default function TagButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button className={`uppercase text-gray-400 ${className}`}>{text}</button>
  );
}
