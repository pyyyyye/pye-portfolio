import React from 'react';
import { Text } from '../../atoms';

interface IInputWrap {
  children: Children;
  type?: string;
  placeholder?: string;
  name: string;
  textarea?: boolean;
}
const InputWrap = ({
  children,
  type,
  placeholder,
  name,
  textarea,
}: IInputWrap) => (
  <div className="w-full flex flex-col gap-1">
    <label>
      <Text color="text-slate-400">{children}</Text>
    </label>
    {textarea ? (
      <textarea
        placeholder={placeholder}
        className="w-full p-4 h-36 bg-white border border-gray-light rounded-xl placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-yellow-bg"
        name="send_message"
      />
    ) : (
      <input
        name={name}
        className="w-full p-4 bg-white border border-gray-light rounded-xl placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-yellow-bg"
        required
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : '입력해주세요.'}
      />
    )}
  </div>
);

export default InputWrap;
