export type Locale = "en" | "ar";

export type TranslationKey = keyof typeof import("@/lib/translations").translations.en;
