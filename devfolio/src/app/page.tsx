import { Heading } from '@/components/heading/heading'
import { Projects } from '@/components/projects/projects'
import { SkillsBar } from '@/components/skills/skills'
import { SocialLinks } from '@/components/socials/social-links'
import InfoSideBar from '@/components/ui/info-bar'
import { Flex, Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content } from 'antd/es/layout/layout'
import Image from "next/image";

export default function Home() {
  return (
    <Layout style={{ "height": "100vh", "padding": "50px" }} className='home-page'>
        <Sider width={300} className='home-page__sider'>
          <Flex justify="center" align="center" vertical style={{"height": "100%"}}>
            <InfoSideBar/>
          </Flex>
        </Sider>
        <Content>
          <Flex justify='center' align='center' vertical>
            <Heading/>
            <Image 
            src="/image 5.png"
            width="600"
            height="100"
            alt="demo"
            />
          </Flex>
          <SocialLinks/>
          <Projects/>
        </Content>
        <Sider width={300}>
          <Flex justify="center" align="center" vertical style={{"height": "100%"}}>
            <SkillsBar/>
          </Flex>
        </Sider>
    </Layout>
  )
}
