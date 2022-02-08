import { Factory } from './factory';
import { getHtmlFactory } from './html/factory';
import { ControlProvider } from './i-face-control-provider';

let factory: Factory | null = null;

const variants = {
  html: getHtmlFactory,
};

export const init = (variant: keyof typeof variants): void => {
  factory = variants[variant]();
};


export const getControl: ControlProvider = (type) => {
  if (factory === null) {
    throw new Error('not initialized');
  }
  return factory[type]() as never;
};
