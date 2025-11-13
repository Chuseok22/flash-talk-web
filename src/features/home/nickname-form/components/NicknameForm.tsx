'use client';

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { saveNickname } from "@/features/home/nickname-form/utils/nicknameStorage";

export default function NicknameForm() {

  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  }, []);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = nickname.trim();
    if (trimmed.length === 0) {
      return;
    }
    saveNickname(trimmed);
    router.push('/chat');
  }, [nickname, router]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col shadow-2xl rounded-2xl p-8"
    >
      <label>닉네임</label>
      <input
        id='nickname'
        name='nickname'
        value={nickname}
        onChange={onChange}
        placeholder="닉네임을 입력하세요"
        className="border-0 border-b-2 border-gray-500
                  focus:border-blue-500 focus:outline-none
                  transition-colors duration-200
                  placeholder:text-gray-400"
      />
      <button
        type='submit'
        disabled={nickname.trim().length === 0}
      >
        참여하기
      </button>
    </form>
  );
};