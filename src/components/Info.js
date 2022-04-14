import profile from '../images/profile.JPG'

export default function Info() {
  return (
    <div className='info'>
      <img src={profile} alt="Profile Pic" className='profile-img'/>
      <h1 className='title-name'>Steven Vasquez</h1>
      <h2 className='title-job'>Fullstack Developer</h2>
      <a href='https://www.stevenvasquez.me' target="_blank" rel="noreferrer" className='title-sitename'><span>www.stevenvasquez.me</span></a>
      <element className="button">
        <a href="mailto:s.vasquez85@gmail.com?subject=Getting in touch" target="_blank" rel="noreferrer" id="button-white"><i
          class="fa-solid --fa-li-margin fa-lg fa-square-envelope"></i>Email</a>
        <a href="https://www.linkedin.com/in/stevenvasquez85/" rel="noreferrer" target="_blank" id="button-linkedIn"><i class="fa-brands --fa-li-margin fa-lg fa-linkedin"></i>LinkedIn</a>
      </element>
    </div>
  )
}
