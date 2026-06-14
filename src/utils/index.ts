import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

type RichTextNode = {
  [key: string]: unknown;
  text?: string;
  root?: RichTextNode | null;
  children?: RichTextNode[] | null;
};

export const formatDate = (isoDate: string): string =>
  new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);

export const cleanHTML = (html: string): string =>
  html.replace(/<[^>]+>/g, "").trim();

export const truncateText = (text: string, maxLength: number): string =>
  text.length > maxLength ? `${text.substring(0, maxLength - 3)}...` : text;

export const slugify = (text?: string): string | undefined =>
  !text?.trim()
    ? undefined
    : text
        .replace(/Ł/g, "L")
        .replace(/ł/g, "l")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/[\s_]+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

const normalizeRichTextWhitespace = (text: string): string =>
  text.replace(/\s+/g, " ").trim();

export const extractTextFromRichText = (
  node?: RichTextNode | RichTextNode[] | null,
): string => {
  if (!node) return "";

  if (Array.isArray(node)) {
    return normalizeRichTextWhitespace(
      node.map(extractTextFromRichText).filter(Boolean).join(" "),
    );
  }

  if (typeof node.text === "string") {
    return node.text;
  }

  const nestedText = [
    extractTextFromRichText(node.root),
    extractTextFromRichText(node.children),
  ]
    .filter(Boolean)
    .join(" ");

  return normalizeRichTextWhitespace(nestedText);
};

export const getExcerpt = (content: string, wordLimit: number) => {
  const normalizedContent = content.trim().replace(/\s+/g, " ");
  const words = normalizedContent.split(" ");

  if (words.length <= wordLimit) {
    return normalizedContent;
  }

  return `${words.slice(0, wordLimit).join(" ")}...`;
};

export const formatSlug = (value?: string, fallback?: string) => {
  if (value) return slugify(value);
  if (fallback) return slugify(fallback);
  return undefined;
};

export const formatBiogramDate = (dateString?: string | null): string => {
  if (!dateString) return "";

  // Jeśli data jest już w formacie DD.MM.YYYY, zwróć bez zmian
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(dateString.trim())) {
    return dateString.trim();
  }

  // Mapa polskich nazw miesięcy (dopełniacz)
  const monthMap: Record<string, string> = {
    stycznia: "01",
    lutego: "02",
    marca: "03",
    kwietnia: "04",
    maja: "05",
    czerwca: "06",
    lipca: "07",
    sierpnia: "08",
    września: "09",
    października: "10",
    listopada: "11",
    grudnia: "12",
    // Dodaj też mianownik na wszelki wypadek
    styczeń: "01",
    luty: "02",
    marzec: "03",
    kwiecień: "04",
    maj: "05",
    czerwiec: "06",
    lipiec: "07",
    sierpień: "08",
    wrzesień: "09",
    październik: "10",
    listopad: "11",
    grudzień: "12",
  };

  // Usuń miejsce (wszystko po przecinku)
  const dateOnly = dateString.split(",")[0].trim();

  // Szukaj wzorca: dzień miesiąc_słownie rok (z obsługą polskich znaków)
  const match = dateOnly.match(
    /(\d{1,2})\s+([\wąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)\s+(\d{4})/,
  );

  if (match) {
    const day = match[1].padStart(2, "0");
    const monthName = match[2].toLowerCase();
    const year = match[3];
    const month = monthMap[monthName];

    if (month) {
      return `${day}.${month}.${year}`;
    }
  }

  // Jeśli nie udało się przekonwertować, zwróć oryginalny tekst bez miejsca
  return dateOnly;
};
