export function formatPrice(dollars: number) {
  return dollars.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
