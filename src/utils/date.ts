import i18n from "@i18n";

export const publishedAgo = (date: Date) => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diff / 60000);
  const diffHours = Math.floor(diff / 3600000);
  const diffDays = Math.floor(diff / 86400000);
  const diffWeeks = Math.floor(diff / 604800000);
  const diffMonths = Math.floor(diff / 2629800000);

  const dictionary = [
    {
      time: diffSeconds < 60,
      when: i18n.t("times.now"),
    },
    {
      time: diffMinutes < 60,
      when: i18n.t("times.minutes"),
    },
    {
      time: diffHours < 24,
      when: i18n.t("times.hours"),
    },
    {
      time: diffDays < 7,
      when: i18n.t("times.days"),
    },
    {
      time: diffWeeks < 4,
      when: i18n.t("times.weeks"),
    },
    {
      time: diffMonths < 12,
      when: i18n.t("times.months"),
    },
  ];

  const result = dictionary.find((item) => item.time && item.when);

  return result ? result.when : "há muito tempo";
};
