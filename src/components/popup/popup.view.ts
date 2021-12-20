import Handlebars from 'handlebars';

import { Block } from '../../modules';

import template from './popup.tmpl';

import './popup.scss';

import PopupController from './popup.controller';

import setInputValidationStatus from '../../utils/inputValidationStatus';

import { IBlockProps } from '../../modules/Block/types';

type IPopupProps = {
  visible: boolean;
};

const popupController = new PopupController();

type InputType = keyof typeof popupController.controls.inputs;

export default class Popup extends Block<HTMLDivElement, IPopupProps> {
  constructor(
    props: Partial<IPopupProps & Partial<IBlockProps & HTMLDivElement>>
  ) {
    const wrapClass = 'popup';
    super('div', {
      ...props,
      className: props.className ? `${props.className} ${wrapClass}` : wrapClass,
      events: {
        click: (e) => {
          if (e.target.classList.contains('popup')) {
            this.hide();
          }
        }
      }
    });

    this.hide();

    this.on('popup:show', () => {
      this.show();
    });
    this.on('popup:hide', () => {
      this.hide();
    });
  }

  hide() {
    Block.prototype.hide.call(this);
    Object.keys(popupController.controls.inputs).forEach((field: InputType) => {
      setInputValidationStatus.call(this, popupController.controls.inputs, field, 'valid');
    });
  }

  render() {
    const compiledTemplate = Handlebars.compile(template);

    const wrap = document.createElement('div');
    wrap.classList.add('popup__inner');
    wrap.classList.add('popup__inner--create-chat');
    wrap.classList.add('card');
    wrap.innerHTML = compiledTemplate({});

    const inputFieldset = wrap.querySelector('.fieldset--popup-title');
    inputFieldset?.append(popupController.controls.inputs.title.getContent());

    this.on('popup-create-chat:valid-field', (field: InputType) => {
      setInputValidationStatus.call(this, popupController.controls.inputs, field, 'valid');
    });
    this.on('popup-create-chat:invalid-field', (field: InputType) => {
      setInputValidationStatus.call(this, popupController.controls.inputs, field, 'invalid');
    });
    this.on('popup-create-chat:reset-check-results', () => {
      Object.keys(popupController.controls.inputs).forEach((field: InputType) => {
        setInputValidationStatus.call(this, popupController.controls.inputs, field, 'valid');
      });
    });

    const formActionsBlock = wrap.querySelector('.popup__inner__form-actions');
    formActionsBlock?.append(popupController.controls.buttons.close.getContent());
    formActionsBlock?.append(popupController.controls.buttons.create.getContent());

    return wrap;
  }
}
