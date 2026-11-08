'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './ContactForm.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMessage from '../common/parts/errorMessage/ErrorMessage';
import * as yup from 'yup';
import { useState } from 'react';
import ContactLoader from './contactLoader/ContactLoader';

const kanaWord = /^[\u3041-\u3096\u30A1-\u30FA\uFF65-\uFF9F\s]*$/;
const telephoneRegex = /^(0\d{1,4}-\d{1,4}-\d{4}|0\d{9,10})$/;

const errorScheme = yup.object().shape({
  name: yup.string().required('お名前が入力さていません。'),
  kana: yup
    .string()
    .required('フリガナが入力さていません。')
    .matches(kanaWord, 'ひらかなもしくはカタカナのみで入力してください。'),
  email: yup
    .string()
    .required('メールアドレスが入力さていません。')
    .email('メールアドレスの形式が正しくありません。'),
  tel: yup
    .string()
    .test(
      'tel',
      '電話番号の形式が正しくありません。',
      (value) =>
        value === undefined || value === '' || telephoneRegex.test(value)
    ),
  text: yup.string().required('お問い合わせ内容が入力さていません。'),
});

type ContactFormData = yup.InferType<typeof errorScheme>;

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [onLoad, setOnLoad] = useState(false);

  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>(
    {
      resolver: yupResolver(errorScheme),
      mode: 'onSubmit',
    }
  );

  const scrollProperty = () => {
    const body = document.querySelector('body');
    if (!body) return;

    if (onLoad) {
      body.style.overflow = 'hidden';
    } else {
      body.style.removeProperty('overflow');
    }
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsDisabled(true);
    setOnLoad(true);
    scrollProperty();

    try {
      const res = await fetch('/api/postMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert('送信されました。');
        // 失敗時は入力内容を残し、やり直せるようにする
        reset();
      } else if (res.status === 400) {
        setIsDisabled(false);
        alert('入力内容に誤りがあります。内容を確認してください。');
      } else {
        setIsDisabled(false);
        alert('送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch {
      setIsDisabled(false);
      alert('送信に失敗しました。通信環境を確認して再度お試しください。');
    } finally {
      setOnLoad(false);
      scrollProperty();
    }
  };

  return (
    <>
      {onLoad ? <ContactLoader /> : ''}
      <div className={styles.wrap}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <dl>
            <dt>
              お名前<span>＊</span>
            </dt>
            <dd>
              <input type="text" {...register('name')} />
              {formState.errors.name && (
                <ErrorMessage text={formState.errors.name?.message} />
              )}
            </dd>
            <dt>
              フリガナ<span>＊</span>
            </dt>
            <dd>
              <input type="text" {...register('kana')} />
              {formState.errors.kana && (
                <ErrorMessage text={formState.errors.kana?.message} />
              )}
            </dd>
            <dt>
              メールアドレス<span>＊</span>
            </dt>
            <dd>
              <input type="email" {...register('email')} />
              {formState.errors.email && (
                <ErrorMessage text={formState.errors.email?.message} />
              )}
            </dd>
            <dt>電話番号</dt>
            <dd>
              <input type="tel" {...register('tel')} />
              {formState.errors.tel && (
                <ErrorMessage text={formState.errors.tel?.message} />
              )}
            </dd>
            <dt>
              お問い合わせ内容<span>＊</span>
            </dt>
            <dd>
              <textarea
                {...register('text')}
                onChange={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                }}
              ></textarea>
              {formState.errors.text && (
                <ErrorMessage text={formState.errors.text?.message} />
              )}
            </dd>
          </dl>
          <button type="submit" disabled={isDisabled ? true : false}>
            送信する
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
