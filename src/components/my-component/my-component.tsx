import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

import { defineCustomElement } from '@ionic/core/components/ion-button.js';
import { getIonMode } from '../../global/ionic-global';

@Component({
  tag: 'my-component',
  styleUrls: {
    ios: 'my-component.css',
    md: 'my-component.css',
  },
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  connectedCallback() {
    defineCustomElement();
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <Host class={getIonMode(this)}>
        <div>Hello, World! I'm {this.getText()}</div>
        <ion-button>Default</ion-button>
      </Host>
    );
  }
}
