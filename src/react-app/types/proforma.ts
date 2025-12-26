// Core types for proforma data

export interface Proforma {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  assumptions: Assumptions;
  projections: Projections;
  metadata?: {
    description?: string;
    tags?: string[];
    industry?: string;
  };
}

export interface Assumptions {
  // Revenue assumptions
  revenue: {
    initialRevenue?: number;
    growthRate?: number;
    pricingModel?: 'fixed' | 'subscription' | 'usage' | 'hybrid';
  };
  // Market assumptions
  market: {
    targetMarketSize?: number;
    marketShare?: number;
    customerAcquisitionCost?: number;
    customerLifetimeValue?: number;
  };
  // Cost assumptions
  costs: {
    fixedCosts?: number;
    variableCosts?: number;
    costOfGoodsSold?: number;
  };
  // Time assumptions
  timeHorizon?: number;
}

export interface Projections {
  revenue: RevenueProjection[];
  expenses: ExpenseProjection[];
  metrics: {
    grossMargin?: number;
    netMargin?: number;
    breakEvenMonth?: number;
    totalRevenue?: number;
    totalExpenses?: number;
    netIncome?: number;
  };
}

export interface RevenueProjection {
  period: number;
  revenue: number;
  customers?: number;
  averageRevenuePerUser?: number;
}

export interface ExpenseProjection {
  period: number;
  expenses: number;
  fixedCosts?: number;
  variableCosts?: number;
  marketing?: number;
  operations?: number;
}



