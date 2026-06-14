export const formatRallyDate = (date: string | undefined) => {
  const rallyDate = date ? new Date(date) : null;

  return rallyDate
    ? `${rallyDate.toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
      })}, ${rallyDate.getFullYear()}`
    : "";
};
