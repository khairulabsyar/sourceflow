import { Loader2, Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

export interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (e: React.FormEvent) => void;
  searchButtonText?: string;
  containerClassName?: string;
  isLoading?: boolean;
}

export function SearchBar({
  className = '',
  onSearch,
  searchButtonText = 'Search jobs',
  containerClassName = '',
  isLoading = false,
  ...props
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading) {
      onSearch?.(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-xl p-1 shadow-lg ${containerClassName}`}
      role="search"
      aria-label="Job search"
    >
      <div className="flex flex-col sm:flex-row gap-0 w-full">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <Search
              className="h-5 w-5 text-gray-500"
              aria-hidden="true"
            />
          </div>
          <input
            type="search"
            className={`block w-full bg-transparent border-0 py-4 pl-12 pr-4 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm h-14 disabled:opacity-50 ${className}`}
            placeholder="E.g. networking, python, remote"
            disabled={isLoading}
            aria-label="Search for jobs"
            {...props}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-14 transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={isLoading ? 'Searching...' : 'Search for jobs'}
        >
          {isLoading ? (
            <>
              <Loader2
                className="h-4 w-4 mr-2 animate-spin"
                aria-hidden="true"
              />
              Searching...
            </>
          ) : (
            searchButtonText
          )}
        </button>
      </div>
    </form>
  );
}
