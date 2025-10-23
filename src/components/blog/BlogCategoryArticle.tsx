// components/Categories.tsx
import Link from 'next/link';

interface Subcategory {
  name: string;
  href: string;
}

interface Category {
  name: string;
  href: string;
  subcategories?: Subcategory[];
}

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <div className="dt-sn dt-sl border-bottom mb-3">
      <div className="section-title text-sm-title title-wide no-after-title-wide mb-1">
        <h2>دسته ها</h2>
      </div>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <Link href={category.href}>{category.name}</Link>
            {category.subcategories && (
              <ul>
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link href={sub.href}>{sub.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}