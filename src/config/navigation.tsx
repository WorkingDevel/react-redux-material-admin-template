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
        onClick: (event: React.MouseEvent<HTMLElement>) => (console.log('browse'))
      },
      {id: 'dev.db', title: 'Database', icon: <DnsRoundedIcon/>},
      {id: 'dev.storage', title: 'Storage', icon: <PermMediaOutlinedIcon/>},
      {id: 'dev.hosting', title: 'Hosting', icon: <PublicIcon/>},
      {id: 'dev.functions', title: 'Functions', icon: <SettingsEthernetIcon/>},
      {id: 'dev.mlkit', title: 'ML Kit', icon: <SettingsInputComponentIcon/>}
    ],
  },
  {
    id: 'qm',
    title: 'Quality',
    entries: [
      {id: 'qm.analytics', title: 'Analytics', icon: <SettingsIcon/>},
      {id: 'qm.performance', title: 'Performance', icon: <TimerIcon/>},
      {id: 'qm.lab', title: 'Test Lab', icon: <PhonelinkSetupIcon/>},
    ],
  },
];
