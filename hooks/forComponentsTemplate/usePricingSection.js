import { useState } from "react";

export function usePricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const calculateSavings = (monthly, annual) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - annual;
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { savings, percentage };
  };

  return {
    isAnnual,
    setIsAnnual,
    hoveredPlan,
    setHoveredPlan,
    formatPrice,
    calculateSavings,
  };
}
