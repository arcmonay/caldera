export function monthlyLabel(monthly: number): string {
  return `From $${monthly}/mo with financing`;
}

export function financeDisclaimer(): string {
  return "Payment examples assume 36 months and are illustrative only. Financing is offered through third-party lenders once a provider is connected, subject to credit approval and lender terms. Caldera does not guarantee approval, rates, or terms.";
}
