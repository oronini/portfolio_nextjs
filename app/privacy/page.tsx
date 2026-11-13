import { Metadata } from 'next';
import LegalPage from '@/components/legal/legalPage/LegalPage';
import { privacyData } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Nekodesk Portfolio | Privacy Policy',
  description:
    'Nekodesk Portfolio のプライバシーポリシーです。お問い合わせフォームで取得する情報の利用目的や取り扱いを定めています。',
};

const page = () => {
  return <LegalPage data={privacyData} />;
};

export default page;
