// components/Tags.tsx
import Link from 'next/link';

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className="dt-sn dt-sl border-bottom">
      <div className="section-title text-sm-title title-wide no-after-title-wide mb-1">
        <h2>برچسبها</h2>
      </div>
      <ul className="tag-list">
        {tags.map((tag, index) => (
          <li key={index}>
            <Link href="#">{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}