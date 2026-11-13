import { Metadata } from 'next';
import LegalPage from '@/components/legal/legalPage/LegalPage';
import { disclaimerData } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | Disclaimer',
  description:
    'Nekodesk Portfolio の免責事項です。掲載内容、外部サイトへのリンク、著作権などについて定めています。',
};

const page = () => {
  return <LegalPage data={disclaimerData} />;
};

export default page;
