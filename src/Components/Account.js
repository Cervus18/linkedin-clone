import './Account.css'

const Account = ({profilePic,name}) => {
    return (
        <div className="account">
            <div className='div__info'>
                <img src={profilePic} alt="" />
                <div className="info">
                    <h3>{name}</h3>
                </div>
            </div>
            
            <button className='follow__btn'>+ Follow</button>
        </div>
    )
}

export default Account
