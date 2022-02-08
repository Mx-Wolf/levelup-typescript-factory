import {Button as ButtonInterface} from '../i-face-button';
export class Button implements ButtonInterface{
  constructor(
    public execute = ()=>undefined,
    public name = '',
    public disabled=false,
    public helpId= '',
    public label = '',
  ){}
}
