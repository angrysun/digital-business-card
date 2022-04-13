import profile from '../images/profile.JPG'

export default function Info() {
  return (
    <div>
      <img src={profile} alt="Profile Pic" />
      <h1>Steven Vasquez</h1>
      <h2>Fullstack Developer</h2>
      <h4>www.stevenvasquez.me</h4>
      <a href="mailto:s.vasquez85@gmail.com?subject=Getting in touch" target="_blank" rel="noreferrer" id="button-gray"><i
        class="fa-solid fa-square-envelope"></i>Mail</a>
      <a href="https://www.linkedin.com/in/stevenvasquez85/" rel="noreferrer" target="_blank" id="button-linkedIn"><i class="fa-brands fa-linkedin"></i></a>
    </div>
  )
}
