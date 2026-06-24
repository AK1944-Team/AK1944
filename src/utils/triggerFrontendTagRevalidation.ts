export const triggerFrontendTagRevalidation = async (tag: string) => {
  const revalidateUrl = process.env.FRONTEND_REVALIDATE_URL;
  const secret = process.env.REVALIDATE_SECRET;

  if (!revalidateUrl || !secret) {
    console.warn(
      "Skipping frontend revalidation: FRONTEND_REVALIDATE_URL or REVALIDATE_SECRET is missing.",
    );
    return;
  }

  try {
    const response = await fetch(revalidateUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ tag }),
    });

    if (!response.ok) {
      const responseText = await response.text();
      console.error(
        `Frontend revalidation failed (${response.status}): ${responseText}`,
      );
    }
  } catch (error) {
    console.error("Failed to call frontend revalidation endpoint", error);
  }
};
