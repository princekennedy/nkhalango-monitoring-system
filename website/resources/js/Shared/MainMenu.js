import React from 'react';
import MainMenuItem from '@/Components/MainMenuItem';
import { WiDayThunderstorm } from 'react-icons/wi'
import { FiUsers } from 'react-icons/fi'
import { TiTree } from 'react-icons/ti'
import {
  VscHome,
  VscGraphScatter,
  VscBeaker,
  VscCommentDiscussion
} from 'react-icons/vsc'

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" icon={<VscHome />} />
      <MainMenuItem text="News" link="news.index" icon={<VscCommentDiscussion />} />
      <MainMenuItem text="Soils" link="soil.index" icon={<VscBeaker />} />
      <MainMenuItem text="Tree Species" link="tree-species.index" icon={<TiTree />} />
      <MainMenuItem text="Weather" link="weather.index" icon={<WiDayThunderstorm />} />
      <MainMenuItem text="Reports" link="report.index" icon={<VscGraphScatter />} />
      <MainMenuItem text="Users" link="user.index" icon={<FiUsers />} />
    </div>
  );
};
