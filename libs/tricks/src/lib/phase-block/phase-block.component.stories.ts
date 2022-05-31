import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { PhaseBlockComponent } from './phase-block.component';

export default {
  title: 'PhaseBlockComponent',
  component: PhaseBlockComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<PhaseBlockComponent>;

const Template: Story<PhaseBlockComponent> = (args: PhaseBlockComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}