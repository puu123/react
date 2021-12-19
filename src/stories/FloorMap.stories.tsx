import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {FloorMap} from "./FloorMap";

export default {
    title: 'FloorMap',
    component: FloorMap,
    argTypes: {},
  } as ComponentMeta<typeof FloorMap>;
  
  const Template: ComponentStory<typeof FloorMap> = () => <FloorMap></FloorMap>;
  
  export const Primary = Template.bind({});
  Primary.args = {
  };