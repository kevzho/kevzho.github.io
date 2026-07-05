import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function PixelInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className="pixel-input" {...props} />;
}

export function PixelTextarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="pixel-input pixel-input--textarea" {...props} />;
}
