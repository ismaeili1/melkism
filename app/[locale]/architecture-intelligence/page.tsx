import ArchitectureIntelligencePanel from "@/components/architecture-intelligence/ArchitectureIntelligencePanel";

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

export default async function ArchitectureIntelligencePage({
    params,
}: Props) {
    const { locale } = await params;

    return (
        <ArchitectureIntelligencePanel
            locale={normalizeLocale(locale)}
        />
    );
}
