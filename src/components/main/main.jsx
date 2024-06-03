import './main.css'
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";



export default function Main() {
  return (
    <div className='test'>
        <div className="header">
            <div className="logo">
            <button>ChatGPT</button>
            <FaAngleDown className='downicon' />
            </div>
        </div>
        <div className="main">
            <div className="logo-tit">
                <div className="logo">
                    <img src="/im/logo.png" alt="" />
                </div>
                <div className="tit">
                    <h2>كيف يمكنني مساعدتك اليوم؟</h2>
                </div>
            </div>
            <div className="ad">
            <div className="advice">


                
            <div className="card">
                    <div className='cardall'>
                    <div className="tit-big">
                        <span>اكتب رسالة شكر</span>
                    </div>
                    <div className="tit-small">
                        <p>للشخص الذي أجرى معي المقابلة</p>
                    </div>
                    </div>
                    <div className='hic'>
                    <button><FaArrowUp   className='cardbtn'/></button>
                    </div>
                </div>




                <div className="card">
                    <div className='cardall'>
                    <div className="tit-big">
                        <span>اكتب رسالة شكر</span>
                    </div>
                    <div className="tit-small">
                        <p>للشخص الذي أجرى معي المقابلة</p>
                    </div>
                    </div>
                    <div className='hic'>
                    <button><FaArrowUp   className='cardbtn'/></button>
                    </div>
                </div>





                <div className="card">
                    <div className='cardall'>
                    <div className="tit-big">
                        <span>اكتب رسالة شكر</span>
                    </div>
                    <div className="tit-small">
                        <p>للشخص الذي أجرى معي المقابلة</p>
                    </div>
                    </div>
                    <div className='hic'>
                    <button><FaArrowUp   className='cardbtn'/></button>
                    </div>
                </div>




                <div className="card">
                    <div className='cardall'>
                    <div className="tit-big">
                        <span>اكتب رسالة شكر</span>
                    </div>
                    <div className="tit-small">
                        <p>للشخص الذي أجرى معي المقابلة</p>
                    </div>
                    </div>
                    <div className='hic'>
                    <button><FaArrowUp   className='cardbtn'/></button>
                    </div>
                </div>








            </div>

            </div>

            <div className="inpp">
                <div className="allinp">
                    <div className="textinp">
                    <input type="text" placeholder="تحدث مع ChatGPT" />
                </div>
                <div className="btn">
                    <button><FaLongArrowAltUp  className='coloricon'/></button>
                </div></div>

            </div>
        </div>
        
    </div>
  )
}
