import Handlebars from 'handlebars';

import { Block } from '../../modules';
import template from './button.tmpl';

import './button.scss';

import { IBlockProps } from '../../modules/Block/types';
import ButtonStatus from './enums';

interface IButtonProps {
  text?: string;
  status?: 'success' | 'error'
}

export default class Button extends Block<HTMLButtonElement, IButtonProps> {
  constructor(props: IButtonProps & Partial<IBlockProps & HTMLButtonElement>) {
    const wrapClass = 'button';
    super('button', {
      ...props,
      className: props.className ? `${props.className} ${wrapClass}` : wrapClass
    });
  }

  render() {
    const compiledTemplate = Handlebars.compile(template);
    const { text = '', disabled = false, status } = this.props;

    const wrapper = this.getContent();
    wrapper.disabled = disabled;

    switch (status) {
      case ButtonStatus.Success:
        wrapper.classList.remove('button--error');
        wrapper.classList.add('button--success');
        break;
      case ButtonStatus.Error:
        wrapper.classList.remove('button--success');
        wrapper.classList.add('button--error');
        break;
      default:
        break;
    }

    return compiledTemplate({ text });
  }
}
