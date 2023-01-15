import { NavLink } from "react-router-dom";
import React from "react";
import "./Notfound.css";

const Notfound = () => {
  return (
    <section id='About' className='thai-font'>
      <h5>เอ่อ เหมือนว่าจะเดินมาผิดทางนะครับ</h5>
      <h2>ไม่สิ นี่เรียกหลงทางแล้ว!!</h2>
      <div className='container about__container'>
        <div className='error__container'>
          <div className='error__container-image'>
            <img
              src='https://ieltsninja.com/content/wp-content/uploads/2021/01/Describe-a-Time-when-You-got-Lost-Somewhere.jpg'
              alt='lost-image'
            />
          </div>
        </div>
        <div className='about__content'>
          <p>
            การหลงทางเป็นเรื่องปกติครับ ไม่ต้องกังวลนะ มันเกิดขึ้นได้กับทุกคน
            นี่เองก็หลงทางบ่อย (มากเลยด้วย 555)
            เดี๋ยวนำทางกลับไปสู่หน้าหลักนะครับ กดปุ่มสีฟ้าใหญ่ๆด้านล่างเลยนะ ;w;
            เดี๋ยวเก็บเป็นความลับให้ ไม่บอกใครหรอก
          </p>
          <NavLink to='/' className='btn btn-primary'>
            กลับสู่หน้าหลัก
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
