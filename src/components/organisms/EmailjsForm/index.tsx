import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { InputWrap } from '../../molecules';
import classNames from 'classnames';

const EmailjsForm = () => {
  const form = useRef(null);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'pye_gmail',
        'template_55sd5rh',
        e.currentTarget,
        'IoNCnufRsN0BUMmT8',
      )
      .then(
        result => {
          console.log(result.text, '전송 성공~');
        },
        error => {
          console.log(error.text, '전송 실패ㅠ');
        },
      );
  };

  return (
    <form ref={form} onSubmit={onSubmitForm}>
      <div className="flex flex-col gap-4">
        <InputWrap placeholder="이름을 입력해 주세요." name="from_name">
          Name
        </InputWrap>
        <InputWrap
          placeholder="이메일을 입력해 주세요."
          type="email"
          name="from_email">
          Email
        </InputWrap>
        <InputWrap
          placeholder="메세지를 입력해 주세요."
          name="send_message"
          textarea>
          Message
        </InputWrap>
      </div>
      <input
        type="submit"
        value="Send"
        className={classNames(
          'mt-8 w-full cursor-pointer bg-yellow text-black p-4 rounded-2xl hover:bg-yellow-bg',
        )}
      />
    </form>
  );
};

export default EmailjsForm;
