import * as React from 'react'
import{createDrawerNavigator} from 'react-navigation-drawer'
import{AppTabNavigator} from './AppTabNavigator'
import SidebarMenu from './SidebarMenu'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},},
    {contentComponent:SidebarMenu},
    {initialRouteName:'Home'
})