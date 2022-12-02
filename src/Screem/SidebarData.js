import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Empresas',
    path: '/empresa',
    icon: <IoIcons.IoIosBusiness />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Registrar Empresa',
        path: '/empresa/empresa/RegistrarEmpresa',
        icon: <IoIcons.IoIosAddCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Empresa',
        path: '/empresa/empresa',
        icon: <IoIcons.IoIosBusiness />,
        cName: 'sub-nav'
      },
      {
        title: 'Productos',
        path: '/empresa/productos-empresa',
        icon: <IoIcons.IoIosBasket/>,
        cName: 'sub-nav'
      }
    ]
  }
];