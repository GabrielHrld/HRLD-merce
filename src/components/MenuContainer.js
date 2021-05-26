import React, {useState} from 'react'
import Button from './Button'

import '../styles/components/MenuContainer.scss'
import ProfileForm from './ProfileForm'

const MenuContainer = ({title1,title2,title3, title4, comp1, comp2, comp3, comp4}) => {
  const [section1, setSection1] = useState(true)
  const [section2, setSection2] = useState(false)

  const [section3, setSection3] = useState(false)
  const [section4, setSection4] = useState(false)

  const handleTitle1 = () => {
    setSection1(true)
    setSection2(false)
    if(title3) setSection3(false)
    if(title4) setSection3(false)
  }
  const handleTitle2 = () => {
    setSection1(false)
    setSection2(true)
    if(title3) setSection3(false)
    if(title4) setSection4(false)
  }

  if (title3){
    const handleTitle3 = () => {
      setSection1(false)
      setSection2(false)
      if(title3) setSection3(true)
      if(title4) setSection3(false)
    }
  }
  if (title4){
    const handleTitle4 = () => {
      setSection1(false)
      setSection2(false)
      if(title3) setSection3(false)
      if(title4) setSection4(true)
    }
  }
  
  return (
    <div className="menu-container">
      <header>
        <nav>
          <div className="menu-title_container">
            <div className={section1 ? "menu-title active" : "menu-title"} onClick={handleTitle1}>
              <h2>
                {title1}
              </h2>
            </div>
          </div>
          <div className="menu-title_container">
            <div className={section2 ? "menu-title active" : "menu-title"} onClick={handleTitle2}>
              <h2>
                {title2}
              </h2>
            </div>
          </div>
          {title3? ( 
            <div className="menu-title_container">
              <div className={section3 ? "menu-title active" : "menu-title"} onClick={handleTitle1}>
                <h2>
                  {title3}
                </h2>
              </div>
            </div>
            )
            : 
            (<div></div>)
          }
          {title4? ( 
            <div className="menu-title_container">
              <div className={section4 ? "menu-title active" : "menu-title"} onClick={handleTitle1}>
                <h2>
                  {title4}
                </h2>
              </div>
            </div>
            )
            : 
            (<div></div>)
          }
        </nav>
      </header>

      <div className="pages-wrapper">
      {section1 ? (
        <div className="page-container">
          <div className="page">
            {comp1}
          </div>
        </div>

        )
        : 
        ( <div></div>)
      }
      {section2 ? (
        <div className="page-container">
          <div className="page">
            {comp2}
          </div>
        </div>
        ) 
        : 
        (<div></div>)
      }
      {title3 ? (
        section3 ? 
        <div className="page-container">
          <div className="page">
            {comp3}
          </div>
        </div> 
      : 
        <div></div>
        ) 
        : 
        (<div></div>) 
      }
      {title4 ? (
        section4 ? 
        <div className="page-container">
          <div className="page">
            {comp4}
          </div>
        </div> 
        : 
          <div></div>
        ) 
      : 
        (<div></div>) 
      }
      </div>
    </div>
  )
}

export default MenuContainer
