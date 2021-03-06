import {injectGlobal} from 'styled-components'

injectGlobal`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1536576837701'); /* IE9*/
    src: url('./iconfont.eot?t=1536576837701#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('./iconfont.ttf?t=1536576837701') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('./iconfont.svg?t=1536576837701#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`




