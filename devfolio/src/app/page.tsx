import InfoSideBar from '@/components/ui/info-bar'
import { Flex, Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout style={{ "height": "100vh", "padding": "50px" }} className='home-page'>
        <Sider width={300} className='home-page__sider'>
          <Flex justify="center" align="center" vertical style={{"height": "100%"}}>
            <InfoSideBar/>
          </Flex>
        </Sider>
    </Layout>
  )
}
