import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: false,
})
export class UiButton {
  /**
    * Define the button style
   */
  @Prop() type: string = 'primary';
  /**
    * Emitted when the button is clicked
   */
  @Event() btnClick: EventEmitter<MouseEvent>;

  render() {
    return (
      <button
        onClick={(e) => this.btnClick.emit(e)}
        class={`btn btn-${this.type}`}
      >
        <slot></slot>
      </button>
    );
  }

  // When clicked invert the state of the toggle property
  // emitClick(e) {
  //   console.log('emi click', e)
  //   this.btnClick.emit('Clicked')
  // }

}
