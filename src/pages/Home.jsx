import Features from '../components/Features'
import './Home.css'
import Charts from '../components/charts'
import WidgetL from '../components/widgetL'
import WidgetS from '../components/widgetS'
import Products from './products'

export default function Home() {
  return (
    <div className='home'>
      <Features />
      <Charts />
      <div className='homewidget'>
        <WidgetL />
        <WidgetS />
        <Products />
      </div>
    </div>
  )
}
