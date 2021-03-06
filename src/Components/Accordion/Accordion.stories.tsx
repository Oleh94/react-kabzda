import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from "./Accordion";

export default {
    title: 'Example/Button',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const CollapsedAccordion = Template.bind({});
CollapsedAccordion.args = {
    title: "Collapsed Acc",
    collapsed: true,
    // setCollapsed: setCollapsed
}

