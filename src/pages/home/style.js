import styled from 'styled-components'

export const HomeWrapper = styled.div `
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div `
  float: left;
  width: 625px;
  padding-top: 30px;
  margin-left: 15px;
  .banner-img{
    width: 100%;
  }
`

export const HomeRight = styled.div `
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.ul `
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -15px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.li `
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #333;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
  padding-right: 10px;
  overflow: hidden;
  margin-left: 15px;
  margin-bottom: 10px;
  img{
    display: inline-block;
    float: left;
    width: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div `
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  img{
    width: 125px;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div `
  width: 450px;
  h3{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  p{
    font-size: 13px;
    line-height: 20px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div `
  margin: 30px 0;
  width: 280px;

`

export const RecommendItem = styled.div `
  width: 280px;
  height: 50px;
  margin-bottom: 5px;
  background: url(${(props) => props.imgUrl});
  background-size: 100% auto;
`

export const WriterWrapper = styled.div `
  width: 280px;
  box-sizing: border-box;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  height: 300px;
  text-align: center;
`

export const LoadMore = styled.div `
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  margin: 20px 0;
  cursor: pointer;
`

export const BackTop = styled.div `
  font-size: 14px;
  line-height: 1.2;
  padding-top: 14px;
  box-sizing: border-box;
  color: #fff;
  position: fixed;
  right: 50px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  background-color: #ddd;
`

