import styled from 'styled-components'
import logoPic from '../../static/logo.png'


// styled  局部样式
export const HeaderWrapper = styled.div `
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  min-width: 1280px;
  width: 100%;
  text-align: center;
`
export const Logo = styled.div `
  float: left;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div `
  width: 74%;
  text-align: left;
  display: inline-block;
`

export const NavItem = styled.div `
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ec6149;
  }
`
export const SearchWrapper = styled.div `
  float: left;
  position: relative;
  i{
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.active-i{
      background-color: #ccc;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
}) `
  width: 160px;
  color: #333;
  box-sizing: border-box;
  height: 38px;
  border: 1px solid #eee;
  outline: none;
  border-radius: 18px;
  background-color: #eee;
  margin: 9px 0 0 20px;
  padding: 0 30px 0 20px;
  font-size: 14px;
  color: #777;
  transition: .3s;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 260px;
  }
`

export const Addition = styled.div `
  height: 56px;
  float: right;
`

export const Button = styled.div `
  box-sizing: border-box;
  display: inline-block;
  min-width: 80px;
  height: 38px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  padding: 6px 12px;
  &.books{
    background-color: #ea6f5a;
    color: #fff;
    padding: 6px 20px;
    i{
      margin-right: 5px;
    }
  }
`

export const SearchInfo = styled.div `
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color: #fff;
`

export const SearchInfoTitle = styled.div `
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.span `
  float: right;
  font-size: 13px;
  position: relative;
  cursor: Pointer;
  .spin{
    display: inline-block;
    font-size: 12px;
    right: 32px;
    bottom: -5px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`
export const SearchInfoContainer = styled.div `
  overflow: hidden;
`
export const SearchInfoItem = styled.a `
  float: left;
  padding: 0 5px;
  line-height: 20px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #333;
  border-radius: 2px;
  margin: 0 10px 10px 0;
`




