import { PATH } from '@/app/constants';
import { MenuItem } from '@/components';

export const sidebarMenu: MenuItem[] = [
  {
    label: 'Components',
    icon: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1632069098/noticon/hhtfggl2uroruklhyh1b.png',
    subMenu: [{ label: 'Buttons', path: PATH.BUTTONS }],
  },
  {
    label: 'Pages',
    icon: 'https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566952480/noticon/fyec5eye4l6hyxlpfxze.png',
    subMenu: [{ label: 'IU CD 플레이어', path: PATH.CDPLAYER }],
  },
];
