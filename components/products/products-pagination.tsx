'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { useMemo } from "react"

interface ProductsPaginationProps {
  totalResults: number;
  itemsPerPage: number;
  setItemsPerPage: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

export function ProductsPagination({
  totalResults,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage
}: ProductsPaginationProps) {
  const totalPages = Math.ceil(totalResults / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginationButtons = useMemo(() => {
    const pages = new Set<number | string>();
    pages.add(1);

    if (currentPage > 3) {
      pages.add('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.add(i);
    }

    if (currentPage < totalPages - 2) {
      pages.add('...');
    }
    
    if (totalPages > 1) {
      pages.add(totalPages);
    }

    return Array.from(pages);
  }, [currentPage, totalPages]);


  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t">
      {/* Items per page */}
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-muted-foreground">Show</span>
        <Select
          value={String(itemsPerPage)}
          onValueChange={(value) => {
            setItemsPerPage(Number(value));
            setCurrentPage(1); // Reset to first page
          }}
        >
          <SelectTrigger className="w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12</SelectItem>
            <SelectItem value="24">24</SelectItem>
            <SelectItem value="48">48</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-muted-foreground">per page</span>
      </div>

      {/* Page Info */}
      <div className="text-sm text-muted-foreground">
        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalResults)}-{Math.min(currentPage * itemsPerPage, totalResults)} of {totalResults} results
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => handlePageChange(1)}>
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {paginationButtons.map((page, index) => (
            <Button
              key={index}
              variant={page === currentPage ? "default" : "outline"}
              size="sm"
              className="w-10"
              disabled={page === "..."}
              onClick={() => typeof page === 'number' && handlePageChange(page)}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
