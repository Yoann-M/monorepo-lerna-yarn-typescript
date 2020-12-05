import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ui-helloworld',
  styleUrl: 'ui-helloworld.css',
  shadow: true,
})
export class UiHelloworld {

  /**
   * The first name
   */
  @Prop() name: string;

  render() {
    return <div>Hello, World! I'm {this.name}</div>;
  }

}
