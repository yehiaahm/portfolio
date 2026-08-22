import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Inter, JetBrains_Mono, Cairo } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import GrainOverlay from "@/components/layout/GrainOverlay";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const arabic = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yehia Ahmed — Digital Product Builder",
  description:
    "Yehia Ahmed is a Computer Science student and digital product builder crafting modern, high-quality web experiences — where engineering precision meets thoughtful design.",
  metadataBase: new URL("https://yehiaahmed.dev"),
  openGraph: {
    title: "Yehia Ahmed — Digital Product Builder",
    description:
      "I build digital experiences that matter — modern websites and web applications, engineered with care.",
    type: "website",
  },
};

const themeInitScript = `
try {
  var locale = window.localStorage.getItem('portfolio-locale');
  if (locale === 'ar') {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${display.variable} ${serif.variable} ${sans.variable} ${mono.variable} ${arabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-cream-100 text-ink font-sans antialiased selection:bg-clay-300 selection:text-cream-100">
        <LanguageProvider>
          <GrainOverlay />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
