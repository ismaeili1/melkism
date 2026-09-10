import ExperienceHub from "@/components/experience/ExperienceHub";

type Locale =
    | "fa"
    | "en"
    | "ar"
    | "tr";

type Props = {
    params: Promise<{
        locale: string;
    }>;
};

function normalizeLocale(
    locale: string,
): Locale {
    switch (locale) {
        case "fa":
        case "en":
        case "ar":
        case "tr":
            return locale;

        default:
            return "en";
    }
}

export default async function ExperiencePage({
    params,
}: Props) {
    const { locale } =
        await params;

    return (
        <ExperienceHub
            locale={normalizeLocale(
                locale,
            )}
        />
    );
}
