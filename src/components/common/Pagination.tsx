import { usePagination, DOTS } from "../../hooks/usePagination";

import MaterialSymbolsChevronLeftRounded from "~icons/material-symbols/chevron-left-rounded";
import MaterialSymbolsChevronRightRounded from "~icons/material-symbols/chevron-right-rounded";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
};
export default function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: PaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange![paginationRange!.length - 1];
  return (
    <div className="mt-2 flex">
      <ul className={`pagination-container ${className}`}>
        {/* Left navigation arrow */}
        <li
          className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
          onClick={onPrevious}
        >
          <MaterialSymbolsChevronLeftRounded />
        </li>
        {paginationRange?.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          // Render our Page Pills
          return (
            <li
              className={`pagination-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          className={`pagination-item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
          onClick={onNext}
        >
          <MaterialSymbolsChevronRightRounded />
        </li>
      </ul>
    </div>
  );
}
