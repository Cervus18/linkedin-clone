import './RightSidebar.css'
import Account from './Account'
const RightSidebar = () => {
    return (
        <div className="right__sidebar">
            <div className="right__sidebar__content">
                <Account profilePic="https://img-0.journaldunet.com/elpfaIfEs3KBlGG2sxNVGQh2crg=/300x/smart/206e2137b616429dbdfb0260326abcdc/ccmcms-jdn/11547842.jpg" name="Bill Gates"/>
                <Account profilePic="https://www.ericsalomon.fr/wp-content/uploads/2014/03/Elon-Musk-fondateur-de-Paypal-Tesla-Motors-et-Spacex.jpg" name="Elon Musk"/>
                <Account profilePic="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg" name="Satya Nadella"/>
                <Account profilePic="https://images.frandroid.com/wp-content/uploads/2011/04/larry-page-profile.png" name="Larry Page"/>

            </div>
            <div className="right__sidebar__img">   
                <img src="linkedin-job.PNG" alt="" />
            </div>
        </div>
    )
}

export default RightSidebar
