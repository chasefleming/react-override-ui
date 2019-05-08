import { Icon } from './Icon';
import { Input } from './Input';
import { Dropdown } from './Dropdown';
import { Menu } from './Menu';
import { Modal } from './Modal';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { 
  faHeart, 
  faSortDown, 
  faEllipsisV, 
  faFolderPlus,
  faLink,
  faEye,
  faShareAlt,
  faCloudDownloadAlt,
  faCog,
  faChartLine 
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab, 
  faHeart, 
  faSortDown, 
  faEllipsisV, 
  faFolderPlus,
  faLink,
  faEye,
  faShareAlt,
  faCloudDownloadAlt,
  faCog,
  faChartLine
)

export default { Icon, Dropdown, Menu, Modal };