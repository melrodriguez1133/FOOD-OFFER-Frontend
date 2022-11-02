import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Empresa',
    path: '/empresa',
    icon: <IoIcons.IoIosBusiness />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Registrar Empresa',
        path: '/empresa/registrar-empresa',
        icon: <IoIcons.IoIosAddCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Productos',
        path: '/empresa/productos-empresa',
        icon: <IoIcons.IoIosBasket/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Usuarios',
    path: '/usuarios',
    icon: <FaIcons.FaUsers />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Productos',
        path: '/usuarios/productos',
        icon: <IoIcons.IoIosBasket />
      }
    ]
  }
];