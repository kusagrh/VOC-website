import React from "react";
import ProductPage from "./ProductPage";
import JobOpportunities from "../components/JobOpportunities";

export default function VaultHire() {
  return (
    <div className="bg-ink">
      <ProductPage productId="vaulthire" />

      <JobOpportunities
        id="vaulthire-jobs"
        showHeader={true}
      />
    </div>
  );
}