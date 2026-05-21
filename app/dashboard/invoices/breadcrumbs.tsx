import Link from 'next/link';

type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav className="mb-6 flex">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href}>
          <Link
            href={breadcrumb.href}
            className={
              breadcrumb.active
                ? 'text-gray-900'
                : 'text-gray-500'
            }
          >
            {breadcrumb.label}
          </Link>

          {index <
            breadcrumbs.length - 1 && (
            <span className="mx-2">
              /
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}