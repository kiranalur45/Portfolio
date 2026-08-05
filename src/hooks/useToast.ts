import { useState, useCallback } from 'react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

let toastListener: ((toasts: ToastMessage[]) => void) | null = null;
let toastsState: ToastMessage[] = [];

export function showToast(title: string, message: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') {
  const newToast: ToastMessage = {
    id: Math.random().toString(36).substring(2, 9),
    type,
    title,
    message,
  };
  toastsState = [...toastsState, newToast];
  if (toastListener) toastListener(toastsState);

  setTimeout(() => {
    removeToast(newToast.id);
  }, 4000);
}

export function removeToast(id: string) {
  toastsState = toastsState.filter((t) => t.id !== id);
  if (toastListener) toastListener(toastsState);
}

export function useToastState() {
  const [toasts, setToasts] = useState<ToastMessage[]>(toastsState);

  const subscribe = useCallback(() => {
    toastListener = setToasts;
    return () => {
      toastListener = null;
    };
  }, []);

  return { toasts, subscribe };
}
