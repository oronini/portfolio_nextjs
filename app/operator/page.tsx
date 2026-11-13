import { Metadata } from 'next';
import LegalPage from '@/components/legal/legalPage/LegalPage';
import { operatorData } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | Operator',
  description:
    'Nekodesk の運営者情報です。サイトの目的、運営形態、お問い合わせ先をご案内します。',
};

const page = () => {
  return <LegalPage data={operatorData} />;
};

export default page;
