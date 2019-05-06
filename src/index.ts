import { router, mount } from 'redom'
import { Color } from './containers/color'

import * as image from './assets/image.jpg'

const app = router('.app', {
  color: Color
})

mount(document.body, app)

app.update('color', { src: image })
