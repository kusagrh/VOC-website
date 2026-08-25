import React from "react";
import ProductPage from "./ProductPage";
import FeaturedPrograms from "../components/FeaturedPrograms";

export default function VaultCareer() {
  return (
    <div className="bg-ink">
      <ProductPage productId="vaultcareer" />

      <FeaturedPrograms
        id="vaultcareer-courses"
        limit={0}
        showShowMore={false}
        eyebrow="VAULTCAREER COURSES"
        title="Build skills that lead to real careers."
        description="Explore practical technology courses designed to help you learn in-demand skills, build projects, and become job-ready."
      />
    </div>
  );
}