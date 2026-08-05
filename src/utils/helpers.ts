import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import resumePdf from '../assets/docs/resume.pdf';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text)
    .then(() => true)
    .catch(() => false);
}

export function downloadResume() {
  const link = document.createElement('a');
  link.href = resumePdf || '/resume.pdf';
  link.download = 'Kiran_Yamanappa_Alur_Resume.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
