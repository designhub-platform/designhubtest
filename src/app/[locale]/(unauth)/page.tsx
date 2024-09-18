import { HeroSection } from '@/containers/home/hero-section';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';


export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  

  return (
    <>
      <HeroSection />
      
    </>
  );
}
