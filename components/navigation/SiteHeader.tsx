import { Container } from "../ui/Container";
import { BrandMark } from "../brand/BrandMark";

import { DesktopNavigation } from "./DesktopNavigation";
import { HeaderActions } from "./HeaderActions";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavigation } from "./MobileNavigation";

import type { SupportedLocale } from "./navigation.config";

type SiteHeaderProps = {
  locale: SupportedLocale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background:
          "color-mix(in srgb, var(--melkism-color-background) 94%, transparent)",
        borderBottom:
          "1px solid var(--melkism-color-border)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container>
        <div
          className="melkism-header-inner"
          style={{
            minHeight: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--melkism-space-6)",
          }}
        >
          <BrandMark locale={locale} />

          <div className="melkism-header-desktop">
            <DesktopNavigation locale={locale} />

            <HeaderActions locale={locale} />

            <LanguageSwitcher locale={locale} />
          </div>

          <div className="melkism-header-mobile">
            <HeaderActions locale={locale} />
            <MobileNavigation locale={locale} />
          </div>
        </div>
      </Container>
    </header>
  );
}
