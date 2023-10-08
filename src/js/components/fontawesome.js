import { library, dom } from '@fortawesome/fontawesome-svg-core'

/**
 * https://fontawesome.com/search?o=r&m=free
 */

import {
  faClock,
  faPhone,
  faLocationDot,
  faHandHoldingDollar,
  faUserGroup,
  faTrophy,
  faSliders,
  faAngleUp,
} from '@fortawesome/free-solid-svg-icons'

import {
  faHandshake,
} from '@fortawesome/free-regular-svg-icons'

import {
  faCcVisa,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faClock,
  faPhone,
  faLocationDot,
  faHandHoldingDollar,
  faUserGroup,
  faHandshake,
  faTrophy,
  faCcVisa,
  faSliders,
  faAngleUp,
)

export default () => {
  dom.watch()
}
