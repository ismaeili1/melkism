import type {
  LocalTimeContext,
  TimezoneDefinition,
} from "./timezone.types";

export class TimezoneService {
  find(
    timezone: string,
    definitions: TimezoneDefinition[]
  ): TimezoneDefinition | null {
    const normalized = timezone.trim().toLowerCase();

    return (
      definitions.find(
        (definition) =>
          definition.name.toLowerCase() === normalized
      ) ?? null
    );
  }

  createContext(
    timezone: string,
    date: Date = new Date()
  ): LocalTimeContext {
    const utcDateTime =
      date.toISOString();

    const localDateTime =
      new Intl.DateTimeFormat(
        "en-CA",
        {
          dateStyle: "medium",
          timeStyle: "medium",
          timeZone: timezone,
        }
      ).format(date);

    return {
      timezone,
      localDateTime,
      utcDateTime,
    };
  }
}