import { Component, Prop, h } from '@stencil/core';
import '@awesome-elements/layout';

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

  render() {
    return (
      <awesome-wrap>
        <h1>
          This is a title
        </h1>
        <awesome-flex>
          <awesome-flex-item>
            1
          </awesome-flex-item>
          <awesome-flex-item>
            2
          </awesome-flex-item>
          <awesome-flex-item>
            3
          </awesome-flex-item>
        </awesome-flex>
      </awesome-wrap>
    );
  }
}
