import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Rating} from "./Rating";

export default {
    title: 'Example/Button',
    component: Rating
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyStar = Template.bind({});
EmptyStar.args = {
    ratingValue: 0,
    setRatingValue: x=>x
}

export const Star1 = Template.bind({});
Star1.args = {
    ratingValue: 1,
    setRatingValue: x=>x
}

export const Star2 = Template.bind({});
Star2.args = {
    ratingValue: 2,
    setRatingValue: x=>x
}

export const Star3 = Template.bind({});
Star3.args = {
    ratingValue: 3,
    setRatingValue: x=>x
}

export const Star4 = Template.bind({});
Star4.args = {
    ratingValue: 4,
    setRatingValue: x=>x
}

export const Star5 = Template.bind({});
Star5.args = {
    ratingValue: 5,
    setRatingValue: x=>x
}