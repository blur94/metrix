export const getStatusColor = (status: string | undefined) => {
  switch (status) {
    case "active":
      return "green";
    case "inactive":
      return "gray";
    case "draft":
      return "yellow";
    default:
      return "gray";
  }
};

export const getPaymentStatusColor = (status: string | undefined) => {
  switch (status) {
    case "paid":
      return "green";
    case "due":
      return "orange";
    case "overdue":
      return "red";
    case "notdue":
      return "blue";
    case "active":
      return "green";
    default:
      return "gray";
  }
};

export const getPaymentHistoryStatusColor = (status: string) => {
  switch (status) {
    case "paid":
      return "green";
    case "failed":
      return "red";
    case "pending":
      return "yellow";
    default:
      return "gray";
  }
};
