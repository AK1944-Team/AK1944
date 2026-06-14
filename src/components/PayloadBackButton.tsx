"use client";

import { useRouter, usePathname } from "next/navigation";

const PayloadBackButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  // only edit view
  if (!pathname?.includes("/collections/")) return null;
  if (!pathname?.includes("/admin")) return null;
  if (!pathname?.match(/\/collections\/[^/]+\/[^/]+$/)) return null;

  const match = pathname.match(/\/collections\/([^/]+)\//);
  const collection = match?.[1];

  const goToList = () => {
    if (collection) {
      router.push(`/admin/collections/${collection}`);
    } else {
      router.push("/admin");
    }
  };

  return (
    <button
      onClick={goToList}
      style={{
        marginRight: "10px",
        padding: "8px 12px",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "rgb(3, 106, 162)",
        color: "white",
        border: "none",
      }}
    >
      ← Wróć do listy
    </button>
  );
};

export default PayloadBackButton;
