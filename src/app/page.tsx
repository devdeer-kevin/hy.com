import { ReactElement } from 'react'
import NavigationTopComponent from '../../components/navigationTop'
import LandingPageComponent from '../../components/landingPage'
import FooterComponent from '../../components/footer'

export default function Home(): ReactElement {
    return (
        <>
            <NavigationTopComponent />
            <LandingPageComponent />
            <FooterComponent />
        </>
    )
}
