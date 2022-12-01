import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Perfil',
    path: '/VisualizarPerfil',
    icon: <FaIcons.FaUserCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Editar Perfil',
        path: '/editarPefil',
        icon: <FaIcons.FaUserEdit />,
        cName: 'sub-nav'
      },
      {
        title: 'Eliminar Perfil',
        path: '/eliminarPerfil',
        icon: <FaIcons.FaUserMinus />,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Mis Productos',
    path: '/empresa/productos-empresa',
    icon: <IoIcons.IoIosBasket/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Ofertas',
    path: '/cliente/Ofertas',
    icon: <MdIcons.MdLocalOffer/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Empresas',
    path: '/empresas',
    icon: <IoIcons.IoIosBusiness />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Productos',
    path: '/productos',
    icon: <IoIcons.IoIosBasket/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Clientes',
    path: '/clientes',
    icon: <FaIcons.FaUsers/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Cerrar Sesion',
    path: '/',
    icon: <MdIcons.MdLogout/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  }
];