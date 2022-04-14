import { Component, Prop, h, Host } from '@stencil/core';
import { format } from '../../utils/utils';

import { defineCustomElement } from '@ionic/core/components/ion-button.js';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
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
      <Host>
        <div>Hello, World! I'm {this.getText()}</div>
        <ion-button>Default</ion-button>
      </Host>
    );
  }
}
