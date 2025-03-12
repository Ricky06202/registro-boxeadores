import { useFormStateStore } from "@shared/store/formStateStore";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import React, { Children } from "react";

export interface PanelFlotanteProps {
  children: React.ReactNode;
  onClose: () => void;
  onAccept: () => void;
  title?: string;
  subtitle?: string;
  acceptText?: string;
  totalPages?: number; // Optional - allows parent to explicitly set the number of pages
}

export const PanelFlotante: React.FC<PanelFlotanteProps> = ({
  children,
  onClose,
  onAccept,
  title = "Panel Flotante",
  subtitle = "",
  acceptText = "Aceptar",
  totalPages: propTotalPages,
}) => {
  const childrenArray = Children.toArray(children);
  // Use provided totalPages if available, otherwise calculate from children
  const totalPages = propTotalPages ?? childrenArray.length;
  const currentPage = useFormStateStore((state) => state.currentPage);
  const nextPage = useFormStateStore((state) => state.nextPage);
  const prevPage = useFormStateStore((state) => state.prevPage);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) {
      prevPage();
    }
  };

  const handleNextOrAccept = () => {
    if (isLastPage) {
      onAccept();
    } else {
      nextPage();
    }
  };

  // Display only the current page's content
  // If totalPages was set manually, make sure we don't try to access a nonexistent child
  const currentContent = propTotalPages
    ? children // If using custom totalPages, show all children
    : childrenArray[currentPage - 1]; // Otherwise, show only current page

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-gray-500/75"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative bg-white rounded-lg p-4 w-full max-w-xl z-30">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 p-2 rounded-full"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {subtitle && <h3 className="mt-2 text-lg font-medium">{subtitle}</h3>}

        <div className="mt-4">{currentContent}</div>

        <div className="mt-4 flex items-center justify-between">
          <button
            className={`cursor-pointer transition duration-200 ease-in-out bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-sm flex items-center ${
              isFirstPage
                ? "opacity-50 cursor-not-allowed disabled:cursor-not-allowed"
                : ""
            }`}
            onClick={handlePrevPage}
            disabled={isFirstPage}
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Volver
          </button>

          {totalPages > 0 && (
            <button
              className="cursor-pointer transition duration-200 ease-in-out bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm flex items-center"
              onClick={handleNextOrAccept}
            >
              {isLastPage ? (
                <>
                  <Check className="h-6 w-6 mr-2" />
                  {acceptText}
                </>
              ) : (
                <>
                  <ArrowRight className="h-6 w-6 mr-2" />
                  Siguiente
                </>
              )}
            </button>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-2 text-center text-sm text-gray-500">
            Página {currentPage} de {totalPages}
          </div>
        )}
      </div>
    </div>
  );
};
