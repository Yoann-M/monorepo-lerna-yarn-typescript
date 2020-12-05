import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.css',
  shadow: true,
})
export class UiButton {
  
  /**
   * type :  the style of the button
   */
  @Prop() type: string = 'primary';

  /**
   * To : Href url: 
   */
  @Prop() to: string = '';

  render() {
    return (
      <button class={`btn btn-${this.type}`}>
        <slot></slot>
      </button>
    );
  }

}
