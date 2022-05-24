import './Features.css'

export default function Features() {
  return (
    <div className='featured'>
        <div className='featureItem'>
            <span className="featureT">Revenue</span>
            <div className="featuredMC">
                <span className="featuredM">$2,415</span>
                <span className="featuredMRate">-415</span>
                <i className ="FeaturedI negative" ></i>

            </div>
            <span className="featuredS">Compare to last week</span>
        </div>
        <div className='featureItem'>
            <span className="featureT">Loss</span>
            <div className="featuredMC">
                <span className="featuredM">$1,415</span>
                <span className="featuredMRate">-41</span>
                     <i className ="FeaturedI negative" ></i>

            </div>
            <span className="featuredS">Compare to last week</span>
        </div>
        <div className='featureItem'>
            <span className="featureT">Profit</span>
            <div className="featuredMC">
                <span className="featuredM">$2,415</span>
                <span className="featuredMRate">+25</span>
                <i className ="FeaturedI " ></i>

            </div>
            <span className="featuredS">Compare to last week</span>
        </div>
      
    </div>
  )
}
