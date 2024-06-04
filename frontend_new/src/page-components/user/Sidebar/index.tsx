import React, { FC } from 'react';
import { SidebarItem } from './SidebarItem';
import { NAVIGATION_SIDEBAR_ITEMS } from './constants';

export const Sidebar: FC = () => (
  <ul className="flex flex-col gap-5 min-w-36">
    {NAVIGATION_SIDEBAR_ITEMS.map((item) => (
      <SidebarItem key={item.id} item={item} />
    ))}
  </ul>
);
