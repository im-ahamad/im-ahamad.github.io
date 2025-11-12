import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

const languages = [
  { lang: "Bangla", level: "Native" },
  { lang: "English", level: "Intermediate" },
  { lang: "Urdu/Hindi", level: "Intermediate" },
  { lang: "Chinese", level: "Begainer" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Footer Bottom */}
        <div className="text-center pt-12 mt-12 border-t">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()}
            <img
              src={logo}
              alt="MySelf"
              width={17}
              height={17}
              className="inline-block"
            />
            Md Ahamad Ullah. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
