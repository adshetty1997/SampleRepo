import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import Chat from '../components/Chat';
import Profile from '../assets/profile.jpg';

export default {
  title: 'Components/Chat',
  component: Chat,
  decorators: [withDesign],
  argTypes: {},

  parameters: {
    design: {
      type: 'image',
      url: 'https://res.cloudinary.com/elie-tech/image/upload/v1604444026/frontwork-prod/7:10.png',
    },
  },
};

const Template = (args) => <Chat {...args} />;

export const ChatComponent = Template.bind({});
ChatComponent.args = {
  width: 375,
  borderRadius: 24,
  profile: Profile,
  name: 'Emily Dougrer',
  designation: 'Developer',
  bodyText: 'Hi there.👋 We use Boards to share initial goals and ideas.',
  backgroundColor: '#4643D3',
  fontStyle: 'Montserrat',
  fontColor: '#FFFFFF',
  onClose: () => {
    console.log('Close Clicked');
  },
  onSend: () => {
    console.log('Send Clicked');
  },
};
