import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import {NavigatorGroup} from "../components/Navigator";
import * as React from "react";

export const navigation: Array<NavigatorGroup> = [
  {
    id: 'dev',
    title: 'Develop',
    entries: [
      {
        id: 'dev.auth',
        title: 'Authentication',
        icon: <PeopleIcon/>,
        href: "/auth"
      },
      {id: 'dev.db', title: 'Database', icon: <DnsRoundedIcon/>, href: "/dev/db"},
      {id: 'dev.storage', title: 'Storage', icon: <PermMediaOutlinedIcon/>, href: "/dev/storage"},
      {id: 'dev.hosting', title: 'Hosting', icon: <PublicIcon/>, href: "/dev/hosting"},
      {id: 'dev.functions', title: 'Functions', icon: <SettingsEthernetIcon/>, href: "/dev/functions"},
      {id: 'dev.mlkit', title: 'ML Kit', icon: <SettingsInputComponentIcon/>, href: "/dev/mlkit"}
    ],
  },
  {
    id: 'qm',
    title: 'Quality',
    entries: [
      {id: 'qm.analytics', title: 'Analytics', icon: <SettingsIcon/>, href: "/qm/analytics"},
      {id: 'qm.performance', title: 'Performance', icon: <TimerIcon/>, href: "/qm/performance"},
      {id: 'qm.lab', title: 'Test Lab', icon: <PhonelinkSetupIcon/>, href: "/qm/lab"},
    ],
  },
];
