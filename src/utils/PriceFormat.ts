const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "ngn",
    }).format(amount);
}

export default formatPrice