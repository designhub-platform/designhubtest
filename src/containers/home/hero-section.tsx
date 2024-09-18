import { useTranslations } from 'next-intl'
  
export function HeroSection() {
 const t = useTranslations("Index");
 return (
  <>
   <section className="">
    <h2>{t("sponsors_title")}</h2>
   </section>
  </>
 );
}
