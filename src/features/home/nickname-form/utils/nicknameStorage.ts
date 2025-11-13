const KEY = "ft:nickname";

export function saveNickname(nickname: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  const trimmed = nickname.trim();
  if (trimmed.length === 0) {
    return;
  }
  window.sessionStorage.setItem(KEY, trimmed);
}

export function loadNickname(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const nickname = window.sessionStorage.getItem(KEY);
  return nickname && nickname.trim().length > 0 ? nickname : null;
}

export function clearNickname(): void {
  if (typeof window === 'undefined') {
    return;
  }
  window.sessionStorage.removeItem(KEY);
}