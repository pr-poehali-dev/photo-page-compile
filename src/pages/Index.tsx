import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import CatalogPage from "@/pages/CatalogPage";
import AboutPage from "@/pages/AboutPage";
import ReviewsPage from "@/pages/ReviewsPage";
import ContactsPage from "@/pages/ContactsPage";
import CartPage from "@/pages/CartPage";

type Page = "home" | "catalog" | "about" | "reviews" | "contacts" | "cart";

const AppContent = () => {
  const [page, setPage] = useState<Page>("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage onNavigate={setPage} />;
      case "catalog":
        return <CatalogPage />;
      case "about":
        return <AboutPage />;
      case "reviews":
        return <ReviewsPage />;
      case "contacts":
        return <ContactsPage />;
      case "cart":
        return <CartPage onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <Layout currentPage={page} onNavigate={setPage}>
      {renderPage()}
    </Layout>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default Index;
